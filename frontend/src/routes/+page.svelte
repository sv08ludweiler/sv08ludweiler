<script lang="ts">
  import type { PageData } from "./$types";
  import FussballDeWidget from "$lib/components/fussball-de-widget/fussballDeWidget.svelte";
  import headerImage from "$lib/assets/header.jpg";
  import PostColumns from "$lib/components/PostColumns.svelte";

  export let data: PageData;
</script>

<img class="w-full" alt="SV 08 Ludweiler Wandgraffiti" src={headerImage} />

{#if data.news}
  <section class="flex-auto p-4 md:container md:mx-auto">
    <h2 id="news">News</h2>
    <PostColumns posts={data.news.data} meta={data.news.meta}></PostColumns>
  </section>
{/if}

<section class="flex-auto p-4 md:container md:mx-auto">

  {#if data.landingPage.data.attributes.Vereinsspielplan}
    <h2>{data.landingPage.data.attributes.Vereinsspielplan.title}</h2>
    <FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
  {/if}
</section>
