import { createContext } from 'react';
import type { IAuthContextValue } from '../types/authContext';

export const AuthContext = createContext<IAuthContextValue | undefined>(undefined);
