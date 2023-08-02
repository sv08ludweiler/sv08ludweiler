<script lang="ts">
	import wappen from '$lib/assets/wappen.png';
	import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';
	import DivisionNavItem from '$lib/components/nav/DivisionNavItem.svelte';
	import DropdownNavItem from '$lib/components/nav/DropdownNavItem.svelte';
	import SimpleNavItem from '$lib/components/nav/SimpleNavItem.svelte';
	import '../app.css';
	import '../global.css';
	import '../root-styles.css';
	import type { LayoutData } from './$types';
	// import '/smui.css';

	export let data: LayoutData;
</script>

<div class="flex h-full w-full flex-col">
	<header class="fixed z-50 w-full bg-green-700 text-white drop-shadow-lg">
		<nav
			aria-label="Main Navigation"
			class="flex h-full flex-row flex-wrap items-center justify-between bg-green-700 px-4 md:container md:mx-auto"
		>
			<a href="/" aria-label="Home" class="h-full text-2xl font-semibold text-white">
				<img class="inline max-h-[50px]" width="42" height="50" alt="wappen" src={wappen} aria-hidden="true" />
				<span>SV 08 Ludweiler</span>
			</a>
			<ul class="flex h-full flex-row flex-wrap justify-center">
				{#if data?.mainMenu?.attributes?.entries}
					{#each data?.mainMenu?.attributes?.entries as navItem}
						{#if navItem.__component === 'navigation.external-navigation-item'}
							<SimpleNavItem title={navItem.title} href={navItem.link} external={true} />
						{:else if navItem.__component === 'navigation.page-nested-navigation-item'}
							<DropdownNavItem
								title={navItem.page?.page?.data?.attributes?.title || navItem.page.title}
								href={navItem.page?.page?.data?.attributes?.slug
									? `/page/${navItem.page?.page?.data?.attributes?.slug}`
									: ''}
								children={navItem.children}
							/>
						{:else if navItem.__component === 'navigation.team-navigation-item'}
							<DivisionNavItem
								title={navItem.title}
								slug={navItem.division.data.attributes.slug}
								teams={navItem.division.data.attributes.teams.data}
								ageGroups={navItem.division.data.attributes.age_groups.data}
							/>
						{:else if navItem.__component === 'navigation.page-navigation-item'}
							<SimpleNavItem
								title={navItem.title}
								href={`/page/${navItem.page.data.attributes.slug}`}
							/>
						{/if}
					{/each}
				{/if}
			</ul>
		</nav>
	</header>

	<!-- {JSON.stringify(data.mainMenu.attributes.entries, null, '\t')} -->

	<main class="flex-auto">
		<slot />
	</main>

	<footer class="bg-green-500 text-white">
		<section class="wappen-section">
			<img class="wappen ml-auto mr-auto" alt="wappen" src={wappen} width="545" height="644"/>
		</section>
		<section class="flex min-h-[100px] items-center justify-center bg-green-600 p-8">
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
		<section class="flex min-h-[100px] items-center justify-center bg-green-700 py-8">
			<!-- <div class="p-4 md:container md:mx-auto">Social Media</div> -->
			<div class="flex items-center justify-center gap-4" aria-label="Social Media">
				{#if data?.socialMedia?.attributes?.items}
					{#each data?.socialMedia?.attributes?.items as item}
						<SocialMediaLink
							title={item.name}
							href={item?.link}
							icon={item?.icon?.data?.attributes}
						/>
					{/each}
				{/if}
			</div>
		</section>
	</footer>
</div>

<style>
	main {
		margin-top: 66px;
	}

	footer {
		margin-top: clamp(75px, 15vw, 130px);
	}

	.wappen-section {
		position: relative;
		height: 25vw;
		min-height: 80px;
		max-height: 150px;
	}
	.wappen {
		width: 25vw;
		max-width: 200px;
		min-width: 100px;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
	}
</style>
