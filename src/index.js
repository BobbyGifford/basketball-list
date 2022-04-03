import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

theme = createTheme(theme);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
