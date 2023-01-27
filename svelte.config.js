import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				bendler: 'src/routes/bendler/page.svelte'
			}
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			edge: false,
			external: [],
			split: false
		})
	}
};

export default config;
