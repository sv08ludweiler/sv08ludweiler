<script lang="ts">
	import type { AgeGroup, Team } from '$lib/types/strapi.types';

	export let title: string;

	export let slug: string;

	/**
	 * Whether nav items are grouped by age_group
	 */
	export let groupByAge = false;

	export let teams: Array<Team> = [];

	/**
	 * Age Groups filter
	 */
	export let ageGroups: Array<AgeGroup> = [];

	let filteredTeams: Array<Team> = [];

	$: {
		filteredTeams = teams.filter((team) => {
			if (ageGroups && ageGroups.length) {
				return ageGroups.some(
					(ageGroup) => ageGroup.attributes.slug === team.attributes.age_group.data.attributes.slug,
				);
			}

			return true;
		});
	}

	let groupedTeamsByAge = new Map<AgeGroup['attributes']['slug'], Array<Team>>();
	let availableAgeGroups = new Map<AgeGroup['attributes']['slug'], AgeGroup>();

	$: if (groupByAge) {
		const groups = new Map<AgeGroup['attributes']['slug'], AgeGroup>();
		const groupedTeams = new Map<AgeGroup['attributes']['slug'], Array<Team>>();

		for (const team of teams) {
			const ageGroupOfTeam = team.attributes.age_group.data;
			const groupSlug = ageGroupOfTeam.attributes.slug;
			groups.set(groupSlug, ageGroupOfTeam);

			if (groupedTeams.has(groupSlug)) {
				const a = groupedTeams.get(groupSlug);
				a?.push(team);
			} else {
				groupedTeams.set(groupSlug, [team]);
			}
		}

		availableAgeGroups = groups;
		groupedTeamsByAge = groupedTeams;
	}

	/**
	 * Whether mobile styling is active.
	 */
	export let mobile = false;
</script>

{#if filteredTeams.length === 1}
	{#each filteredTeams as team}
		<li
			class={mobile
				? 'flex flex-col items-start p-4'
				: 'nav-menu inline-flex h-full items-center justify-center'}
		>
			<a
				class="menu-item"
				href={`/teams/${slug}/${team.attributes.age_group.data.attributes.slug}/${team.attributes.slug}`}
				>{title}</a
			>
		</li>
	{/each}
{:else if filteredTeams.length > 1}
	<li
		class={mobile
			? 'flex flex-col  items-start p-4'
			: 'nav-menu inline-flex h-full items-center justify-center'}
	>
		<button class="menu-item">{title}</button>
		<ol class={!mobile ? 'nav-menu-flyout flyout -z-10' : 'flex flex-col'}>
			{#if groupByAge}
				<li>
					<!-- <div>{ageGroup.attributes.alternativeName || ageGroup.attributes.name}</div> -->
					{#each [...groupedTeamsByAge] as [groupSlug, teams]}
						{@const currentAgeGroup = availableAgeGroups.get(groupSlug)}

						<ol class="team-age-grid grid">
							{#each teams as team}
								<li class="nav-menu inline-flex min-h-[2rem] w-full items-center">
									<a
										class="h-full w-full whitespace-nowrap p-4"
										href={`/teams/${slug}/${team.attributes.age_group.data.attributes.slug}/${team.attributes.slug}`}
										>{team.attributes.display_name || team.attributes.name}</a
									>
								</li>
							{/each}
						</ol>
					{/each}
				</li>
			{:else}
				{#each filteredTeams as team}
					<li class="nav-menu inline-flex min-h-[2rem] items-center">
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
	.team-age-grid {
		grid-template: 1fr/ 1fr 1fr;
	}
</style>
