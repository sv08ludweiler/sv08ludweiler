<script lang="ts">
	import Card, { Content } from '@smui/card';
	import type { PageData } from './$types';
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
	import event from '$lib/assets/icons/event.svg';

	export let data: PageData;
</script>

{#if data.page.attributes}
	{#if data.page.attributes?.header_image?.data}
		<img
			class="w-full"
			src={PUBLIC_STRAPI_HOST +
				data.page.attributes.header_image.data.attributes.formats.large.url}
			alt={data.page.attributes.header_image.data.alternativeText}
		/>
	{:else}
		<div class="placeholder h-72 w-full bg-green-600" />
	{/if}

	<div class="-mt-36 flex-auto p-4 md:container md:mx-auto">
		<Card variant="raised">
			<Content
				><h2 class="mt-0">
					{data.page.attributes.title}
				</h2>

				{#if data.content}
					{@html data.content.code}
				{/if}
			</Content>
			<div class="divider" />
			<Content>
				<table class="border-separate border-spacing-y-2">
					<tr>
						<td><img class="icon icon-event" alt="zuletzt geupdated" src={event} /></td>
						<td class="px-2"
							>{new Intl.DateTimeFormat('de-DE', {
								dateStyle: 'long',
								timeStyle: 'short'
							}).format(new Date(data.page.attributes.updatedAt))}</td
						>
					</tr>
				</table>
			</Content>
		</Card>
	</div>
{/if}

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
