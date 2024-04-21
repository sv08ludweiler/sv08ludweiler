<script lang="ts">
	export let title: string;

	export let href: string;

	export let children: Array<{
		id: number;
		title: string;
		page: {
			data: {
				attributes: {
					title: string;
					slug: string;
					content: string;
					page: string;
					createdAt: string;
					updatedAt: string;
					publishedAt: string;
					locale: string;
				};
			};
		};
	}> = [];

	let focusIn = false;

	function openMenu() {
		focusIn = !focusIn;
	}

	/**
	 * Whether mobile styling is active.
	 */
	export let mobile = false;
</script>

<li
	class={mobile
		? 'flex flex-col items-start p-4'
		: 'nav-menu inline-flex h-full items-center justify-center'}
	on:focusin={() => (focusIn = true)}
	on:focusout={() => (focusIn = false)}
>
	{#if href}
		<a {href} class="menu-item" aria-expanded={focusIn}>{title} </a>
	{:else}
		<button class="menu-item" on:click={openMenu} aria-expanded="false">{title}</button>
	{/if}

	<ul
		class={mobile ? 'flex w-full flex-col' : 'flyout nav-menu-flyout -z-10'}
		class:open={focusIn || mobile}
	>
		{#each children as child}
			{#if child?.page?.data}
				<li class="inline-flex min-h-[2rem] items-center">
					<a class="h-full w-full p-4" href={`/page/${child.page.data.attributes.slug}`}
						>{child.title}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
</li>

<style>
</style>
