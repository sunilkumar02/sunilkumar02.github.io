import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import '@styles/utilities.css'
import '@styles/global.scss'
import { router } from './app/router.tsx';
import { ApplicationViewProvider } from './context/ApplicationViewContext.tsx';
import { ThemeProvider } from './context/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ApplicationViewProvider>
        <RouterProvider router={router}></RouterProvider>
      </ApplicationViewProvider>
    </ThemeProvider>
  </StrictMode>,
)
