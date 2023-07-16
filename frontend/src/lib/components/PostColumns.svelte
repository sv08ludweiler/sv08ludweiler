<script lang="ts">
	import { goto } from '$app/navigation';
	import PostTile from '$lib/components/PostTile.svelte';
	import Button from '@smui/button/src/Button.svelte';

	export let posts: Array<any> = [];

	export let meta = undefined;

	export let showTeamCategory = true;
</script>

<div class="news columns-1 gap-4 md:columns-2">
	{#each posts as news}
		<div class="mb-4 break-inside-avoid">
			<PostTile
				href={`/posts/${news.attributes.slug}`}
				title={news.attributes.title}
				previewText={news.attributes.previewText}
				publishedAt={news.attributes.publishedAt}
				updatedAt={news.attributes?.updatedAt}
				headerImage={news.attributes?.header_image?.data?.attributes}
				teams={news.attributes?.teams?.data}
				{showTeamCategory}
			/>
		</div>
	{/each}
</div>

{#if meta && meta.pagination.pageCount > 1}
	<div class="flex-auto px-4 my-6 md:container md:mx-auto flex justify-center">
		<!-- TODO replace with anchor -->
		<Button type="button" variant="raised" on:click={() => goto('./posts')}>Zu allen News</Button>
	</div>
{/if}

<style>
</style>
