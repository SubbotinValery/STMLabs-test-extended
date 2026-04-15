import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './shared/styles/reset.css';
import './shared/styles/variables.css';
import './shared/styles/mixins.css';
import './shared/config/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
