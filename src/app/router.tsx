import { createBrowserRouter, Navigate } from 'react-router';
import { AuthorizedRoute } from '../features/auth';
import { profileMockData } from '../features/porfile';
import { AuthorizedLayout } from '../layouts/AuthorizedLayout';
import { PublicLayout } from '../layouts/PublicLayout';
import App from './App';
import Home from './home-page/home';
import NotFound from './not-found-page/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/profile" replace />,
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: 'profile',
            element: <Home userData={profileMockData} />,
          },
        ],
      },
      {
        element: <AuthorizedRoute />,
        children: [
          {
            path: 'app',
            element: <AuthorizedLayout />,
          },
        ],
      },
    ],
  },
]);
