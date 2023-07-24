<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
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
		<div class="placeholder w-full bg-green-600 overflow-hidden h-[25rem]">
			<img
				class="w-full object-cover h-[25rem]"
				src={PUBLIC_STRAPI_HOST + image.url}
				alt={image.alternativeText}
			/>
		</div>
	{:else}
    <div class="placeholder w-full bg-green-600 overflow-hidden">
        <img
            class="w-full"
            src={PUBLIC_STRAPI_HOST + image.url}
            alt={image.alternativeText}
        />
    </div>{/if}
{:else}
	<div class="placeholder h-72 w-full bg-green-600" />
{/if}
