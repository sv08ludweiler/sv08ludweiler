<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { StrapiImage } from '$lib/types/strapi.types';

	/**
	 * Image of header
	 */
	export let image: StrapiImage | undefined = undefined;

	/**
	 * Header max height
	 */
	export let maxHeight = true;
</script>

{#if image}
	{#if maxHeight}
		<div class="placeholder w-full bg-green-600 overflow-hidden max-height">
			<img
				height={image.height}
				width={image.width}
				class="w-full object-cover h-full"
				src={env.PUBLIC_FRONTEND_STRAPI_HOST + image.url}
				alt={image.alternativeText}
			/>
		</div>
	{:else}
		<div class="placeholder w-full bg-green-600 overflow-hidden">
			<img
				class="w-full"
				height={image.height}
				width={image.width}
				src={env.PUBLIC_FRONTEND_STRAPI_HOST + image.url}
				alt={image.alternativeText}
			/>
		</div>{/if}
{:else}
	<div class="placeholder h-72 w-full bg-green-600" />
{/if}

<style lang="scss">
	.max-height {
		height: clamp(5rem, 52.5vw, 39.375rem);
	}
</style>
