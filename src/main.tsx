import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import '@styles/utilities.css'
import '@styles/global.scss'
import { router } from './app/router.tsx';
import AppProviders from './app/providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
)
