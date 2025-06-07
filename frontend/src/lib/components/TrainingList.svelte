<script lang="ts">
	import { browser } from '$app/environment';

	interface Props {
		trainings: Array<{ day: string; start: string; end?: string; location?: string }>;
	}

	let { trainings }: Props = $props();

	function formatToDate(input: string): string {
		const date = new Date(input);

		return new Intl.DateTimeFormat((browser && navigator?.language) || 'de-DE', {
			hour: 'numeric',
			minute: 'numeric',
		}).format(new Date(`01 Jan 1970 ${input}`));
	}
</script>

<table>
	<tbody>
		{#each trainings as training,i (i)}
			<tr>
				<th class="pr-2 text-left">
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
	</tbody>
</table>

<style lang="scss">
</style>
