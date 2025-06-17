import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const ROOT = document.getElementById('root');

if (ROOT) {
	createRoot(ROOT).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
