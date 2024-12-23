<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { StrapiImage } from '$lib/types/strapi.types';

	

	

	
	interface Props {
		/**
	 * Title of social media.
	 */
		title: string;
		/**
	 * External link of social media.
	 */
		href?: string;
		/**
	 * Icon url.
	 */
		icon: StrapiImage;
	}

	let { title, href = '', icon }: Props = $props();
</script>

<a {href} {title} aria-label={title} target="_blank">
	<img
		width={icon?.width}
		height={icon?.height}
		src={env.PUBLIC_FRONTEND_STRAPI_HOST + icon?.url}
		alt={title || icon?.alternativeText}
		aria-hidden="true"
		loading="lazy"
	/>
</a>

<style>
	a {
		display: inline-flex;
		height: 2.5rem;
		filter: grayscale(0.7);
		transition: filter 150ms linear;
	}
	a:hover,
	a:focus {
		filter: none;
	}

	img {
		height: 100%;
		width: auto;
	}
</style>
