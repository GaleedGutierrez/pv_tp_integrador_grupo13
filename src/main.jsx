import '@styles/global.css';

import ErrorBoundary from '@components/ErrorBoundary.jsx';
import { loadFonts } from '@utils/loadFonts.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './AppRouter.jsx';

loadFonts(['1em Satoshi', '700 1em IntegralCF']);

const ROOT = document.getElementById('root');

if (ROOT) {
	createRoot(ROOT).render(
		<StrictMode>
			<ErrorBoundary>
				<AppRouter />
			</ErrorBoundary>
		</StrictMode>,
	);
}
