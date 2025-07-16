import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.tsx';
import NotFound from './views/not-found-page/not-found.tsx';
import { ApplicationViewProvider } from './context/ApplicationViewContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <ApplicationViewProvider>
      <RouterProvider router={router}></RouterProvider>
    </ApplicationViewProvider>
  </StrictMode>,
)
