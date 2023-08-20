<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	/**
	 * Unique id of element wrapper.
	 */
	export let id: string = browser
		? `fussball-de-id_${Date.now()}${Math.floor(Math.random() * 100)}`
		: crypto.randomUUID();

	/**
	 * Fussball.de widget id.
	 */
	export let widgetId: string;

	onMount(() => {
		// es-lint-ignore @typescript-eslint/ban-ts-comment
		// @ts-ignore
		new fussballdeWidgetAPI().showWidget(id, widgetId);
	});
</script>

<div class="fussball-de-widget">
	<div {id} />
</div>

<style>
	:global(iframe) {
		width: 100%;
	}
</style>
