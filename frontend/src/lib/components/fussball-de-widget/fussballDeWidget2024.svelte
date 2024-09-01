<script lang="ts" context="module">
	function generateSecureRandomId(length: number) {
		const randomValues = new Uint32Array(length);

		crypto.getRandomValues(randomValues);

		const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = randomValues[i] % characters.length;
			result += characters[randomIndex];
		}
		return result;
	}

	interface IframeMessage extends Event {
		data: {
			type: string;
			iframeName: string;
			height: number;
		};
	}
</script>

<script lang="ts">
	export let title = '';
	/**
	 * Fussball.de widget id.
	 */
	export let widgetId: string;

	export let widgetType = 'competition';

	const iframeName = `${generateSecureRandomId(4)}_fussballde_widget-${widgetId}`;

	let iframeHeight = 'auto';

	/**
	 * Listen for height of iframe
	 * @param event
	 */
	const onMessage = (event: IframeMessage) => {
		if (event.data.type === 'fussballde_widget:resize' && event.data.iframeName == iframeName) {
			iframeHeight = `${event.data.height}px`;
		}
	};
</script>

<svelte:window on:message={onMessage} />

<iframe
	title={title || `fussball.de Widget ${widgetId}`}
	src={`https://next.fussball.de/widget/${widgetType}/${widgetId}`}
	name={iframeName}
	width="100%"
	height={iframeHeight}
	frameborder="0"
	scrolling="no"
></iframe>
