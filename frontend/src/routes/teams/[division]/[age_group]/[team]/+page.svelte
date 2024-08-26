<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PostColumns from '$lib/components/PostColumns.svelte';
	import TrainingList from '$lib/components/TrainingList.svelte';
	import FupaWidget from '$lib/components/fupa/FupaWidget.svelte';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import type { PageData } from './$types';
	import Trainer from '$lib/components/Trainer.svelte';

	export let data: PageData;

	let team;

	let headerImage: StrapiImage;

	let trainings; //Array

	let trainers; // Array

	let supervisors; // Array

	let ageGroup;

	let divisions; // Array

	let widgetFussballDe;

	let nextGameWidget: { widget_id: string; name: string } | null;

	$: {
		team = data.team;

		headerImage = data.team.header_image?.data?.attributes;

		trainings = data.team?.training; //Array

		trainers = data.team.trainers?.data; // Array

		supervisors = data.team.supervisors?.data; // Array

		ageGroup = data.team.age_group?.data;

		divisions = data.team.divisions?.data; // Array

		widgetFussballDe = data?.team?.widgetFussballDe;

		nextGameWidget = data.team.fupa_widget_next_game;
	}

	/**
	 * Whether there is more content than info
	 */
	let hasSubmenu = false;

	$: {
		hasSubmenu = data.posts.data.length || !!widgetFussballDe;
	}
</script>

<svelte:head>
	<title
		>SV 08 Ludweiler - {ageGroup
			? ageGroup.attributes.alternativeName || ageGroup.attributes.name
			: ''}
		{divisions ? divisions[0].attributes?.name : ''}
		{team.display_name}</title
	>
	<meta
		name="description"
		content="{ageGroup
			? ageGroup.attributes.alternativeName || ageGroup.attributes.name
			: ''} {divisions
			? divisions[0].attributes?.name
			: ''} {team.display_name} des SV 08 Ludweiler"
	/>
</svelte:head>

{#if hasSubmenu}
	<div class="submenu fixed z-10 w-full bg-green-700 text-white">
		<ul
			class="flex h-full flex-row items-center gap-3 overflow-hidden overflow-x-auto px-4 md:container md:mx-auto"
		>
			<li class="nav-menu h-full"><a class="menu-item" href="#infos">Infos</a></li>
			{#if data.posts.data.length}
				<li class="nav-menu h-full"><a class="menu-item" href="#news">Aktuelles</a></li>
			{/if}
			{#if widgetFussballDe}
				{#each widgetFussballDe as widget}
					<li class="nav-menu h-full">
						<a class="menu-item" href={`#${widget.title.trim().replace(' ', '-')}`}
							>{widget.title}</a
						>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
{/if}

<div class="page-content" class:has-submenu={hasSubmenu}>
	<PageHeader image={headerImage} maxHeight={true}></PageHeader>

	<section>
		<div class="info-grid p-4 md:container md:mx-auto">
			<div class="g-headline">
				<h2 class="target m-0" id="infos">
					<!-- {#if ageGroup.attributes}
						<span>{ageGroup.attributes.alternativeName || ageGroup.attributes.name}</span>
					{/if}
					{#if divisions?.length && divisions[0].attributes.name !== ageGroup.attributes.alternativeName}
						<span>{divisions[0].attributes.name}</span>
					{/if} -->
					<span>{team.display_name}</span>
				</h2>
				{#if team.league}
					<pre>{team.league}</pre>
				{/if}
			</div>
			<div class="g-info">
				{#if data.teamContent}
					{@html data.teamContent.code}
				{/if}
				{#if trainers?.length}
					<h3>Trainer</h3>
					{#each trainers as trainer}
						<ul>
							<li>
								<Trainer
									firstName={trainer.attributes.first_name}
									lastName={trainer.attributes.last_name}
									phone={trainer.attributes.phone_public && trainer.attributes.phone}
									email={trainer.attributes.mail_public && trainer.attributes.email}
								></Trainer>
							</li>
						</ul>
					{/each}
				{/if}

				{#if supervisors?.length}
					<h3>Betreuer</h3>
					{#each supervisors as supervisor}
						<ul>
							<li>
								<Trainer
									firstName={supervisor.attributes.first_name}
									lastName={supervisor.attributes.last_name}
									phone={supervisor.attributes.phone}
									email={supervisor.attributes.email}
								></Trainer>
							</li>
						</ul>
					{/each}
				{/if}

				{#if trainings?.length}
					<h3>Training</h3>
					<TrainingList {trainings}></TrainingList>
				{/if}
			</div>
			<div class="g-nextGame">
				{#if nextGameWidget}
					<FupaWidget widgetId={nextGameWidget.widget_id}></FupaWidget>
				{/if}
			</div>
		</div>
	</section>

	{#if data.posts.data.length}
		<section>
			<div class="flex-auto p-4 md:container md:mx-auto">
				<h2 id="news">Aktuelles</h2>
				<PostColumns posts={data.posts.data} meta={data.posts.meta} showTeamCategory={false} />
			</div>
		</section>
	{/if}

	{#if widgetFussballDe}
		{#each widgetFussballDe as widget}
			<section>
				<div class="flex-auto py-4 md:container md:mx-auto">
					<h2 id={widget.title.trim().replace(' ', '-')}>{widget.title}</h2>
					{#key widget.widgetid}
						<FussballDeWidget widgetId={widget.widgetid} />
					{/key}
				</div>
			</section>
		{/each}
	{/if}
</div>

<style lang="scss">
	.submenu {
		height: var(--submenu-height);
	}

	.page-content {
		&.has-submenu {
			margin-top: var(--submenu-height);
		}
		&.has-submenu :target:before {
			content: '';
			display: block;
			height: 145px;
			margin: -145px 0 0;
		}
	}
	section:nth-child(even) {
		@apply bg-green-50;
	}

	.info-grid {
		display: grid;
		grid-template-areas: 'headline' 'info' 'nextgame ';
		column-gap: 0;
		row-gap: 1rem;

		@media (min-width: 950px) {
			grid-template-areas: 'headline nextgame' 'info nextgame';
			column-gap: 1rem;
		}
	}

	.g-headline {
		grid-area: headline;
	}
	.g-info {
		grid-area: info;
	}
	.g-nextGame {
		grid-area: nextgame;

		@media (min-width: 950px) {
			margin-top: -5rem;
		}
	}
</style>
