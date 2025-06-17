import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-ignore
import jsconfigPaths from 'vite-jsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// @ts-ignore
		jsconfigPaths(),
		tailwindcss(),
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				exportType: 'default',
				ref: true,
				svgo: false,
				titleProp: true,
				plugins: ['@svgr/plugin-jsx'],
			},
			include: '**/*.svg?react',
			exclude: '**/*.svg',
		}),
	],
	server: {
		host: true,
	},
});
