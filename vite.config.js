import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-ignore
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	// @ts-ignore
	plugins: [react(), jsconfigPaths(), tailwindcss()],
});
