<script lang="ts">
	export let target = '';

	export let prefix: 'mailto' | 'tel' | '' = '';

	let unveil = false;

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

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-redundant-roles -->
<a
	role="link"
	on:keypress={onKeyPress}
	tabindex="0"
	on:click={() => {
		show();
	}}
	><span class="slot"><slot /></span>{#if unveil}<span class="target"
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
