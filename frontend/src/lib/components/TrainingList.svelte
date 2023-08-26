<script lang="ts">
	import { browser } from '$app/environment';

	export let trainings: Array<{ day: string; start: string; end?: string; location?: string }>;

	function formatToDate(input: string): string {
		const date = new Date(input);

		return new Intl.DateTimeFormat((browser && navigator?.language) || 'de-DE', {
			hour: 'numeric',
			minute: 'numeric',
		}).format(new Date(`01 Jan 1970 ${input}`));
	}
</script>

<table>
	{#each trainings as training}
		<tr>
			<th class="text-left pr-2">
				{training.day}:
			</th>
			<td>
				{formatToDate(training.start)}
			</td>
			<td>
				{#if training.end}-{/if}
			</td>
			<td>
				{#if training.end}{formatToDate(training.end)}{/if}
			</td>
			<td class="pl-2">
				{#if training.location}
					{training.location}
				{/if}
			</td>
		</tr>
	{/each}
</table>

<style lang="scss">
</style>
