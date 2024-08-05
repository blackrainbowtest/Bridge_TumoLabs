import React from 'react';
import { createRoot } from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import App from 'App';
import reportWebVitals from './reportWebVitals';
import { en } from 'locale/en';
import { am } from 'locale/am';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      am: am,
    },
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false
    }
  });

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
