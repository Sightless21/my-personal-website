import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*'
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
