<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	/**
	 * Unique id of element wrapper.
	 */
	export let id = browser ? Math.random() : crypto.randomUUID();

	/**
	 * Fussball.de widget id.
	 */
	export let widgetId = '02M2VM4FP8000000VUM1DNPDVS6J43VQ';

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
