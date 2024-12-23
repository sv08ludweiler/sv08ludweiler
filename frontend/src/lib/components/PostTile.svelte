<script lang="ts">
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import event from '$lib/assets/icons/event.svg';
	import type { StrapiImage } from '$lib/types/strapi.types';
	import { generateImageSize, generateImageSrcSet } from '$lib/utils';
	import Button, { Label } from '@smui/button';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';
	import type { ApiPost } from '../../types/post.types';
	import TeamChip from './TeamChip.svelte';
	import { SvelteMap } from 'svelte/reactivity';

	interface Props {
		/**
		 * Title of post
		 */
		title: string;
		/**
		 * Content of post
		 */
		previewText?: string;
		/**
		 * Link to post
		 */
		href: string;
		/**
		 * Header image of post.
		 */
		headerImage?: StrapiImage | undefined;
		/**
		 * Publish date of post.
		 */
		publishedAt?: string;
		/**
		 * Update date of post.
		 */
		updatedAt?: string;
		/**
		 * category of post.
		 */
		teams?: ApiPost['teams'];
		showTeamCategory?: boolean;
	}

	let {
		title,
		previewText = '',
		href,
		headerImage = undefined,
		publishedAt = '',
		updatedAt = '',
		teams = [],
		showTeamCategory = true,
	}: Props = $props();

	// division -> age group -> [teams]
	let teamsCategory: Map<string, Map<string, Set<string>>> = new SvelteMap<
		string,
		Map<string, Set<string>>
	>();

	const generateTeamTiles = () => {
		for (const team of teams) {
			const divisions = team.divisions;

			if (!divisions) {
				continue;
			}

			for (const division of divisions) {
				const divisionName = division.name;

				let divisionMap: Map<string, Set<string>> | undefined;
				if (teamsCategory.has(divisionName)) {
					divisionMap = teamsCategory.get(divisionName);
				}

				const ageGroup = team?.age_group;

				if (!ageGroup) {
					continue;
				}

				const ageGroupKey: string = ageGroup?.alternativeName || ageGroup?.name;

				if (divisionMap) {
					let ageMap: Set<string> | undefined;
					if (divisionMap.has(ageGroupKey)) {
						ageMap = divisionMap.get(ageGroupKey);
						ageMap?.add(team.display_name);
					} else {
						divisionMap.set(ageGroupKey, new Set<string>([team.display_name]));
					}
				} else {
					const teamSet: Set<string> = new Set<string>([team.display_name]);
					const ageGroupMap: Map<string, Set<string>> = new Map<string, Set<string>>();
					ageGroupMap.set(ageGroupKey, teamSet);
					teamsCategory.set(divisionName, ageGroupMap);
				}
			}
		}
	};

	if (showTeamCategory) {
		generateTeamTiles();
	}
</script>

<a
	class="flex flex-auto p-[1px] drop-shadow-sm transition-all hover:drop-shadow-xl focus:drop-shadow-xl"
	{href}
	use:Ripple={{ surface: true, color: 'primary' }}
>
	<Card class="flex flex-auto overflow-hidden">
		{#if headerImage}
			<div class="aspect-video h-60 w-full overflow-hidden">
				<img
					class="h-full w-full object-cover"
					src={env.PUBLIC_FRONTEND_STRAPI_HOST + headerImage.formats.medium.url}
					srcset={generateImageSrcSet(headerImage)}
					sizes={generateImageSize(headerImage)}
					width={headerImage.formats.medium.width}
					height={headerImage.formats.medium.height}
					alt={headerImage.alternativeText || title}
					loading="lazy"
				/>
			</div>
		{/if}
		<Content class="flex-auto">
			<h3 class="mt-0">{title}</h3>

			{#if showTeamCategory}
				{#each teamsCategory as [division, ageTeamsMap]}
					{#each ageTeamsMap as [ageGroup, teamsNames]}
						<TeamChip class="mt-0" teams={Array.from(teamsNames)} {division} {ageGroup} />
					{/each}
				{/each}
			{/if}

			<table class="-my-2 border-separate border-spacing-y-2">
				<tbody>
					{#if publishedAt && !updatedAt}
						<tr>
							<td
								><img
									class="icon icon-event h-[0.875rem] w-[0.875rem] text-xs"
									height="25"
									width="25"
									alt="Veröffentlicht"
									src={event}
								/></td
							>
							<td class="px-2 text-sm"
								>{new Intl.DateTimeFormat('de-DE', {
									dateStyle: 'long',
									timeStyle: 'short',
								}).format(new Date(publishedAt))}</td
							>
						</tr>
					{/if}
					{#if updatedAt}
						<tr>
							<td
								><img
									class="icon icon-event h-[0.875rem] w-[0.875rem]"
									height="25"
									width="25"
									alt="Updated"
									src={event}
								/></td
							>
							<td class="px-2 text-sm"
								>{new Intl.DateTimeFormat('de-DE', {
									dateStyle: 'long',
									timeStyle: 'short',
								}).format(new Date(updatedAt))}</td
							>
						</tr>
					{/if}
				</tbody>
			</table>

			{#if previewText}
				<p>
					{@html previewText}
				</p>
			{/if}

			<Button
				onclick={(event: MouseEvent) => {
					event.preventDefault();
					goto(href);
				}}
				tabindex={-1}
				variant="outlined"
			>
				<Label>Weiterlesen</Label>
			</Button>
		</Content>
	</Card>
</a>

<style>
	a {
		text-decoration: none;
	}

	.icon {
		height: 1.6rem;
	}
</style>
