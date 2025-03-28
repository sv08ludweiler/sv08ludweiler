<script lang="ts">
	import { env } from '$env/dynamic/public';
	import event from '$lib/assets/icons/event.svg';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import { generateImageSize, generateImageSrcSet } from '$lib/utils';
	import Button, { Label } from '@smui/button';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';

	interface Props {
		/**
		 * Title of post
		 */
		title: string;
		/**
		 * Content of post
		 */
		previewText?: string;
		/**
		 * Link to post
		 */
		href: string;
		/**
		 * Header image of post.
		 */
		headerImage?: StrapiImage | undefined;
		/**
		 * Publish date of post.
		 */
		publishedAt?: string;
		/**
		 * Update date of post.
		 */
		updatedAt?: string;
	}

	let {
		title,
		previewText = '',
		href,
		headerImage = undefined,
		publishedAt = '',
		updatedAt = '',
	}: Props = $props();
</script>

<a
	class="flex flex-auto p-[1px] drop-shadow-sm transition-all hover:drop-shadow-xl focus:drop-shadow-xl"
	{href}
	target="_blank"
	use:Ripple={{ surface: true, color: 'primary' }}
>
	<Card class="flex flex-auto overflow-hidden">
		{#if headerImage}
			<div class="aspect-video h-60 w-full overflow-hidden">
				<img
					class="h-full w-full object-cover"
					src={env.PUBLIC_FRONTEND_STRAPI_HOST + headerImage.url}
					srcset={generateImageSrcSet(headerImage)}
					sizes={generateImageSize(headerImage)}
					width={headerImage.width}
					height={headerImage.height}
					alt={headerImage.alternativeText || title}
					loading="lazy"
				/>
			</div>
		{/if}
		<Content class="flex-auto">
			<h3 class="mt-0">{title}</h3>

			<table class="-my-2 border-separate border-spacing-y-2">
				<tbody>
					{#if publishedAt && !updatedAt}
						<tr>
							<td
								><img
									class="icon icon-event h-[0.875rem] w-[0.875rem] text-xs"
									height="25"
									width="25"
									alt="Veröffentlicht"
									src={event}
								/></td
							>
							<td class="px-2 text-sm"
								>{new Intl.DateTimeFormat('de-DE', {
									dateStyle: 'long',
									timeStyle: 'short',
								}).format(new Date(publishedAt))}</td
							>
						</tr>
					{/if}
					{#if updatedAt}
						<tr>
							<td
								><img
									class="icon icon-event h-[0.875rem] w-[0.875rem]"
									height="25"
									width="25"
									alt="Updated"
									src={event}
								/></td
							>
							<td class="px-2 text-sm"
								>{new Intl.DateTimeFormat('de-DE', {
									dateStyle: 'long',
									timeStyle: 'short',
								}).format(new Date(updatedAt))}</td
							>
						</tr>
					{/if}
				</tbody>
			</table>

			{#if previewText}
				<p>{@html previewText}</p>
			{:else}
				<p></p>
			{/if}

			<Button
				onclick={(event: MouseEvent) => {
					event.preventDefault();
					window.open(href, '_blank');
				}}
				tabindex={-1}
				variant="outlined"
			>
				<Label>Herunterladen</Label>
			</Button>
		</Content>
	</Card>
</a>

<style>
	a {
		text-decoration: none;
	}

	.icon {
		height: 1.6rem;
	}
</style>
