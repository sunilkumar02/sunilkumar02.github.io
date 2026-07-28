import { createBrowserRouter } from 'react-router';
import { profileMockData } from '../features/portfolio';
import App from './App';
import Home from './home-page/home';
import NotFound from './not-found-page/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/profile',
    element: <Home userData={profileMockData} />,
    errorElement: <NotFound />,
  },
]);
