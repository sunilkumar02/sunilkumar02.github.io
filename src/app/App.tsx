import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { profileMockData } from '../features/porfile';
import LoadingView from './loading-page/loading-view';

const INITIAL_LOADING_DURATION_MS = 2000;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const heroImage = new Image();
    heroImage.decoding = 'async';
    heroImage.src = profileMockData.profile_url;

    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, INITIAL_LOADING_DURATION_MS);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return isLoading ? <LoadingView /> : <Outlet />;
};

export default App;
