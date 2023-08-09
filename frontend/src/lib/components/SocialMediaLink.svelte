<script lang="ts">
	import { env } from '$env/dynamic/public'
	import type { StrapiImage } from '$lib/types/strapi.types';

	/**
	 * Title of social media.
	 */
	export let title: string;

	/**
	 * External link of social media.
	 */
		export let href = '';

	/**
	 * Icon url.
	 */
	export let icon: StrapiImage;	
</script>

<a {href} {title} aria-label={title} target="_blank">
	<img width={icon.width} height={icon.height} src={env.PUBLIC_STRAPI_HOST + icon.url} alt={title || icon.alternativeText} aria-hidden="true" />
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
