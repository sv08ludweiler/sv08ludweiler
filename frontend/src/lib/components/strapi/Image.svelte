<script lang="ts" context="module">
	import type { I_SERVER_IMAGE } from '$lib/types/server/image';
	import { envVariables } from '$lib/utils/variables';

	const serverBase = envVariables.serverBasePath;
</script>

<script lang="ts">
	export let image: I_SERVER_IMAGE = null;
</script>

{#if image}
	<img src={`${serverBase}${image.url}`} alt={image.alternativeText} />
{/if}

<style>
	img {
		width: 100%;
		height: auto;
	}
</style>
