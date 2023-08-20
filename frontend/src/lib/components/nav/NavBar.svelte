<script lang="ts">
	import DivisionNavItem from '$lib/components/nav/DivisionNavItem.svelte';
	import DropdownNavItem from '$lib/components/nav/DropdownNavItem.svelte';
	import SimpleNavItem from '$lib/components/nav/SimpleNavItem.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import Ripple from '@smui/ripple';
	import wappen from '$lib/assets/wappen.png';
	import { onMount } from 'svelte';

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
		}
	};

	onMount(() => {
		if (sidebarDialog) {
			sidebarDialog.addEventListener('click', (event) => {
				if (event.target?.nodeName === 'DIALOG') {
					sidebarDialog.close('dismiss');
				}
			});
		}
	});

	beforeNavigate(() => {
		sidebarDialog.close();
	});
</script>

<header class="fixed z-50 w-full bg-green-800 text-white drop-shadow-lg h-[75px] flex items-center">
	<nav
		aria-label="Main Navigation"
		class="flex h-full w-full flex-row flex-wrap items-center justify-between bg-green-800 px-4 xl:container md:mx-auto pr-0"
	>
		<a
			href="/"
			aria-label="Home"
			class="flex items-center h-full text-2xl font-semibold text-white gap-2"
		>
			<img
				class="inline max-h-[50px]"
				width="42"
				height="50"
				alt="wappen"
				src={wappen}
				aria-hidden="true"
			/>
			<span class="md:hidden lg:inline">SV 08 Ludweiler</span>
		</a>
		<ul class="h-full flex-row flex-wrap justify-center md:flex hidden">
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
							showAgeGroup={navItem.show_age_group}
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
			class="md:hidden h-full p-3"
			on:click={toggleMenu}
			aria-label="Menü öffnen/schließen"
			use:Ripple={{ surface: true }}
		>
			<svg
				class="text-white h-7"
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

<dialog class="sidebar shadow-xl" bind:this={sidebarDialog}>
	<div class="h-full w-full flex items-start flex-col">
		<a
			href="/"
			aria-label="Home"
			class="flex items-center text-2xl font-semibold text-white gap-2 p-3"
		>
			<img
				class="inline max-h-[50px]"
				width="42"
				height="50"
				alt="wappen"
				src={wappen}
				aria-hidden="true"
			/>
			<span class="md:hidden lg:inline">SV 08 Ludweiler</span>
		</a>
		<ul class="flex flex-col w-full">
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

	:global(dialog[open]) {
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
