<script lang="ts">
	export let title: string;

	export let slug: string;

	/**
	 * Whether nav items are grouped by age_group
	 */
	export let show_age_group = false;

	export let teams: Array<{
		id: number;
		attributes: {
			name: string;
			display_name: string;
			slug: string;
			age_group: {
				data: {
					attributes: {
						name: string;
						slug: string;
						alternativeName: string;
					};
				};
			};
		};
	}> = [];

	export let ageGroups: Array<{
		id: number;
		attributes: {
			name: string;

			slug: string;
			alternativeName: string;
			createdAt: string;
			updatedAt: string;
			publishedAt: string;
		};
	}> = [];

	function openMenu() {}
</script>

{#if teams.length === 1}
	{#each teams as team}
		<li class="nav-menu inline-flex h-full items-center justify-center">
			<a
				class="menu-item"
				href={`/teams/${slug}/${team.attributes.age_group.data.attributes.slug}/${team.attributes.slug}`}
				>{title}</a
			>
		</li>
	{/each}
{:else}
	<li class="nav-menu inline-flex h-full items-center justify-center">
		<button class="menu-item" on:click={openMenu}>{title}</button>
		<ol class="nav-menu-flyout flyout -z-10">
			{#if show_age_group}
				{#each ageGroups as ageGroup}
					{JSON.stringify(ageGroup)}
				{/each}
			{:else}
				{#each teams as team}
					<li class="inline-flex min-h-[2rem] items-center">
						<a
							class="h-full w-full whitespace-nowrap p-4"
							href={`/teams/${slug}/${team.attributes.age_group.data.attributes.slug}/${team.attributes.slug}`}
							>{team.attributes.display_name || team.attributes.name}</a
						>
					</li>
				{/each}
			{/if}
		</ol>
	</li>
{/if}

<style>
</style>
