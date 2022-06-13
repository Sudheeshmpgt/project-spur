import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { Theme } from './Theme'
import { ThemeProvider } from '@mui/material/styles'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import userReducer from './features/userData'

const store = configureStore({
  reducer:{
    userData: userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Provider>
  </BrowserRouter>
);
