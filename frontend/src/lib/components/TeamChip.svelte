<script lang="ts">
	interface Props {
		division?: string;
		ageGroup?: string;
		teams?: Array<string>;
		classModifer?: string;
	}

	let { division = '', ageGroup = '', teams = [], classModifer = '' }: Props = $props();
</script>

<div
	class={`my-2 inline-flex gap-4 rounded-full border border-gray-300 px-2 py-1 text-green-700 ${classModifer}`}
>
	{#if division}
		<div class="division">{division}</div>
	{/if}

	{#if ageGroup}
		<div class="age-group">{ageGroup}</div>
	{/if}

	<div class="flex flex-row flex-wrap">
		{#each teams as team, i (i)}
			<div>
				{team}{#if i < teams.length - 1},&nbsp;{/if}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@reference "tailwindcss/theme";
	.division,
	.age-group {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.division:after,
	.age-group:after {
		content: '';
		height: calc(100% + 0.5rem);
		width: 1px;
		@apply bg-gray-300;
		display: inline-block;
		position: absolute;
		top: -0.25rem;
		right: -0.5rem;
		transform: skew(344deg);
	}
</style>
