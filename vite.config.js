import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import defaultTheme from 'tailwindcss/defaultTheme';

export default defineConfig({
	plugins: [
		tailwindcss(),
		tailwindcss({
			content: ['./src/**/*.{html,js,svelte}'],
			theme: {
				extend: {
					fontFamily: {
						mono: ['SF Mono', ...defaultTheme.fontFamily.sans]
					}
				}
			}
		}),
		sveltekit()
	]
});
