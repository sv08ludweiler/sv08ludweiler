<script lang="ts">

  import PostTile from "$lib/components/PostTile.svelte";

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
  <div class="flex-auto p-4 md:container md:mx-auto">
    <a href="./posts"> Zu allen News </a>
  </div>
{/if}

<style>

</style>
