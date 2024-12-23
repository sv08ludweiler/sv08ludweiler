<script lang="ts">

	interface Props {
		target?: string;
		prefix?: 'mailto' | 'tel' | '';
		children?: import('svelte').Snippet;
	}

	let { target = '', prefix = '', children }: Props = $props();

	let unveil = $state(false);

	const show = () => {
		unveil = true;
		const link = `${prefix}${prefix ? ':' : ''}${target}`;
		location.href = link;
	};

	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			show();
		}
	};

	const reverseString = (str: string) => {
		let newString = '';
		for (let i = str.length - 1; i >= 0; i--) {
			// newString += `&#${str[i].charCodeAt(0)};`;
			newString += str[i];
		}

		return newString;
	};
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_no_redundant_roles -->
<a
	role="link"
	onkeypress={onKeyPress}
	tabindex="0"
	onclick={() => {
		show();
	}}
	><span class="slot">{@render children?.()}</span>{#if unveil}<span class="target"
			>{reverseString(target)} :
		</span>{/if}</a
>

<style lang="scss">
	a {
		cursor: pointer;
		text-decoration: none;

		.slot {
			text-decoration: underline;
		}

		.target {
			unicode-bidi: bidi-override;
			direction: rtl;
		}
	}
</style>
