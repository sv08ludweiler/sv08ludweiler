<script lang="ts">
	import { env } from '$env/dynamic/public';
	import event from '$lib/assets/icons/event.svg';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import Button, { Label } from '@smui/button';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';

	/**
	 * Title of post
	 */
	export let title: string;

	/**
	 * Content of post
	 */
	export let previewText = '';

	/**
	 * Link to post
	 */
	export let href: string;

	/**
	 * Header image of post.
	 */
	export let headerImage: StrapiImage | undefined = undefined;

	/**
	 * Publish date of post.
	 */
	export let publishedAt = '';

	/**
	 * Update date of post.
	 */
	export let updatedAt = '';
</script>

<a
	class="flex flex-auto p-[1px] drop-shadow-sm transition-all hover:drop-shadow-xl focus:drop-shadow-xl"
	{href}
	target="_blank"
	use:Ripple={{ surface: true, color: 'primary' }}
>
	<Card class="flex flex-auto overflow-hidden">
		{#if headerImage}
			<div class="aspect-video w-full h-60 overflow-hidden">
				{#if headerImage.formats.medium}
					<img
						class="h-full w-full object-cover"
						src={env.PUBLIC_FRONTEND_STRAPI_HOST + headerImage.formats.medium.url}
						width={headerImage.formats.medium.width}
						height={headerImage.formats.medium.height}
						alt={headerImage.alternativeText || title}
					/>
				{:else}
					<img
						class="h-full w-full object-cover"
						src={env.PUBLIC_FRONTEND_STRAPI_HOST + headerImage.url}
						width={headerImage.width}
						height={headerImage.height}
						alt={headerImage.alternativeText || title}
					/>
				{/if}
			</div>
		{/if}
		<Content class="flex-auto">
			<h3 class="mt-0">{title}</h3>

			<table class="-my-2 border-separate border-spacing-y-2">
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
			</table>

			{#if previewText}
				<p>{@html previewText}</p>
			{:else}
				<p></p>
			{/if}

			<Button
				on:click={(event) => {
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
