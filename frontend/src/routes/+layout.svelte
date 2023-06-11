<script lang="ts">
	import type { LayoutData } from './$types';
	import wappen from '$lib/assets/wappen.png';
	import '../app.css';
	// import '../../static/smui.css';

	export let data: LayoutData;
</script>

<div class="flex h-full w-full flex-col">
	<header class="bg-green-700 text-white">
		<nav class="flex flex-row justify-between items-center flex-wrap p-4 md:container md:mx-auto">
			<a href="/" aria-label="Home">
				<img class="inline max-h-[60px]" alt="wappen" src={wappen} aria-hidden="true" />
				<span>SV 08 Ludweiler</span>
			</a>
			<ul class="flex flex-row gap-5 flex-wrap justify-center">
				{#each data.mainMenu.attributes.entries as navItem}
					{#if navItem.__component === 'navigation.external-navigation-item'}
						<li><a target="_blank" href={navItem.link}>{navItem.title}</a></li>
					{:else if navItem.__component === 'navigation.page-nested-navigation-item'}
						<li>{navItem.page.title}</li>
					{:else if navItem.__component === 'navigation.team-navigation-item'}
						<li>{navItem.title}</li>
					{:else if navItem.__component === 'navigation.page-navigation-item'}
						<li><a href="/page/{navItem.page.data.attributes.slug}">{navItem.title}</a></li>
					{/if}
				{/each}
			</ul>
		</nav>
	</header>

	<!-- {JSON.stringify(data.mainMenu.attributes.entries, null, '\t')} -->

	<main>
		<slot />
	</main>

	<footer class="bg-green-500 text-white">
		<section class="wappen-section">
			<img class="wappen ml-auto mr-auto" alt="wappen" src={wappen} />
		</section>
		<section class="min-h-[200px] bg-green-600">
			<div class="p-4 md:container md:mx-auto">Partner</div>
		</section>
		<section class="min-h-[200px] bg-green-700">
			<div class="p-4 md:container md:mx-auto">Social Media</div>
		</section>
	</footer>
</div>

<style>
	footer {
		margin-top: clamp(75px, 15vw, 130px);
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
