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
			svgrOptions: {
				exportType: 'default',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: '**/*.svg',
		}),
	],
	server: {
		host: true,
	},
});
