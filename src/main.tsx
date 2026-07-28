import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import '@styles/utilities.css'
import '@styles/global.scss'
import App from './app/App.tsx';
import NotFound from './app/not-found-page/not-found.tsx';
import { ApplicationViewProvider } from './context/ApplicationViewContext.tsx';
import { ThemeProvider } from './context/ThemeProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ApplicationViewProvider>
        <RouterProvider router={router}></RouterProvider>
      </ApplicationViewProvider>
    </ThemeProvider>
  </StrictMode>,
)
