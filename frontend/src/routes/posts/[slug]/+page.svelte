<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
	import Card, { Content } from '@smui/card';
	import person from '$lib/assets/icons/person.svg';
	import event from '$lib/assets/icons/event.svg';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.post.data.attributes.header_image.data}
	<img
		class="w-full"
		src={PUBLIC_STRAPI_HOST +
			data.post.data.attributes.header_image.data.attributes.formats.large.url}
		alt={data.post.data.attributes.header_image.data.alternativeText}
	/>
	{:else }
	<div class="placeholder bg-green-600 w-full h-72"></div>
{/if}

<div class="-mt-36 flex-auto p-4 md:container md:mx-auto">
	<Card variant="raised">
		<Content
			><h2 class="mt-0">
				{data.post.data.attributes.title}
			</h2>

			{#if data.content}
				{@html data.content.code}
			{/if}
		</Content>
		<div class="divider" />
		<Content>
			<table class="border-separate border-spacing-y-2">
				<tr>
					<td><img class="icon icon-event" alt="Veröffentlicht" src={event} /></td>
					<td class="px-2"
						>{new Intl.DateTimeFormat('de-DE', {
							dateStyle: 'long',
							timeStyle: 'short'
						}).format(new Date(data.post.data.attributes.publishedAt))}</td
					>
				</tr>
				{#if data.post.data.attributes.author}
					<tr>
						<td><img class="icon icon-autor" alt="Autor" src={person} /></td>
						<td class="px-2"
							>{data.post.data.attributes.author.data.attributes.firstname}
							{data.post.data.attributes.author.data.attributes.name}</td
						>
					</tr>
				{/if}
			</table>
		</Content>
	</Card>

	<!-- {JSON.stringify(data.post.data.attributes.author.data.attributes)} -->
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
