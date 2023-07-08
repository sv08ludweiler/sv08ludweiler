<script lang="ts">
	import type { PageData } from './$types';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';
	import headerImage from '$lib/assets/header.jpg';
	import PostTile from '$lib/components/PostTile.svelte';

	export let data: PageData;
</script>

<img class="w-full" alt="SV 08 Ludweiler Wandgraffiti" src={headerImage}>


<section>
	{#if data.news}
	<div class="flex-auto p-4 md:container md:mx-auto">
		<h2 id="news">News</h2>
		<!-- <div class="news flex flex-nowrap gap-4 overflow-auto snap-x p-4"> -->
			<div class="news columns-1 md:columns-2 gap-4">
				{#each data.news.data as news}
				
			<div class="mb-4 break-inside-avoid">
				<PostTile 
				href={`./posts/${news.attributes.slug}`}
				title={news.attributes.title} 
				previewText={news.attributes.previewText}
				publishedAt={news.attributes.publishedAt}
				updatedAt={news.attributes?.updatedAt}
				headerImage={news.attributes?.header_image?.data?.attributes}
				teams={news.attributes?.teams?.data}
				></PostTile>
			</div>
			
			<!-- {JSON.stringify(news)} -->
			{/each}
		</div>	
	</div>
		
		{#if data.news.meta.pagination.pageCount > 1}
		<div class="flex-auto p-4 md:container md:mx-auto">
			<a href="./posts">
				Zu allen News
			</a>
		</div>
		{/if}
	{/if}
</section>

<section class="flex-auto p-4 md:container md:mx-auto">
	<!-- <h1>Welcome to SvelteKit</h1>
	<p>Read <a href="./posts">posts</a></p> -->




	{#if data.landingPage.data.attributes.Vereinsspielplan}
		<h2>{data.landingPage.data.attributes.Vereinsspielplan.title}</h2>
		<FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
	{/if}
</section>


<style>
	
	.news {
		max-width: 100vw;
		widows: 100vw;
	}

	/* /* @media (min-width: 640px) {
		.news {
			padding: 0 calc((100vw - 640px)/2);
		}
    } */

	
	/* @media (min-width: 768px) {
        .news {
			padding: 0 calc((100vw - 768px)/2);
			scroll-padding: 0 calc((100vw - 768px)/2);
		}
    }

	@media (min-width: 1024px) {
        .news {
			padding: 0 calc((100vw - 1024px)/2);
			scroll-padding: 0 calc((100vw - 1024px)/2);
		}
    }

	@media (min-width: 1280px) {
        .news {
			padding: 0 calc((100vw - 1280px)/2);
			scroll-padding: 0 calc((100vw - 1280px)/2);
		}
    }

    @media (min-width: 1536px) {

		.news {
			padding: 0 calc((100vw - 1536px)/2);
			scroll-padding: 0 calc((100vw - 1536px)/2);
		}
    } */

</style>