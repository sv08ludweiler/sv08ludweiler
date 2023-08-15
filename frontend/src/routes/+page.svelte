<script lang="ts">
	import type { PageData } from './$types';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';
	import headerImage from '$lib/assets/header.webp';
	import PostColumns from '$lib/components/PostColumns.svelte';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';
	import FupaWidget from '$lib/components/fupa/FupaWidget.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>SV 08 Ludweiler</title>
	<meta name="description" content="Homepage des Fußballverein SV 08 Ludweiler" />
</svelte:head>

<img
	class="w-full aspect-auto"
	alt="SV 08 Ludweiler Wandgraffiti"
	src={headerImage}
	width="988"
	height="300"
/>

{#if data.landingPage?.data?.attributes?.headline_widgets.length}
	<section class="flex gap-5 justify-center -mt-10 mb-10 flex-wrap px-5 max-w-screen-xl m-auto">
		{#each data.landingPage.data.attributes.headline_widgets as widget}
			<FupaWidget widgetId={widget.widget_id}></FupaWidget>
		{/each}
	</section>
{/if}

<section class="my-5 px-4">
	<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
		{#if data?.supporter?.attributes?.items}
			{#each data?.supporter?.attributes?.items as item}
				<SocialMediaLink
					title={item.title}
					href={item?.link}
					icon={item?.image?.data?.attributes}
				/>
			{/each}
		{/if}
	</div>
</section>

{#if data.news}
	<section class="flex-auto px-4 md:container md:mx-auto">
		<h2 id="news">Aktuell</h2>
		<PostColumns posts={data.news.data} meta={data.news.meta} />
	</section>
{/if}

<section class="flex-auto px-4 md:container md:mx-auto">
	{#if data?.landingPage?.data?.attributes?.Vereinsspielplan}
		<h2>{data.landingPage.data.attributes.Vereinsspielplan.title}</h2>
		<FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
	{/if}
</section>
