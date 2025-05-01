import { create } from "zustand"

interface IBookShow {
    bookId: string | null;
    bookItemShow: boolean;
    setBookItemShow: () => void;
    setBookItemShowId: (id: string) => void;
}

export const useBookShowStore = create<IBookShow>((set) => (
    {
        bookId: null,
        bookItemShow: false,
        setBookItemShow: () => set((state) => ({ bookItemShow: !state.bookItemShow })),
        setBookItemShowId: (id: string) => set({ bookId: id }),
    }
))