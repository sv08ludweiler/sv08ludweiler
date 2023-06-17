<script lang="ts">
	export let title: string;

	export let href: string;

	export let external = false;
</script>

<li class="nav-menu inline-flex h-full items-center justify-center">
	<a class="menu-item" target={external ? '_blank' : ''} {href}>{title}</a>
</li>
