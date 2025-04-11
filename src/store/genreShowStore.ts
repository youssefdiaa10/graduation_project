import { create } from "zustand"

interface IGenreShow {
    isShow: boolean;
    setIsShow: () => void;
}

export const useGenreShowStore = create<IGenreShow>((set) => (
    {
        isShow: false,
        setIsShow: () => set((state) => ({ isShow: !state.isShow })),
    }
))