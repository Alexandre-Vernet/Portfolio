import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_fr from "./lang/fr.json";
import common_en from "./lang/en.json";

const lang = localStorage.getItem('lang') || 'en';
i18next.init({
    interpolation: { escapeValue: false },
    lng: lang,
    resources: {
        en: {
            common: common_en,
        },
        fr: {
            common: common_fr
        },
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={ i18next }>
            <App/>
        </I18nextProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
