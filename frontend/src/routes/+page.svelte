<script lang="ts">
	import type { PageData } from './$types';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';
	import headerImage from '$lib/assets/header.jpg';
	import PostColumns from '$lib/components/PostColumns.svelte';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>SV 08 Ludweiler</title>
	<meta name="description" content="Homepage des Fußballverein SV 08 Ludweiler" />
</svelte:head>

<img class="w-full" alt="SV 08 Ludweiler Wandgraffiti" src={headerImage} />

<section class="my-5 px-4">
	<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
		{#if data?.supporter?.attributes?.items}
			{#each data?.supporter?.attributes?.items as item}
				<SocialMediaLink
					title={item.name}
					href={item?.link}
					icon={item?.image?.data?.attributes?.url}
				/>
			{/each}
		{/if}
	</div>
</section>

{#if data.news}
	<section class="flex-auto px-4 md:container md:mx-auto">
		<h2 id="news">News</h2>
		<PostColumns posts={data.news.data} meta={data.news.meta} />
	</section>
{/if}

<section class="flex-auto px-4 md:container md:mx-auto">
	{#if data?.landingPage?.data?.attributes?.Vereinsspielplan}
		<h2>{data.landingPage.data.attributes.Vereinsspielplan.title}</h2>
		<FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
	{/if}
</section>
