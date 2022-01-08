import adapter from '@sveltejs/adapter-auto';
import legacy from '@vitejs/plugin-legacy';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

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
