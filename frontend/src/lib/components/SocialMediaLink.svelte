<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';

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
	export let icon: string;
</script>

<a {href} {title} aria-label={title} target="_blank">
	<img src={PUBLIC_STRAPI_HOST + icon} alt={title} aria-hidden="true" />
</a>

<style>
	a {
		display: inline-flex;
		height: 40px;
		filter: grayscale(0.7);
		transition: filter 150ms linear;
	}
	a:hover,
	a:focus {
		filter: none;
	}

	img {
		height: 100%;
	}
</style>
