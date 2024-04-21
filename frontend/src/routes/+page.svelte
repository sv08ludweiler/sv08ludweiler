<script lang="ts">
	import { goto } from '$app/navigation';
	import { env as envPublic } from '$env/dynamic/public';
	import headerImage from '$lib/assets/header.webp';
	import NewspaperTile from '$lib/components/NewspaperTile.svelte';
	import PostColumns from '$lib/components/PostColumns.svelte';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';
	import FupaWidget from '$lib/components/fupa/FupaWidget.svelte';
	import FussballDeWidget from '$lib/components/fussball-de-widget/fussballDeWidget.svelte';
	import Button from '@smui/button';
	import type { PageData } from './$types';

	export let data: PageData;

	let submenu: HTMLDivElement;
</script>

<svelte:head>
	<title>SV 08 Ludweiler</title>
	<meta name="description" content="Homepage des Fußballverein SV 08 Ludweiler" />
</svelte:head>

{#if data.news || data?.landingPage?.data?.attributes?.Vereinsspielplan || data.newspaper?.meta?.pagination?.total}
	<div class="submenu fixed z-10 w-full bg-green-700 text-white" bind:this={submenu}>
		<ul
			class="flex h-full flex-row items-center overflow-hidden overflow-x-auto px-4 md:container md:mx-auto"
		>
			{#if data.news}
				<li class="nav-menu h-full"><a class="menu-item" href="#news">Aktuelles</a></li>
			{/if}
			{#if data.newspaper?.meta?.pagination?.total}
				<li class="nav-menu h-full"><a class="menu-item" href="#newspaper">Stadionheft</a></li>
			{/if}
			{#if data?.landingPage?.data?.attributes?.Vereinsspielplan}
				<li class="nav-menu h-full">
					<a
						class="menu-item"
						href={`#${data.landingPage.data.attributes.Vereinsspielplan.title
							.trim()
							.replace(' ', '-')}`}>{data.landingPage.data.attributes.Vereinsspielplan.title}</a
					>
				</li>
			{/if}
		</ul>
	</div>
{/if}

<div class="page-content" class:has-submenu={submenu !== null}>
	<img
		class="aspect-auto w-full"
		alt="SV 08 Ludweiler Wandgraffiti"
		src={headerImage}
		width="988"
		height="300"
	/>

	{#if data.landingPage?.data?.attributes?.headline_widgets.length}
		<section class="m-auto -mt-10 mb-10 flex max-w-screen-xl flex-wrap justify-center gap-5 px-5">
			{#each data.landingPage.data.attributes.headline_widgets as widget}
				<FupaWidget widgetId={widget.widget_id}></FupaWidget>
			{/each}
		</section>
	{/if}

	<section class="my-5 px-4">
		<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
			{#if data?.supporter?.attributes?.items}
				{#each data?.supporter?.attributes?.items as item}
					<SocialMediaLink
						title={item.title}
						href={item?.link}
						icon={item?.image?.data?.attributes}
					/>
				{/each}
			{/if}
		</div>
	</section>

	{#if data.news}
		<section class="mb-10 flex-auto px-4 md:container md:mx-auto">
			<h2 id="news">Aktuelles</h2>
			<PostColumns posts={data.news.data} meta={data.news.meta} />
		</section>
	{/if}

	{#if data.newspaper?.data}
		<section class="mb-10 flex-auto px-4 md:container md:mx-auto">
			<h2 id="newspaper">Stadionheft</h2>
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

				{#if data.newspaper?.meta && data.newspaper?.meta.pagination.pageCount > 1}
					<div class="my-6 flex flex-auto justify-center px-4 md:container md:mx-auto">
						<!-- TODO replace with anchor -->
						<Button type="button" variant="raised" on:click={() => goto('./newspaper')}
							>Zu allen Ausgaben</Button
						>
					</div>
				{/if}
			</div>
		</section>
	{/if}

	<section class="mb-10 flex-auto px-4 md:container md:mx-auto">
		{#if data?.landingPage?.data?.attributes?.Vereinsspielplan}
			<h2 id={data.landingPage.data.attributes.Vereinsspielplan.title.trim().replace(' ', '-')}>
				{data.landingPage.data.attributes.Vereinsspielplan.title}
			</h2>
			<FussballDeWidget widgetId={data.landingPage.data.attributes.Vereinsspielplan.widgetid} />
		{/if}
	</section>
</div>

<style lang="scss">
	.submenu {
		height: var(--submenu-height);
	}

	.page-content {
		&.has-submenu {
			margin-top: var(--submenu-height);
		}
		&.has-submenu :target:before {
			content: '';
			display: block;
			height: 145px;
			margin: -145px 0 0;
		}
	}
</style>
