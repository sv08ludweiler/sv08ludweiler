<script lang="ts">
	import Card, { Content } from '@smui/card';
	import type { PageData } from './$types';
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';

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

<!-- {JSON.stringify(data.team)} -->


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

			<!-- {#if content}
				{@html content}
			{/if} -->
		</Content>
	</Card>
</div>

<style></style>