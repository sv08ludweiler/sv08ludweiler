<script lang="ts" module>
	const loadScript = async () => {
		// @ts-expect-error ignore
		import('./widget.js');
	};
	if (browser) {
		loadScript();
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { beforeNavigate } from '$app/navigation';
	import Card from '@smui/card';

	interface Props {
		widgetId: string | undefined;
	}

	let { widgetId = $bindable() }: Props = $props();

	let widgetContainer: HTMLDivElement | undefined = $state();

	beforeNavigate(({ from, to }) => {
		if (JSON.stringify(from) !== JSON.stringify(to)) {
			// remove widget when navigating to trigger mutation observer
			widgetId = undefined;
		}
	});
</script>

<Card class="hostcard inline-flex flex-1 items-center justify-center">
	{#if widgetId}
		<div id={`fp-widget_root-${widgetId}`} bind:this={widgetContainer}>
			<a href="https://www.fupa.net/club/sv-ludweiler" target="_blank" rel="noopener"
				>SVL auf FuPa</a
			>
		</div>
	{/if}
</Card>

<style lang="scss">
	:global(.hostcard) {
		height: 185.5px;
		overflow: hidden;
		text-emphasis: center;

		:global(div) {
			width: 100%;
		}

		:global(.fp-team-liveticker-view) {
			padding: 0;
		}

		:global(.match-header-status-text) {
			text-align: center;
		}
	}

	:global(.fupa_widget) {
		width: 100%;
		:global(a) {
			text-decoration: none;
		}
		:global(.spielbericht_subheadline) {
			display: none;
		}
		:global(.navileiste),
		:global(.navileiste_zusatz),
		:global(.liveticker_ausgabe) {
			display: none;
		}
		> :global(div:last-child) {
			display: none;
		}

		:global(#ergebnis) {
			color: inherit;
			font-size: 1.5rem;
		}

		// "Noch kein Livetickermelder eingetragen. Hier kannst du dich eintragen"
		:global(td[colspan='3'][style='text-align:center']) {
			display: none;
		}

		:global(table) {
			width: 100%;
			height: 100%;
		}

		:global(br[style='clear:both;']) {
			display: none;
		}

		:global(.img-cdn-wrapper.team) {
			max-width: 70px !important;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		:global(.live_uhrzeit) {
			display: none;
		}
	}

	:global(.fp-widget-footer) {
		font-size: 10px;
	}
</style>
