import './styles/global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { loadFonts } from './utils/loadFonts.js';

const ROOT = document.getElementById('root');

loadFonts(['1em Satoshi', '700 1em IntegralCF']);

if (ROOT) {
	createRoot(ROOT).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
