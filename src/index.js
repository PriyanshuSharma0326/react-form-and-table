import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { CountryListContextProvider } from './components/context/CountryListContext.js';
import { CountryContextProvider } from './components/context/CountryContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <CountryListContextProvider>
                <CountryContextProvider>
                    <App />
                </CountryContextProvider>
            </CountryListContextProvider>
        </Router>
    </React.StrictMode>
);
