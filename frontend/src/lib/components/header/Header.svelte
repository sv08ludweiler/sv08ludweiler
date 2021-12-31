<script lang="ts">
	import { assets } from '$app/paths';
	import { page } from '$app/stores';
	import type { I_SERVER_MENU_ENTRY } from '$lib/types/strapi';

	/**
	 * Main Menu entries
	 */
	export let entries: Array<I_SERVER_MENU_ENTRY>;

	console.log(entries[3]);

	/**
	 * ID of active entry
	 */
	let activeSubmenu: number | null = null;

	function openMenu(id: number) {
		activeSubmenu = id;
	}
</script>

<header class="sticky top-0 left-0 right-0 z-50">
	<nav class="bg-primaryDark text-primaryText flex flex-row h-15">
		<a
			class="flex flex-row items-center justify-items-center flex-shrink-0 p-1 text-2xl brand"
			href="/"
		>
			<img class="inline-flex flex-auto brand-logo" src={`${assets}/wappen.png`} alt="wappen" />
			<span class="p-2">SV 08 Ludweiler</span>
		</a>

		<ul class="menu menu--level-1 flex flex-row flex-auto items-center">
			{#each entries as entry}
				{#if entry.__component === 'menu.menu-entry-simple'}
					<li>
						<a
							href={entry?.link}
							class:active={$page.path === entry.link}
							target={entry.external ? '_blank' : '_self'}>{entry.title}</a
						>
					</li>
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
					<li
						on:click={() => openMenu(entry.id)}
						on:mouseenter={() => openMenu(entry.id)}
						on:mouseleave={() => openMenu(null)}
					>
						<button class:open={activeSubmenu === entry.id}>{entry.title}</button>
						<ul
							class="menu menu--level-2 transition-opacity"
							class:open={activeSubmenu === entry.id}
						>
							<li class="container mx-auto">
								<ul class="flex flex-wrap">
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
						</ul>
					</li>
				{:else if entry.__component === 'menu.menu-entry-teams'}
					<li
						on:click={() => openMenu(entry.id)}
						on:mouseenter={() => openMenu(entry.id)}
						on:mouseleave={() => openMenu(null)}
					>
						<button class:open={activeSubmenu === entry.id}>{entry.title}</button>
						<ul
							class="menu menu--level-2 transition-opacity"
							class:open={activeSubmenu === entry.id}
						>
							<li class="container mx-auto">
								<ul class="flex flex-wrap">
									{#each entry.teams.data as subEntry}
										<li>
											<a
												href={'/teams/' + subEntry?.attributes.name}
												class:active={$page.path === '/teams/' + subEntry?.attributes.slug}
											>
												{subEntry?.attributes.name}
											</a>
										</li>
									{/each}
								</ul>
							</li>
						</ul>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		a,
		button {
			color: var(--sv-color-white);
			height: 100%;
			padding: 1rem;

			&.active {
				background: rgba(white, 0.1);
			}
			&:hover {
				background: rgba(black, 0.1);
			}
		}

		nav .brand {
			&-logo {
				height: 3rem;
			}
		}

		.menu {
			flex: 1 1 100%;

			ul,
			li,
			a,
			button {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}

			button {
				&.open {
					background: rgba(black, 0.1);
				}
			}

			.menu--level-2 {
				display: none;
				position: absolute;
				width: 100%;
				left: 0;
				top: 80px;
				background: var(--sv-color-primary);
				height: auto;

				&.open {
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>
