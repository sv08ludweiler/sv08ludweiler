<script>
	import { onMount } from 'svelte';

	/**
	 * Unique id of element wrapper.
	 */
	export let id = crypto.randomUUID();

	/**
	 * Fussball.de widget id.
	 */
	export let widgetId = '02M2VM4FP8000000VUM1DNPDVS6J43VQ';

	onMount(() => {
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
