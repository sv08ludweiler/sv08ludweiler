<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	interface Props {
		/**
		 * Unique id of element wrapper.
		 */
		id?: string;
		/**
		 * Fussball.de widget id.
		 */
		widgetId: string;
	}

	let {
		id = browser
			? `fussball-de-id_${Date.now()}${Math.floor(Math.random() * 100)}`
			: crypto.randomUUID(),
		widgetId,
	}: Props = $props();

	onMount(() => {
		setTimeout(() => {
			// es-lint-ignore @typescript-eslint/ban-ts-comment
			// @ts-ignore
			new fussballdeWidgetAPI().showWidget(id, widgetId);
		});
	});
</script>

<div class="fussball-de-widget">
	<div {id}></div>
</div>

<style>
	:global(iframe) {
		width: 100%;
	}
</style>
