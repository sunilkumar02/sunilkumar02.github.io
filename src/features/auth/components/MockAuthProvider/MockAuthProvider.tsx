import { useMemo } from 'react';
import { AuthContext } from '../../store/AuthContext';
import type { IAuthContextValue, IMockAuthProviderProps } from '../../types/authContext';

const MockAuthProvider = ({
  children,
  initiallyAuthorized = true,
}: IMockAuthProviderProps) => {
  const value = useMemo<IAuthContextValue>(
    () => ({ isAuthorized: initiallyAuthorized }),
    [initiallyAuthorized],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default MockAuthProvider;
