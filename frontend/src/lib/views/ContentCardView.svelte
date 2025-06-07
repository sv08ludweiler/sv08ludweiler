<script lang="ts">
	import event from '$lib/assets/icons/event.svg';
	import person from '$lib/assets/icons/person.svg';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import Card, { Content } from '@smui/card';

	interface Props {
		/**
		 * Header image of post.
		 */
		headerImage?: StrapiImage | undefined;
		/**
		 * Title of post
		 */
		title: string;
		/**
		 * Content of post
		 */
		content?: string;
		/**
		 * Author of post
		 */
		author?: string;
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
		headerImage = undefined,
		title,
		content = '',
		author = '',
		publishedAt = '',
		updatedAt = '',
	}: Props = $props();
</script>

<div class="page-content mx-auto 2xl:container">
	<PageHeader image={headerImage}></PageHeader>

	<div class="card-content -mt-36 flex-auto p-4 md:container md:mx-auto">
		<Card variant="raised" class="overflow-hidden">
			<Content
				><h2 class="mt-0">
					{title}
				</h2>

				{#if content}
					{@html content}
				{/if}
			</Content>
			<div class="divider"></div>
			<Content>
				<table class="border-separate border-spacing-y-2">
					<tbody>
						{#if publishedAt}
							<tr>
								<td
									><img
										class="icon icon-event"
										alt="Veröffentlicht"
										src={event}
										width="25"
										height="25"
									/></td
								>
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
					</tbody>
				</table>
			</Content>
		</Card>
	</div>
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

	.card-content {
		view-transition-name: card-content;
	}
</style>
