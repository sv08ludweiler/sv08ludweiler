<script lang="ts">
	import type { ApiNavigationItem } from '../../../types/ui-types';




	let focusIn = $state(false);

	function openMenu() {
		focusIn = !focusIn;
	}

	
	interface Props {
		title: string;
		href: string;
		children?: Array<ApiNavigationItem>;
		/**
	 * Whether mobile styling is active.
	 */
		mobile?: boolean;
	}

	let {
		title,
		href,
		children = [],
		mobile = false
	}: Props = $props();
</script>

<li
	class={mobile
		? 'flex flex-col items-start p-4'
		: 'nav-menu inline-flex h-full items-center justify-center'}
	onfocusin={() => (focusIn = true)}
	onfocusout={() => (focusIn = false)}
>
	{#if href}
		<a {href} class="menu-item" aria-expanded={focusIn}>{title} </a>
	{:else}
		<button class="menu-item" onclick={openMenu} aria-expanded="false">{title}</button>
	{/if}

	<ul
		class={mobile ? 'flex w-full flex-col' : 'flyout nav-menu-flyout -z-10'}
		class:open={focusIn || mobile}
	>
		{#each children as child (child.id)}
			{#if child?.page}
				<li class="inline-flex min-h-[2rem] items-center">
					<a class="h-full w-full p-4" href={`/page/${child.page.slug}`}>{child.title}</a>
				</li>
			{/if}
		{/each}
	</ul>
</li>

<style>
</style>
