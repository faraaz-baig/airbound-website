import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: false,
		prerender: {
			enabled: false
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
