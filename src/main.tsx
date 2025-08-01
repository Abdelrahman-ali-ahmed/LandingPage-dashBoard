import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {persistor, store} from './redux/store';
import DarkModeProvider from './components/DarkModeProvider';
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <DarkModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DarkModeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


