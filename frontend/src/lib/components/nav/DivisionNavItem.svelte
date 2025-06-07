<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { ApiAgeGroup, ApiTeamNoRelations } from '../../../types/ui-types';
	import { untrack } from 'svelte';

	let groupedTeamsByAge = $state(new Map<ApiAgeGroup['slug'], Array<ApiTeamNoRelations>>());
	let availableAgeGroups = $state(new Map<ApiAgeGroup['slug'], ApiAgeGroup>());

	interface Props {
		title: string;
		slug: string;
		/**
		 * Whether nav items are grouped by age_group
		 */
		groupByAge?: boolean;
		teams?: Array<ApiTeamNoRelations>;
		/**
		 * Age Groups filter
		 */
		ageGroups?: Array<ApiAgeGroup>;
		/**
		 * Whether mobile styling is active.
		 */
		mobile?: boolean;
	}

	let {
		title,
		slug,
		groupByAge = false,
		teams = [],
		ageGroups = [],
		mobile = false,
	}: Props = $props();

	let filteredTeams: Array<ApiTeamNoRelations> = $derived.by(() => {
		return teams.filter((team) => {
			if (ageGroups && ageGroups.length) {
				return ageGroups.some((ageGroup) => ageGroup.slug === team.age_group.slug);
			}

			return true;
		});
	});

	// $effect(() => {
	if (groupByAge) {
		untrack(() => {
			const groups = new Map<ApiAgeGroup['slug'], ApiAgeGroup>();
			const groupedTeams = new Map<ApiAgeGroup['slug'], Array<ApiTeamNoRelations>>();

			for (const team of teams) {
				const ageGroupOfTeam = team.age_group;

				if (!team.age_group) {
					continue;
				}
				const groupSlug = ageGroupOfTeam.slug;
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
		});
	}
	// });
</script>

{#if filteredTeams.length === 1}
	{#each filteredTeams as team (team.id)}
		{#if team.age_group}
			<li
				class={mobile
					? 'flex w-full flex-col items-start p-4'
					: 'nav-menu inline-flex h-full items-center justify-center'}
			>
				<a class="menu-item w-full" href={`/teams/${slug}/${team.age_group.slug}/${team.slug}`}
					>{title}</a
				>
			</li>
		{/if}
	{/each}
{:else if filteredTeams.length > 1}
	<li
		class={mobile
			? 'flex w-full flex-col items-start p-4'
			: 'nav-menu inline-flex h-full items-center justify-center'}
	>
		<button class="menu-item">{title}</button>
		<ol class={!mobile ? 'nav-menu-flyout flyout -z-10' : 'flex w-full flex-col'}>
			{#if groupByAge}
				<li>
					<!-- <div>{ageGroup.alternativeName || ageGroup.name}</div> -->
					{#each [...groupedTeamsByAge] as [groupSlug, teams] (groupSlug)}
						<!-- {@const currentAgeGroup = availableAgeGroups.get(groupSlug)} -->

						<ol class="team-age-grid grid">
							{#each teams as team (team.id)}
								<li class="nav-menu inline-flex min-h-[2rem] w-full items-center">
									<a
										class="h-full w-full p-4 whitespace-nowrap"
										href={`/teams/${slug}/${team.age_group.slug}/${team.slug}`}
										>{team.display_name || team.name}</a
									>
								</li>
							{/each}
						</ol>
					{/each}
				</li>
			{:else}
				{#each filteredTeams as team (team.id)}
					{#if team.age_group}
						<li class="nav-menu inline-flex min-h-[2rem] items-center">
							<a
								class="h-full w-full p-4 whitespace-nowrap"
								href={`/teams/${slug}/${team.age_group.slug}/${team.slug}`}
								>{team.display_name || team.name}</a
							>
						</li>
					{/if}
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
