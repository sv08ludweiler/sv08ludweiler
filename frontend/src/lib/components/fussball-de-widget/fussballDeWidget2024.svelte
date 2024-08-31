<script lang="ts" context="module">
	function generateSecureRandomId(length: number) {
		const randomValues = new Uint32Array(length);
		window.crypto.getRandomValues(randomValues);

		const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = randomValues[i] % characters.length;
			result += characters[randomIndex];
		}
		return result;
	}
</script>

<script lang="ts">
	export let title = '';
	/**
	 * Fussball.de widget id.
	 */
	export let widgetId: string;

	export let widgetType = 'competition';
</script>

<iframe
	title={title || `fussball.de Widget ${widgetId}`}
	src={`https://next.fussball.de/widget/${widgetType}/${widgetId}`}
	name={`${generateSecureRandomId(4)}_fussballde_widget-${widgetId}`}
	width="100%"
	frameborder="0"
	scrolling="no"
></iframe>
