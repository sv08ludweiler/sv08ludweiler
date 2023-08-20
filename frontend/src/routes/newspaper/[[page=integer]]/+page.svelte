<script lang="ts">
	import Button, { Label } from '@smui/button';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import NewspaperTile from '$lib/components/NewspaperTile.svelte';
	import { env as envPublic } from '$env/dynamic/public';


	export let data: PageData;
</script>

<svelte:head>
	<title>SV 08 Ludweiler - Stadionheft Ausgaben</title>
	<meta name="description" content="Übersicht über alle Ausgaben des Stadionhefts" />
</svelte:head>

<!-- {JSON.stringify(data.newspaper)} -->

{#if data.newspaper.data}
	<section class="flex-auto p-4 md:container md:mx-auto">
		<h2 id="news">Beiträge</h2>
		<div class="mb-5">
			<div class="news columns-1 gap-4 md:columns-2">
				{#each data.newspaper?.data as newspaper}
					<div class="mb-4 break-inside-avoid">
						<NewspaperTile
							title={newspaper.attributes.title}
							headerImage={newspaper.attributes?.header_image?.data?.attributes}
							href={`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}${newspaper?.attributes?.file?.data?.attributes?.url}`}
						></NewspaperTile>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if data.newspaper.meta.pagination}
	{@const pagination = data.newspaper.meta.pagination}

	<div class="my-5 flex items-center justify-center gap-3">
		<Button
			on:click={() => goto(`/posts/${(Number($page.params.page) || 1) - 1}`)}
			aria-label="Vorherige Seite"
			disabled={pagination.page <= pagination.pageCount}>Vorherige</Button
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
