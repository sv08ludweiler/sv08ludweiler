<script lang="ts">
	import type { PageData } from './$types';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Read <a href="./posts">posts</a></p>


{#if data.landingPage.data.attributes.Vereinsspielplan}

	<h2>{data.landingPage.data.attributes.Vereinsspielplan.title}</h2>
	<FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
{/if}
