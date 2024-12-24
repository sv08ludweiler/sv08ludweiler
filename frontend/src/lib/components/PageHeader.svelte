<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import { generateImageSize, generateImageSrcSet } from '$lib/utils';
	import Button from '@smui/button';
	import { onDestroy } from 'svelte';

	interface Props {
		/**
		 * Image of header
		 */
		image?: StrapiImage | undefined;
		/**
		 * Header max height
		 */
		maxHeight?: boolean;
	}

	let { image = undefined, maxHeight = true }: Props = $props();

	let dialog: HTMLDialogElement | undefined = $state();

	let open = $state(false);

	const showImage = () => {
		dialog && dialog.showModal();
		open = true;
		pushState('', {
			showModal: true,
		});
	};

	const pageSubscription = page.subscribe((page) => {
		if (!page.state.showModal) {
			dialog && dialog.close();
		}
	});

	onDestroy(() => {
		pageSubscription();
	});

	/**
	 * Close dialog on backdrop click;
	 */
	const closeDialog = (event: MouseEvent & { currentTarget: EventTarget & Window }) => {
		if (dialog && dialog.hasAttribute('open') && event.target === dialog) {
			history.back();
		}
	};

	function onCloseDialog(event: Event & { currentTarget: EventTarget & HTMLDialogElement }) {
		open = false;
		console.log('onclose dialog');

		if ($page.state.showModal) {
			history.back();
		}
	}
</script>

{#if image}
	{#if maxHeight}
		<button class="placeholder max-height w-full overflow-hidden bg-green-600" onclick={showImage}>
			<img
				height={image.height}
				width={image.width}
				class="h-full w-full object-cover"
				src={env.PUBLIC_FRONTEND_STRAPI_HOST + image.formats.small.url}
				srcset={generateImageSrcSet(image)}
				sizes={generateImageSize(image)}
				alt={image.alternativeText}
				loading="eager"
			/>
		</button>
	{:else}
		<button class="placeholder w-full overflow-hidden bg-green-600" onclick={showImage}>
			<img
				class="w-full"
				height={image.height}
				width={image.width}
				src={env.PUBLIC_FRONTEND_STRAPI_HOST + image.url}
				srcset={generateImageSrcSet(image)}
				sizes={generateImageSize(image)}
				alt={image.alternativeText}
				draggable="false"
				loading="eager"
			/>
		</button>
	{/if}
	<dialog bind:this={dialog} onclose={onCloseDialog}>
		<div class="flex flex-col">
			<div class="flex justify-end">
				<Button
					aria-label="schließen"
					onclick={() => {
						dialog && dialog.close();
					}}>&#x2715;</Button
				>
			</div>
			<div class="flex-auto">
				{#if open}
					<img
						class="w-full"
						height={image.height}
						width={image.width}
						src={env.PUBLIC_FRONTEND_STRAPI_HOST + image.url}
						srcset={generateImageSrcSet(image)}
						sizes={generateImageSize(image)}
						alt={image.alternativeText}
					/>
				{/if}
				{#if image.caption}
					<div class="p-2">
						{image.caption}
					</div>
				{/if}
			</div>
		</div>
	</dialog>
{:else}
	<div class="placeholder h-72 w-full bg-green-600"></div>
{/if}

<svelte:window onclick={closeDialog} />

<style lang="scss">
	.max-height {
		height: clamp(5rem, 52.5vw, 39.375rem);
	}

	img {
		user-select: none;
	}

	dialog {
		border-radius: 4px;
	}

	.placeholder {
		view-transition-name: header-img;
	}
</style>
