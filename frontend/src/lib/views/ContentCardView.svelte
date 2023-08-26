<script lang="ts">
	import event from '$lib/assets/icons/event.svg';
	import person from '$lib/assets/icons/person.svg';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import Card, { Content } from '@smui/card';

	/**
	 * Header image of post.
	 */
	export let headerImage:
		| StrapiImage
		| undefined = undefined;

	/**
	 * Title of post
	 */
	export let title: string;

	/**
	 * Content of post
	 */
	export let content = '';

	/**
	 * Author of post
	 */
	export let author = '';

	/**
	 * Publish date of post.
	 */
	export let publishedAt = '';

	/**
	 * Update date of post.
	 */
	export let updatedAt = '';
</script>

<PageHeader image={headerImage}></PageHeader>

<div class="-mt-36 flex-auto p-4 md:container md:mx-auto">
	<Card variant="raised" class="overflow-hidden">
		<Content
			><h2 class="mt-0">
				{title}
			</h2>

			{#if content}
				{@html content}
			{/if}
		</Content>
		<div class="divider" />
		<Content>
			<table class="border-separate border-spacing-y-2">
				{#if publishedAt}
					<tr>
						<td><img class="icon icon-event" alt="Veröffentlicht" src={event} width="25" height="25"/></td>
						<td class="px-2"
							>{new Intl.DateTimeFormat('de-DE', {
								dateStyle: 'long',
								timeStyle: 'short',
							}).format(new Date(publishedAt))}</td
						>
					</tr>
				{/if}
				{#if updatedAt}
					<tr>
						<td><img class="icon icon-event" alt="Updated" src={event} /></td>
						<td class="px-2"
							>{new Intl.DateTimeFormat('de-DE', {
								dateStyle: 'long',
								timeStyle: 'short',
							}).format(new Date(updatedAt))}</td
						>
					</tr>
				{/if}
				{#if author}
					<tr>
						<td><img class="icon icon-autor" alt="Autor" src={person} /></td>
						<td class="px-2">{author}</td>
					</tr>
				{/if}
			</table>
		</Content>
	</Card>
</div>

<style>
	.divider {
		height: 1px;
		width: 100%;
		background: grey;
		opacity: 0.3;
	}

	.icon {
		height: 1.6rem;
	}
</style>
