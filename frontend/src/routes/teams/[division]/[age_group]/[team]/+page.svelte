<script lang="ts">
	import PostColumns from '$lib/components/PostColumns.svelte';
	import Card, { Content } from '@smui/card';
	import type { PageData } from './$types';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { StrapiImage } from '$lib/types/strapi.types';

	export let data: PageData;

	let team;

	let headerImage: StrapiImage;

	let trainings; //Array

	let trainers; // Array

	let supervisors; // Array

	let ageGroup;

	let divisions; // Array

	let widgetFussballDe;

	$: {
		team = data.team;

		headerImage = data.team.header_image?.data?.attributes;

		trainings = data.team.training; //Array

		trainers = data.team.trainer.data; // Array

		supervisors = data.team.supervisor?.data; // Array

		ageGroup = data.team.age_group?.data;

		divisions = data.team.divisions?.data; // Array

		widgetFussballDe = data.team.widgetFussballDe?.data;
	}
</script>

<svelte:head>
  <title>SV 08 Ludweiler - {ageGroup ? (ageGroup.attributes.alternativeName || ageGroup.attributes.name) : ''} {divisions ? divisions[0].attributes?.name : ''} {team.display_name}</title>
  <meta name="description" content="{ageGroup ? (ageGroup.attributes.alternativeName || ageGroup.attributes.name) : ''} {divisions ? divisions[0].attributes?.name : ''} {team.display_name} des SV 08 Ludweiler" />
</svelte:head>


<PageHeader image={headerImage} maxHeight={false}></PageHeader>

<div class="-mt-36 flex-auto p-4 md:container md:mx-auto">
	<Card variant="raised">
		<Content
			><h2 class="mt-0">
				{team.display_name}
			</h2>
			<div>
				{#if ageGroup.attributes}
					<span>{ageGroup.attributes.alternativeName || ageGroup.attributes.name}</span>
				{/if}

				{#if divisions?.length && divisions[0].attributes.name !== ageGroup.attributes.alternativeName}
					<span> / </span><span>{divisions[0].attributes.name}</span>
				{/if}
			</div>

			{#if team.league}
				<pre>{team.league}</pre>
			{/if}

			{#if trainers?.length}
				<h3>Trainer</h3>
				{#each trainers as trainer}
					<ul>
						<li>{trainer.attributes.firstname} {trainer.attributes.name}</li>
					</ul>
				{/each}
			{/if}

			{#if supervisors?.length}
				<h3>Betreuer</h3>
				{#each supervisors as supervisor}
					<ul>
						<li>{supervisor.attributes.firstname} {supervisor.attributes.name}</li>
					</ul>
				{/each}
			{/if}

			{#if trainings?.length}
				<h3>Training</h3>
				<ul>
					{#each trainings as training}
						<li>
							{training.day}: {training.start}
							{#if training.end} - {training.end}{/if}
						</li>
					{/each}
				</ul>
			{/if}

			{#if data.teamContent}
				{@html data.teamContent.code}
			{/if}
		</Content>
	</Card>
</div>

{#if data.posts.data}
	<section class="flex-auto p-4 md:container md:mx-auto">
		<h2 id="news">News</h2>
		<PostColumns posts={data.posts.data} meta={data.posts.meta} showTeamCategory={false} />
	</section>
{/if}

<style></style>
