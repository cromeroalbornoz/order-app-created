import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/orderContext';
import { AppRouter } from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById("root");
const rootContainer = createRoot(root);

rootContainer.render(
  <BrowserRouter>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </BrowserRouter>
);

