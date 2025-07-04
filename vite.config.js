/* eslint-disable @typescript-eslint/ban-ts-comment */
import tailwindcss from '@tailwindcss/vite';
// Use when you need HTTPS in development
// import basicSsl from '@vitejs/plugin-basic-ssl';
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
		// basicSsl(),
	],
	server: {
		host: true,
	},
});
