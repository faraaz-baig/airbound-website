import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: false,
		adapter: vercel()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
