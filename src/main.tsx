import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/unbounded';
import '@fontsource-variable/plus-jakarta-sans';
import './index.css';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
