<script lang="ts">
	import type { LayoutData } from './$types';
	import wappen from '$lib/assets/wappen.png';
	import '../app.css';

	export let data: LayoutData;
</script>

<div class="flex h-full w-full flex-col">
	<header class="bg-green-700 text-white">
		<nav class="md:container md:mx-auto p-4">
            <a href="/" aria-label="Home">
                <img class="max-h-[60px] inline" alt="wappen" src={wappen} aria-hidden="true"/>
                <span>SV 08 Ludweiler</span>
            </a>
			<ul>
				{#each data.navigation as navItem}
					<li>{navItem.title}</li>
				{/each}
			</ul>
		</nav>
	</header>

	<main class="flex-auto md:container md:mx-auto p-4">
		<slot />
	</main>

	<footer class="bg-green-500 text-white">
		<section class="wappen-section">
			<img class="wappen ml-auto mr-auto" alt="wappen" src={wappen} />
		</section>
		<section class="min-h-[200px] bg-green-600">
			<div class="md:container md:mx-auto p-4">Partner</div>
		</section>
		<section class="min-h-[200px] bg-green-700">
			<div class="md:container md:mx-auto p-4">Social Media</div>
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
