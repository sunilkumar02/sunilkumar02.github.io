import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import LoadingView from './loading-page/loading-view';

const INITIAL_LOADING_DURATION_MS = 2000;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, INITIAL_LOADING_DURATION_MS);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return isLoading ? <LoadingView /> : <Outlet />;
};

export default App;
