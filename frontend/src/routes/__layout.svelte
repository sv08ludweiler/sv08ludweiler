<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const url = `/api/main-menu`;
		const res = await fetch(url);
		const mainMenu = await res.json();

		if (res.ok) {
			return {
				props: {
					mainMenu
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../global.scss';
	import type { I_SERVER_MAIN_MENU, I_SERVER_RESPONSE } from '$lib/types/strapi';
	import Footer from '$lib/components/footer/Footer.svelte';

	export let mainMenu: I_SERVER_RESPONSE<I_SERVER_MAIN_MENU>;
</script>

<Header entries={mainMenu.data.attributes.entries} />

<main class="flex-auto">
	<slot />
</main>

<Footer />
