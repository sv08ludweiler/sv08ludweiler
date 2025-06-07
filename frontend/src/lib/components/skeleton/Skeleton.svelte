<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: HTMLAttributes<HTMLDivElement>['class'];
	}

	let { class: modifierClass = undefined, ...rest }: Props = $props();
</script>

<div class="bg-muted rounded-md', animate-pulse {modifierClass}" {...rest}></div>
