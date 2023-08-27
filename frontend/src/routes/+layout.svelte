<script lang="ts">
	import wappen from '$lib/assets/wappen.png';
	import wappenWebP from '$lib/assets/wappen.webp';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';

	import '../app.css';
	import '../global.css';
	import '../root-styles.css';
	import type { LayoutData } from './$types';

	import NavBar from '$lib/components/nav/NavBar.svelte';

	export let data: LayoutData;
	

</script>

<div class="flex h-full w-full flex-col">
	<NavBar mainMenu={data?.mainMenu}></NavBar>

	<main class="flex-auto">
		<slot />
	</main>

	<footer class="bg-green-500 text-white">
		<section class="wappen-section">
			<picture >
				<source srcset={wappenWebP} type="image/webp" />
				<source srcset={wappen} type="image/png" />
				<img class="wappen ml-auto mr-auto" srcset={wappen} alt="Wappen" width="545" height="644"/>
			  </picture>
		</section>
		<section class="flex min-h-[100px] items-center justify-center bg-green-600 p-8">
			<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
				{#if data?.supporter?.attributes?.items}
					{#each data?.supporter?.attributes?.items as item}
						<SocialMediaLink
							title={item.title}
							href={item?.link}
							icon={item?.image?.data?.attributes}
						/>
					{/each}
				{/if}
			</div>
		</section>
		<section class="flex min-h-[100px] items-center justify-center bg-green-700 py-8">
			<!-- <div class="p-4 md:container md:mx-auto">Social Media</div> -->
			<div class="flex items-center justify-center gap-4" aria-label="Social Media">
				{#if data?.socialMedia?.attributes?.items}
					{#each data?.socialMedia?.attributes?.items as item}
						<SocialMediaLink
							title={item.name}
							href={item?.link}
							icon={item?.icon?.data?.attributes}
						/>
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
