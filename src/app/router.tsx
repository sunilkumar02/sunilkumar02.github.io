import { createBrowserRouter } from 'react-router';
import App from './App';
import NotFound from './not-found-page/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/profile',
    element: <App />,
    errorElement: <NotFound />,
  },
]);
