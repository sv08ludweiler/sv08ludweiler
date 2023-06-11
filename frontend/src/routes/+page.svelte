<script lang="ts">
	import type { PageData } from './$types';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';
	import headerImage from '$lib/assets/header.jpg';

	export let data: PageData;
</script>

<img class="w-full" alt="SV 08 Ludweiler Wandgraffiti" src={headerImage}>


<div class="flex-auto p-4 md:container md:mx-auto">
	<h1>Welcome to SvelteKit</h1>
	<p>Read <a href="./posts">posts</a></p>

	{#if data.landingPage.data.attributes.Vereinsspielplan}
		<h2>{data.landingPage.data.attributes.Vereinsspielplan.title}</h2>
		<FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
	{/if}
</div>
