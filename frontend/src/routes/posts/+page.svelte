<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		console.log(data.posts);
	});
</script>

<!-- {JSON.stringify(data.posts.data)} -->

<ul>
	{#each data.posts.data as post}
		<!-- {JSON.stringify(post)} -->
		<li>
			<a href="./posts/{post.id}">
				{post.attributes.Title}
			</a>
		</li>
	{/each}
</ul>
