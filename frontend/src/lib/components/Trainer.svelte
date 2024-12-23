<script lang="ts">
	import ObfuscationLink from './ObfuscationLink.svelte';




	interface Props {
		firstName: string;
		lastName: string;
		phone?: string;
		email?: string;
	}

	let {
		firstName,
		lastName,
		phone = '',
		email = ''
	}: Props = $props();
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
