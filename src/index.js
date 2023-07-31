import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DevSupport ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
 
      </DevSupport>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();