import adapter from '@sveltejs/adapter-static';
import legacy from '@vitejs/plugin-legacy';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build-static',
			assets: 'build-static',
			fallback: null
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [
				legacy({
					targets: ['defaults', 'not IE 11']
				})
			]
		}
	}
};

export default config;
