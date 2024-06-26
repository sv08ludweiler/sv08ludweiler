<script lang="ts">
	import { beforeNavigate, pushState, replaceState } from '$app/navigation';
	import { page } from '$app/stores';
	import DivisionNavItem from '$lib/components/nav/DivisionNavItem.svelte';
	import DropdownNavItem from '$lib/components/nav/DropdownNavItem.svelte';
	import SimpleNavItem from '$lib/components/nav/SimpleNavItem.svelte';
	import Ripple from '@smui/ripple';
	import { onDestroy, onMount } from 'svelte';

	/**
	 * main menu cms data
	 */
	export let mainMenu;

	let sidebarDialog: HTMLDialogElement;

	const toggleMenu = () => {
		if (sidebarDialog.open) {
			sidebarDialog.close();
		} else {
			sidebarDialog.showModal();
			pushState('', {
				showModal: true,
			});
		}
	};

	const pageSubscription = page.subscribe((page) => {
		if (!page.state.showModal) {
			sidebarDialog && sidebarDialog.close();
		}
	});

	onMount(() => {
		if (sidebarDialog) {
			sidebarDialog.addEventListener('click', (event) => {
				if (event.target?.nodeName === 'DIALOG') {
					sidebarDialog.close('dismiss');
				}
			});
		}
	});

	onDestroy(() => {
		pageSubscription();
	});

	beforeNavigate(() => {
		sidebarDialog.close();
	});

	function onCloseDialog(event: Event & { currentTarget: EventTarget & HTMLDialogElement }) {
		if ($page.state.showModal) {
			history.back();
		}
	}
</script>

<header class="fixed z-50 flex h-[75px] w-full items-center bg-green-800 text-white drop-shadow-lg">
	<nav
		aria-label="Main Navigation"
		class="flex h-full w-full flex-row flex-wrap items-center justify-between bg-green-800 px-4 pr-0 xl:container md:mx-auto"
	>
		<a
			href="/"
			aria-label="Zur Startseite"
			class="flex h-full items-center gap-2 text-2xl font-semibold text-white"
		>
			<enhanced:img
				class="inline max-h-[50px] w-auto"
				src="$lib/assets/wappen.webp?50;100"
				sizes="(min-width: 500px) 50px, 100px"
				loading="eager"
				alt="Wappen"
			></enhanced:img>
			<span class="md:hidden lg:inline" aria-hidden="true">SV 08 Ludweiler</span>
		</a>
		<ul class="hidden h-full flex-row flex-wrap justify-center md:flex">
			{#if mainMenu?.attributes?.entries}
				{#each mainMenu?.attributes?.entries as navItem}
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
							ageGroups={navItem.age_groups?.data}
							groupByAge={navItem.group_by_age_group}
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

		<button
			class="h-full p-3 md:hidden"
			on:click={toggleMenu}
			aria-label="Menü öffnen/schließen"
			use:Ripple={{ surface: true }}
		>
			<svg
				class="h-7 text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				viewBox="0 -960 960 960"
				fill="currentColor"
				width="48"
				><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg
			>
		</button>
	</nav>
</header>

<dialog class="sidebar shadow-xl" bind:this={sidebarDialog} on:close={onCloseDialog}>
	<div class="flex h-full w-full flex-col items-start">
		<a
			href="/"
			aria-label="Zur Startseite"
			class="flex items-center gap-2 px-4 py-3 text-2xl font-semibold text-white"
		>
			<enhanced:img
				class="inline max-h-[50px] w-auto"
				src="$lib/assets/wappen.webp?w=50;100"
				loading="eager"
				sizes="(min-width: 500px) 50px, 100px"
				alt="Wappen"
			></enhanced:img>

			<span class="md:hidden lg:inline" aria-hidden="true">SV 08 Ludweiler</span>
		</a>
		<ul class="flex w-full flex-col">
			{#if mainMenu?.attributes?.entries}
				{#each mainMenu?.attributes?.entries as navItem}
					{#if navItem.__component === 'navigation.external-navigation-item'}
						<SimpleNavItem
							title={navItem.title}
							href={navItem.link}
							external={true}
							mobile={true}
						/>
					{:else if navItem.__component === 'navigation.page-nested-navigation-item'}
						<DropdownNavItem
							mobile={true}
							title={navItem.page?.page?.data?.attributes?.title || navItem.page.title}
							href={navItem.page?.page?.data?.attributes?.slug
								? `/page/${navItem.page?.page?.data?.attributes?.slug}`
								: ''}
							children={navItem.children}
						/>
					{:else if navItem.__component === 'navigation.team-navigation-item'}
						<DivisionNavItem
							mobile={true}
							title={navItem.title}
							slug={navItem.division.data.attributes.slug}
							teams={navItem.division.data.attributes.teams.data}
							ageGroups={navItem.age_groups?.data}
						/>
					{:else if navItem.__component === 'navigation.page-navigation-item'}
						<SimpleNavItem
							mobile={true}
							title={navItem.title}
							href={`/page/${navItem.page.data.attributes.slug}`}
						/>
					{/if}
				{/each}
			{/if}
		</ul>
	</div>
</dialog>

<style lang="scss">
	.sidebar {
		height: 100%;
		/* width: 50vw; */
		width: auto;
		width: fit-content;
		top: 0;
		left: 0;
		margin: 0;
		max-block-size: unset;
	}

	:global(html:has(dialog[open])) {
		overflow: hidden;
	}

	:global(dialog[open].sidebar) {
		animation: slide-in 250ms ease-in-out;
	}

	@keyframes slide-in {
		0% {
			left: -50vw;
		}
		100% {
			left: 0px;
		}
	}
</style>
