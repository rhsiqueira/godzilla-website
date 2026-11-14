import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/sections.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Em produção, o HTML já vem pronto do build (scripts/prerender.js) e o React
// apenas assume o controle dele. Em desenvolvimento, renderiza do zero.
if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, app);
} else {
    ReactDOM.createRoot(container).render(app);
}

reportWebVitals();
