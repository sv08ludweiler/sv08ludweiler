<script lang="ts">
	export let title: string;

	export let href: string;

	export let external = false;

	/**
	 * Whether mobile styling is active.
	 */
	export let mobile = false;
</script>

<li class={mobile ? 'p-4' : 'nav-menu inline-flex h-full items-center justify-center'}>
	<a
		class="menu-item"
		target={external ? '_blank' : ''}
		rel={external ? 'external' : undefined}
		{href}>{title}</a
	>
</li>
