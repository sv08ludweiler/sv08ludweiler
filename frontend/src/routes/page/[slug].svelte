<script lang="ts" context="module">
	export const prerender = true;
	import { browser } from '$app/env';
	import type { I_SERVER_PAGE } from '$lib/types/strapi';
	import { envVariables } from '$lib/utils/variables';
	import type { Load } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	const serverBase = envVariables.serverBasePath;
	const apiToken = envVariables.apiToken;
	const url = `${serverBase}/api/pages`;

	export const load: Load = async ({ page, fetch }) => {
		const { slug } = page.params;

		console.log(slug);

		// Now, we'll fetch the blog post from Strapi
		const res = await fetch(url + '?filters[slug][$eq]=' + slug, {
			headers: {
				Authorization: `Bearer ${apiToken}`
			}
		});

		if (res.status !== 200) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with ID ${slug} was not found`);
			return { status: res.status, error };
		} else {
			const data = await res.json();

			const page: I_SERVER_PAGE = data.data[0];

			let content = page.attributes.content;

			// TODO check if it works client/server-sided
			// if (browser) {

			const showdown = (await import('showdown')).default;
			const converter = new showdown.Converter();
			page.attributes.content = converter.makeHtml(content);

			return { props: { page } };
		}
	};
</script>

<script lang="ts">
	export let page: I_SERVER_PAGE;

	$: content = page.attributes.content;
</script>

<svelte:head>
	<title>{page.attributes.title}</title>
</svelte:head>

{@html content}
