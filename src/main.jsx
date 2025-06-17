import '@styles/global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';
import { store } from './store/store.js';
import { loadFonts } from './utils/loadFonts.js';

loadFonts(['1em Satoshi', '700 1em IntegralCF']);

const ROOT = document.querySelector('#root');

if (ROOT) {
	createRoot(ROOT).render(
		<StrictMode>
			<Provider store={store}>
				<ErrorBoundary>
					<AppRouter />
				</ErrorBoundary>
			</Provider>
		</StrictMode>,
	);
}
