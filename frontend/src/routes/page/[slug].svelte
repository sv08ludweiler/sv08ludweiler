<script lang="ts" context="module">
	// export const ssr = true;
	export const prerender = true;
	import type { I_SERVER_RESPONSE } from '$lib/types/strapi';
	import type { I_SERVER_PAGE } from '$lib/types/server/page';
	import { envVariables } from '$lib/utils/variables';
	import type { Load } from '@sveltejs/kit';
	import Image from '$lib/components/strapi/Image.svelte';

	const serverBase = envVariables.serverBasePath;
	const apiToken = envVariables.apiToken;
	const url = `${serverBase}/api/pages`;

	export const load: Load = async ({ page, fetch }) => {
		const { slug } = page.params;

		console.log(slug);

		// Now, we'll fetch the blog post from Strapi
		const res = await fetch(url + '?populate=*&filters[slug][$eq]=' + slug, {
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
			const data: I_SERVER_RESPONSE<I_SERVER_PAGE> = await res.json();

			const page: I_SERVER_PAGE = data.data[0].attributes;

			let content = page.content;

			// TODO check if it works client/server-sided
			// if (browser) {

			const showdown = (await import('showdown')).default;
			const converter = new showdown.Converter();
			page.content = converter.makeHtml(content);

			return { props: { page } };
		}
	};
</script>

<script lang="ts">
	import Card, { Content } from '@smui/card';
	export let page: I_SERVER_PAGE;

	console.log({ page });

	$: content = page.content;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<article>
	<section class="header">
		{#if page.headerimage && page.headerimage.data !== null}
			<Image image={page.headerimage.data.attributes} />
		{:else}
			<div class="header-image-placeholder bg-primary h-40" />
		{/if}
	</section>

	<section class="container mx-auto move-top">
		<Card>
			<Content>{@html content}</Content>
		</Card>
	</section>
</article>

<style lang="scss">
	.move-top {
		margin-top: -6vh;
	}

	section.header {
		max-height: 35vw;
		overflow: hidden;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			object-position: 50% 10%;
		}
	}
</style>
