import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import Home from './views/home-page/home.tsx';
import App from './App.tsx';
import About from './views/about-page/about.tsx';
import NotFound from './views/not-found-page/not-found.tsx';
import SkillView from './views/skill-page/skill.tsx';
import Contact from './views/contact-page/contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: 'skills', element: <SkillView /> },
      { path: 'contact', element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
