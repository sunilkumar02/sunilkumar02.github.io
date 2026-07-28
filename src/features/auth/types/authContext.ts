export interface IAuthContextValue {
  isAuthorized: boolean;
}

export interface IMockAuthProviderProps {
  children: React.ReactNode;
  initiallyAuthorized?: boolean;
}
