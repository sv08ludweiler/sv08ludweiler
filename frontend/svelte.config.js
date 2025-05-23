import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapterVercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({ script: true }),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter:
			process.env.ADAPTER === 'vercel'
				? adapterVercel({
						runtime: 'nodejs22.x',
						isr: {
							// Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
							// Setting the value to `false` means it will never expire.
							expiration: 60,

							// Random token that can be provided in the URL to bypass the cached version of the asset, by requesting the asset
							// with a __prerender_bypass=<token> cookie.
							//
							// Making a `GET` or `HEAD` request with `x-prerender-revalidate: <token>` will force the asset to be re-validated.
							// bypassToken: BYPASS_TOKEN,

							// List of valid query parameters. Other parameters (such as utm tracking codes) will be ignored,
							// ensuring that they do not result in content being regenerated unnecessarily
							// allowQuery: ['search'],
						},
					})
				: process.env.ADAPTER === 'static'
					? adapterStatic({
							pages: './build-docker/build-static',
							// assets: 'build-static',
							// fallback: undefined,
							precompress: true,
							strict: false,
						})
					: process.env.ADAPTER === 'node'
						? adapterNode({
								out: './build-node',
								precompress: true,
							})
						: adapter(),

		prerender: {
			entries: process.env.ADAPTER === 'node' ? [] : ['*'],
		},
		serviceWorker: {
			register: false,
		},
	},
};

export default config;
