<script lang="ts">
	import { assets } from '$app/paths';
</script>

<footer class="bg-primary text-primaryText relative">
	<div class="brand mx-auto">
		<img class="inline-flex flex-auto brand-logo" src={`${assets}/wappen.png`} alt="wappen" />
	</div>

	<section class="bg-primary h-60 min-h-min">
		<div class="container mx-auto p-4">Partner & Social Media</div>
	</section>

	<section class="bg-primaryDark h-60 min-h-min">
		<div class="container mx-auto p-4">Impressum | Datenschuzt | Cookie-Einstellungen</div>
	</section>
</footer>

<style lang="scss">
	footer {
		margin-top: 200px;
	}

	.brand {
		width: 200px;
		margin-top: -110px;
	}
</style>
