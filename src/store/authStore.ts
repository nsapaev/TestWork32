import { create } from "zustand";

type UserData = {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
};

interface IAuthStore {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isAuth: boolean;
  setUser: (data: UserData) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  isAuth: false,
  setUser: ({ username = '', firstName = '', lastName = '', email = '' }: UserData) => {
    set({
      username,
      firstName,
      lastName,
      email,
      isAuth: Boolean(email)
    });
  },
}));
