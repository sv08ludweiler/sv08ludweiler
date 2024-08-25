<script lang="ts" context="module">
	const loadScript = async () => {
		if (dev) {
			import('./widget.js');
		} else {
			import('https://widget-api.fupa.net/vendor/widget.js?v1');
		}
	};

	if (browser) {
		loadScript();
	}
</script>

<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { beforeNavigate } from '$app/navigation';
	import Card from '@smui/card';

	export let widgetId: string | undefined;

	// const loadWidgetData = async (id: string) => {
	// 	let r = await fetch('https://widget-api.fupa.net/v1/widgets/'.concat(id));
	// 	if (!r.ok) throw new Error('widget fetch error');
	// 	const widgetData = await r.json();
	// 	return widgetData;
	// };

	let widgetContainer: HTMLDivElement;

	beforeNavigate(() => {
		// remove widget when navigating to trigger mutation observer
		widgetId = undefined;
	});
</script>

<Card class="hostcard inline-flex flex-1 items-center justify-center">
	<!-- <Content class="inline-flex h-full w-full justify-center">
		<div id={`widget-${id}`} class="flex h-full w-full justify-center">...</div>
	</Content> -->
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
