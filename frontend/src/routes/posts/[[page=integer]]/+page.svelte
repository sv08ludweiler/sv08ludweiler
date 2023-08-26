<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PostColumns from '$lib/components/PostColumns.svelte';
	import Button, { Label } from '@smui/button';
	import type { PageData } from './$types';
	export let data: PageData;

</script>

<svelte:head>
  <title>SV 08 Ludweiler - Beiträge Übersicht</title>
  <meta name="description" content="Übersicht über alle Newsartikel" />
</svelte:head>

{#if data.posts.data}
	<section class="flex-auto p-4 md:container md:mx-auto">
		<h2 id="news">Beiträge</h2>
		<PostColumns posts={data.posts.data} showTeamCategory={true} />
	</section>
{/if}

{#if data.posts.meta.pagination}
	{@const pagination = data.posts.meta.pagination}

	<div class="my-5 flex items-center justify-center gap-3">
			<Button
			on:click={() => goto(`/posts/${(Number($page.params.page) || 1) - 1}`)}
			aria-label="Vorherige Seite"
			disabled={pagination.page < pagination.pageCount}>Vorherige</Button
		>

		{#each Array(pagination.pageCount) as _, i}
			{@const pageIndex = i + 1}
			<Button
				href={`/posts/${pageIndex}`}
				variant={pagination.page === pageIndex ? 'raised' : 'outlined'}
				aria-label={`Seite ${pageIndex}`}><Label>{pageIndex}</Label></Button
			>
		{/each}

		<Button
			on:click={() => goto(`/posts/${(Number($page.params.page) || 1) + 1}`)}
			aria-label="Nächste Seite"
			disabled={pagination.page >= pagination.pageCount}>Nächste</Button
		>
	</div>
{/if}
