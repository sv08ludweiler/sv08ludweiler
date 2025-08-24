<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>EDEKA Lorenz Warndt-Cup 2025 D-Mädchen</title>
</svelte:head>

<div class="submenu fixed z-10 w-full bg-green-700 text-white">
	<ul
		class="flex h-full flex-row items-center gap-3 overflow-hidden overflow-x-auto px-4 md:container md:mx-auto"
	>
		<li class="nav-menu h-full"><a class="menu-item" href="#matches">Spieltermine</a></li>
		<li class="nav-menu h-full"><a class="menu-item" href="#groups">Gruppen</a></li>
		<li class="nav-menu h-full"><a class="menu-item" href="#finals">Finalrunde</a></li>
	</ul>
</div>

<div class="page-content has-submenu mx-auto 2xl:container">
	<enhanced:img
		class="aspect-auto w-full rounded-b-md"
		alt="Turnier"
		src="$lib/assets/tournament-header.webp"
		sizes="min(1500px, 100vw)"
		fetchpriority="high"
	/>

	<section>
		<div class="flex-auto p-4 md:container md:mx-auto">
			<h1>EDEKA Lorenz Warndt-Cup 2025 | D-Mädchen</h1>
			<p>Wann: Sonntag, 17.08.2025, ab 12.30 Uhr</p>
			<p>
				Wo: <a href="https://maps.app.goo.gl/RkJYZJ7yFbFeqvrd7" target="_blank">
					Stadion an der ehemaligen Jugendherberge in Ludweiler
				</a>
			</p>
		</div>
	</section>

	<section class="my-5 px-4">
		<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
			<p>gesponsort von</p>
			<p>
				<a
					href="https://www.edeka.de/eh/s%C3%BCdwest/edeka-lorenz-am-hammergraben-3/index.jsp"
					aria-label="Sponsor EDEKA Lorenz"
				>
					<img
						src="https://cms.sv08ludweiler.de/uploads/Logo_Edeka_Lorenz_3a7ab63465.webp"
						alt="EDEKA Lorenz Logo"
						height="100px"
						style="height: 100px;"
					/>
				</a>
			</p>
		</div>
	</section>

	<section>
		<div class="flex-auto p-4 md:container md:mx-auto">
			<h2 id="matches">Spieltermine</h2>
			<iframe
				title="matches"
				id="widget"
				src="https://www.meinspielplan.de/plan/kwb5tf?box=dates&preview&title=yes&dates=all&nolinking=yes&css=&id="
				frameborder="0"
				width="100%"
				height="879px"
			></iframe>
		</div>
	</section>

	<section class="my-5 px-4">
		<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
			<p>
				<a
					href="https://www.edeka.de/eh/s%C3%BCdwest/edeka-lorenz-am-hammergraben-3/index.jsp"
					aria-label="Sponsor EDEKA Lorenz"
				>
					<img
						src="https://cms.sv08ludweiler.de/uploads/Logo_Edeka_Lorenz_3a7ab63465.webp"
						alt="EDEKA Lorenz Logo"
						height="100px"
						style="height: 100px;"
					/>
				</a>
			</p>
		</div>
	</section>

	<section>
		<div class="flex-auto p-4 md:container md:mx-auto">
			<h2 id="groups">Gruppen</h2>
			<iframe
				title="table"
				src="https://www.meinspielplan.de/plan/kwb5tf?box=groupstage&preview&title=yes&dates=&nolinking=yes&css=&id="
				frameborder="0"
				width="100%"
				height="501px"
			></iframe>
		</div>
	</section>

	<section class="my-5 px-4">
		<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
			<p>
				<a
					href="https://www.edeka.de/eh/s%C3%BCdwest/edeka-lorenz-am-hammergraben-3/index.jsp"
					aria-label="Sponsor EDEKA Lorenz"
				>
					<img
						src="https://cms.sv08ludweiler.de/uploads/Logo_Edeka_Lorenz_3a7ab63465.webp"
						alt="EDEKA Lorenz Logo"
						height="100px"
						style="height: 100px;"
					/>
				</a>
			</p>
		</div>
	</section>

	<section>
		<div class="flex-auto p-4 md:container md:mx-auto">
			<h2 id="finals">Finalrunde</h2>
			<iframe
				title="table"
				src="https://www.meinspielplan.de/plan/kwb5tf?box=roundlist&preview&title=yes&nolinking=yes&css=&id="
				frameborder="0"
				width="100%"
				height="454px"
			></iframe>
		</div>
	</section>

	<section class="my-5 px-4">
		<div class="flex flex-wrap items-center justify-center gap-4" aria-label="Partner">
			<p>
				<a
					href="https://www.edeka.de/eh/s%C3%BCdwest/edeka-lorenz-am-hammergraben-3/index.jsp"
					aria-label="Sponsor EDEKA Lorenz"
				>
					<img
						src="https://cms.sv08ludweiler.de/uploads/Logo_Edeka_Lorenz_3a7ab63465.webp"
						alt="EDEKA Lorenz Logo"
						height="100px"
						style="height: 100px;"
					/>
				</a>
			</p>
		</div>
	</section>

	<section>
		<div class="flex-auto p-4 md:container md:mx-auto">
			<p>
				<a target="_blank" href="https://www.meinspielplan.de">powered by meinSpielplan.de</a>
			</p>
		</div>
	</section>
</div>

<style lang="scss">
	.submenu {
		height: var(--submenu-height);
	}
	.page-content {
		&.has-submenu {
			margin-top: var(--submenu-height);
		}
		&.has-submenu :target:before {
			content: '';
			display: block;
			height: 145px;
			margin: -145px 0 0;
		}
	}

	iframe {
		:global(.public_box_title) {
			display: none;
		}
	}
</style>
