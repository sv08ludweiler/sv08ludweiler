<script lang="ts">
	import wappen from '$lib/assets/wappen.png';
	import wappenWebP from '$lib/assets/wappen.webp';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	import '../app.css';
	import '../global.css';
	import '../root-styles.css';
	// import '../../static/smui.css'; // imported in app.html
	import type { LayoutData } from './$types';

	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { onNavigate } from '$app/navigation';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	/**
	 * Start view transition on navigate
	 */
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(async () => {
		if (!dev && pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: ${r}`);
				},
				onRegisterError(error) {
					console.log('SW registration error', error);
				},
			});
		}
	});

	let webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');
</script>

<svelte:head>
	{@html webManifestLink}
</svelte:head>

<div class="flex h-full w-full flex-col">
	<NavBar mainMenu={data?.mainMenu}></NavBar>

	<main class="flex-auto">
		{@render children?.()}
	</main>

	<footer class="bg-green-500 text-white">
		<section class="wappen-section">
			<picture>
				<source srcset={wappenWebP} type="image/webp" />
				<source srcset={wappen} type="image/png" />
				<img
					class="wappen ml-auto mr-auto"
					srcset={wappen}
					alt="Wappen"
					width="545"
					height="644"
					loading="lazy"
				/>
			</picture>
		</section>
		<section class="flex min-h-[100px] items-center justify-center bg-green-600 p-8">
			<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
				{#if data?.supporter?.items}
					{#each data?.supporter?.items as item}
						<SocialMediaLink title={item.title} href={item?.link} icon={item?.image} />
					{/each}
				{/if}
			</div>
		</section>
		<section class="flex min-h-[100px] items-center justify-center bg-green-700 py-8">
			<!-- <div class="p-4 md:container md:mx-auto">Social Media</div> -->
			<div class="flex items-center justify-center gap-4" aria-label="Social Media">
				{#if data?.socialMedia?.items}
					{#each data?.socialMedia?.items as item}
						<SocialMediaLink title={item.name} href={item?.link} icon={item?.icon} />
					{/each}
				{/if}
			</div>
		</section>
	</footer>
</div>

<style>
	main {
		margin-top: var(--page-nav-bar-height, 75px);
	}

	footer {
		margin-top: clamp(10rem, 15vw, 13rem);
	}

	.wappen-section {
		position: relative;
		height: 25vw;
		min-height: 80px;
		max-height: 150px;
	}
	.wappen {
		width: 25vw;
		max-width: 200px;
		min-width: 100px;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
	}
</style>
