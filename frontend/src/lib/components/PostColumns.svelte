<script lang="ts">
	import { goto } from '$app/navigation';
	import PostTile from '$lib/components/PostTile.svelte';
	import Button from '@smui/button';

	export let posts: Array<any> = [];

	export let meta = undefined;

	export let showTeamCategory = true;
</script>

<div class="mb-5">
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
		<div class="my-6 flex flex-auto justify-center px-4 md:container md:mx-auto">
			<!-- TODO replace with anchor -->
			<Button type="button" variant="raised" on:click={() => goto('./posts')}>Zu allen News</Button>
		</div>
	{/if}
</div>

<style>
</style>
