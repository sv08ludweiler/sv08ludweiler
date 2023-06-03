<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{JSON.stringify(data.navigation)}

<h1>Welcome to SvelteKit</h1>
<p>Read <a href="./posts">posts</a></p>
