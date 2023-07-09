<script lang="ts">
	import { onMount } from 'svelte';
	import PostColumns from "$lib/components/PostColumns.svelte";
	import type {PageData} from '../$types';
	export let data: PageData;

	onMount(() => {
		console.log(data.posts);
	});
</script>


{#if data.posts.data}
	<section class="flex-auto p-4 md:container md:mx-auto">
		<h2 id="news">News</h2>
		<PostColumns posts={data.posts.data} showTeamCategory={false}></PostColumns>
	</section>
{/if}

{#if data.posts.meta.pagination}
	{@const pagination = data.posts.meta.pagination}

	{JSON.stringify(pagination)}

{/if}
