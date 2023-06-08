<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
	import type { PageData } from '../post/[slug]/$types';

	export let data: PageData;
</script>

<img
	src={PUBLIC_STRAPI_HOST + data.post.data.attributes.Headerimage.data.attributes.formats.large.url}
	alt={data.post.data.attributes.Headerimage.data.alternativeText}
/>

<h2>
	{data.post.data.attributes.Title}
</h2>

{@html data.content.code}

<!-- {JSON.stringify(data.post.data)} -->
