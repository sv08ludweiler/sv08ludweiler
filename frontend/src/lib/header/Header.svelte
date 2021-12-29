<script lang="ts">
	import { page } from '$app/stores';
	import type { I_SERVER_MENU_ENTRY } from '$lib/types/strapi';
	import logo from './svelte-logo.svg';

	/**
	 * Main Menu entries
	 */
	export let entries: Array<I_SERVER_MENU_ENTRY>;
</script>

<header>
	<nav>
		<ul class="menu menu--level-1">
			{#each entries as entry}
				{#if entry.__component === 'menu.menu-entry-simple'}
					<li><a href={entry?.link} class:active={$page.path === entry.link}>{entry.title}</a></li>
				{:else if entry.__component === 'menu.menu-entry-page'}
					<li>
						<a
							href={'/page/' + entry?.page.data.attributes.slug}
							class:active={$page.path === '/page/' + entry?.page.data.attributes.slug}
						>
							{#if entry.title}
								{entry.title}
							{:else}
								{entry?.page.data.attributes.title}
							{/if}
						</a>
					</li>
				{:else if entry.__component === 'menu.menu-entry-rekursiv'}
					<li>
						<button>{entry.title}</button>
						<ul class="menu menu--level-2">
							{#each entry.entries as subEntry}
								<li>
									<a
										href={'/page/' + subEntry?.page.data.attributes.slug}
										class:active={$page.path === '/page/' + subEntry?.page.data.attributes.slug}
									>
										{#if subEntry.title}
											{subEntry.title}
										{:else}
											{subEntry?.page.data.attributes.title}
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</header>

<style>
</style>
