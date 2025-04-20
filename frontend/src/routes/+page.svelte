<script lang="ts">
	import { goto } from '$app/navigation';
	import { env as envPublic } from '$env/dynamic/public';
	import NewspaperTile from '$lib/components/NewspaperTile.svelte';
	import PostColumns from '$lib/components/PostColumns.svelte';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';
	import FupaWidget from '$lib/components/fupa/FupaWidget.svelte';
	import FussballDeWidget2024 from '$lib/components/fussball-de-widget/FussballDeWidget2024.svelte';
	import FussballDeWidget from '$lib/components/fussball-de-widget/FussballDeWidget.svelte';
	import Button from '@smui/button';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let submenu: HTMLDivElement | undefined = $state();
</script>

<svelte:head>
	<title>SV 08 Ludweiler</title>
	<meta name="description" content="Homepage des Fußballverein SV 08 Ludweiler" />
</svelte:head>

<div class="submenu fixed z-10 w-full bg-green-700 text-white" bind:this={submenu}>
	<ul
		class="flex h-full flex-row items-center overflow-hidden overflow-x-auto px-4 md:container md:mx-auto"
	>
		{#await data.news then news}
			<li class="nav-menu h-full"><a class="menu-item" href="#news">Aktuelles</a></li>
		{/await}
		{#await data.newspaper then newspaper}
			{#if newspaper?.meta?.pagination?.total}
				<li class="nav-menu h-full"><a class="menu-item" href="#newspaper">Stadionheft</a></li>
			{/if}
		{/await}
		{#await data.landingPage then landingPage}
			{#if landingPage.data?.Vereinsspielplan}
				<li class="nav-menu h-full">
					<a
						class="menu-item"
						href={`#${landingPage.data.Vereinsspielplan.title.trim().replace(' ', '-')}`}
						>{landingPage.data.Vereinsspielplan.title}</a
					>
				</li>
			{/if}
		{/await}
	</ul>
</div>

<div class="page-content" class:has-submenu={submenu !== null}>
	<enhanced:img
		class="aspect-auto w-full"
		alt="SV 08 Ludweiler Wandgraffiti"
		src="$lib/assets/header.webp"
		sizes="min(1500px, 100vw)"
	/>

	{#await data.landingPage then landingPage}
		{#if landingPage.data.headline_widgets?.length}
			<section class="m-auto -mt-10 mb-10 flex max-w-screen-xl flex-wrap justify-center gap-5 px-5">
				{#each landingPage.data.headline_widgets as widget}
					<FupaWidget widgetId={widget.widget_id}></FupaWidget>
				{/each}
			</section>
		{/if}
	{/await}

	<section class="my-5 px-4">
		<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
			{#await data.supporter}
				<div></div>
			{:then supporter}
				{#each supporter.data?.items as item}
					<SocialMediaLink title={item.title} href={item?.link} icon={item?.image} />
				{/each}
			{/await}
		</div>
	</section>

	{#await data.news then news}
		{#if news.data}
			<section class="mb-10 flex-auto px-4 md:container md:mx-auto">
				<h2 id="news">Aktuelles</h2>
				<PostColumns posts={news.data} meta={news?.meta} />
			</section>
		{/if}
	{/await}

	{#await data.newspaper then news}
		<section class="mb-10 flex-auto px-4 md:container md:mx-auto">
			<h2 id="newspaper">Stadionheft</h2>
			<div class="mb-5">
				<div class="news columns-1 gap-4 md:columns-2">
					{#each news.data as newspaper}
						<div class="mb-4 break-inside-avoid">
							<NewspaperTile
								title={newspaper.title}
								headerImage={newspaper.header_image}
								href={`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}${newspaper?.file?.url}`}
							></NewspaperTile>
						</div>
					{/each}
				</div>

				{#if news?.meta && news?.meta?.pagination && news?.meta?.pagination.pageCount > 1}
					<div class="my-6 flex flex-auto justify-center px-4 md:container md:mx-auto">
						<!-- TODO replace with anchor -->
						<Button type="button" variant="raised" onclick={() => goto('./newspaper')}
							>Zu allen Ausgaben</Button
						>
					</div>
				{/if}
			</div>
		</section>
	{/await}

	{#await data.landingPage then landingPage}
		<section class="mb-10 flex-auto px-4 md:container md:mx-auto">
			{#if landingPage.data?.Vereinsspielplan}
				<h2 id={landingPage.data.Vereinsspielplan.title.trim().replace(' ', '-')}>
					{landingPage.data.Vereinsspielplan.title}
				</h2>

				{#if landingPage.data.Vereinsspielplan.type && landingPage.data.Vereinsspielplan.type !== 'old'}
					<FussballDeWidget2024
						widgetId={landingPage.data.Vereinsspielplan.widgetid}
						widgetType={landingPage.data.Vereinsspielplan.type}
						title={landingPage.data.Vereinsspielplan.title}
					/>
				{:else}
					{#key landingPage.data.Vereinsspielplan.widgetid}
						<FussballDeWidget widgetId={landingPage.data.Vereinsspielplan.widgetid} />
					{/key}
				{/if}
			{/if}
		</section>
	{/await}
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
