import type { ReactNode } from 'react';
import { MockAuthProvider } from '../features/auth';
import { ThemeProvider } from '../context/ThemeProvider';

interface IAppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: IAppProvidersProps) => {
  return (
    <ThemeProvider>
      <MockAuthProvider initiallyAuthorized>{children}</MockAuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
