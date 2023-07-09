<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
	import Card, { Content } from '@smui/card';
	import type { PageData } from './$types';

	export let data: PageData;

	let team = data.team;

	let headerImage = data.team.header_image?.data?.attributes;

	let trainings = data.team.training; //Array

	let trainers = data.team.trainer.data; // Array

	let supervisors = data.team.supervisor?.data; // Array

	let ageGroup = data.team.age_group?.data;

	let divisions = data.team.divisions?.data; // Array

	let widgetFussballDe = data.team.widgetFussballDe?.data;
</script>

{#if headerImage}
	<img
		class="w-full"
		src={PUBLIC_STRAPI_HOST + headerImage.url}
		alt={headerImage.alternativeText}
	/>
{:else}
	<div class="placeholder h-72 w-full bg-green-600" />
{/if}

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

<section>
	{#each data.posts.data as post}
		<Card>
			<Content>
				<h4>{post.attributes.title}</h4>
				<p>{@html post.attributes.previewText}</p>
			</Content>
		</Card>
	{/each}
</section>

<style></style>
