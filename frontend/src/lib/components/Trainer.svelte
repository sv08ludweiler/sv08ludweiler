<script lang="ts">
	import ObfuscationLink from './ObfuscationLink.svelte';

	export let firstName: string;

	export let lastName: string;

	export let phone = '';

	export let email = '';
</script>

<div>
	<span>{firstName} {lastName}</span>
	{#if phone && email}
		(<ObfuscationLink target={email} prefix={'mailto'}>Email</ObfuscationLink>, <ObfuscationLink
			target={phone}
			prefix={'tel'}>Telefon</ObfuscationLink
		>)
	{:else if phone}
		(<ObfuscationLink target={phone} prefix={'tel'}>Telefon</ObfuscationLink>)
	{:else if email}
		(<ObfuscationLink target={email} prefix={'mailto'}>Email</ObfuscationLink>)
	{/if}
</div>
