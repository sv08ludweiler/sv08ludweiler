<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
	import Card, { Content } from '@smui/card';
	import person from '$lib/assets/icons/person.svg';
	import event from '$lib/assets/icons/event.svg';

	export let headerImage:
		| {
				url: string;
				alternativeText: string;
		  }
		| undefined = undefined;

	export let title: string;

	export let content = '';

	export let author = '';

	export let publishedAt = '';

	export let updatedAt = '';
</script>

{#if headerImage}
	<img
		class="w-full"
		src={PUBLIC_STRAPI_HOST + headerImage.url}
		alt={headerImage.alternativeText}
	/>
{:else}
	<div class="placeholder h-72 w-full bg-green-600" />
{/if}

<div class="-mt-36 flex-auto p-4 md:container md:mx-auto">
	<Card variant="raised">
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
						<td><img class="icon icon-event" alt="Veröffentlicht" src={event} /></td>
						<td class="px-2"
							>{new Intl.DateTimeFormat('de-DE', {
								dateStyle: 'long',
								timeStyle: 'short'
							}).format(new Date(publishedAt))}</td
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
