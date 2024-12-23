<script lang="ts">
	interface Props {
		title: string;
		href: string;
		external?: boolean;
		/**
		 * Whether mobile styling is active.
		 */
		mobile?: boolean;
	}

	let { title, href, external = false, mobile = false }: Props = $props();
</script>

<li class={mobile ? 'w-full p-4' : 'nav-menu inline-flex h-full items-center justify-center'}>
	<a
		class="menu-item w-full"
		target={external ? '_blank' : ''}
		rel={external ? 'external' : undefined}
		{href}>{title}</a
	>
</li>
