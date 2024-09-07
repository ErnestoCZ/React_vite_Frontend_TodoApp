import { create } from 'zustand';
import { persist } from 'zustand/middleware';

//AUTHSTORE Types & more
type AuthStore = {
  isAuthenticated: boolean;
  user: string;
  JWT: string;
  login: (userID: string, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: '',
      JWT: '',
      login: (userID, token) => {
        set(() => ({ isAuthenticated: true, user: userID, JWT: token }));
      },
      logout: () => {
        set(() => ({ isAuthenticated: false, user: '', JWT: '' }));
      },
    }),
    { name: 'AuthStorage' },
  ),
);
