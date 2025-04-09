import { create } from "zustand"
import { IUser } from "../utils/types";


interface IAuthState {
    user: IUser | null;
    setUser: (user: IUser) => void;
    clearUser: () => void;
    isValid: (email: string, password: string) => boolean;
}

export const useUserStore = create<IAuthState>((set, get) => (
    {
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
        isValid: (login_email, login_password) => {
            const { user } = get();
            if (user !== null) {
                return user.email === login_email && user.password === login_password;
            }
            return false
        },
    }
))