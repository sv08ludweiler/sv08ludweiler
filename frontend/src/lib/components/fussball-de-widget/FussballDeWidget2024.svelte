<script lang="ts" module>
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
	

	interface Props {
		title?: string;
		/**
	 * Fussball.de widget id.
	 */
		widgetId: string;
		widgetType?: string;
	}

	let { title = '', widgetId, widgetType = 'competition' }: Props = $props();

	const iframeName = `${generateSecureRandomId(4)}_fussballde_widget-${widgetId}`;

	let iframeHeight = $state('auto');

	/**
	 * Listen for height of iframe
	 * @param event
	 */
	const onMessage = (event: IframeMessage) => {
		if (event.data.type === 'fussballde_widget:resize' && event.data.iframeName == iframeName) {
			iframeHeight = `${event.data.height}px`;
		}
	};

	let wait = $state(false);

	setTimeout(() => {
		//workaround to draw iframe in correct height when reloading whole page
		wait = true;
	});
</script>

<svelte:window onmessage={onMessage} />

<!-- workaround to draw iframe in correct height when reloading whole page -->
{#if wait}
	<iframe
		title={title || `fussball.de Widget ${widgetId}`}
		src={`https://next.fussball.de/widget/${widgetType}/${widgetId}`}
		name={iframeName}
		width="100%"
		height={iframeHeight}
		frameborder="0"
		scrolling="no"
	></iframe>
{/if}
