import { create } from "zustand"

interface IBookShow {
    bookId: string | null;
    bookItemShow: boolean;
    setBookItemShow: (state: boolean) => void;
    setBookItemShowId: (id: string) => void;
}

export const useBookShowStore = create<IBookShow>((set) => (
    {
        bookId: null,
        bookItemShow: false,
        setBookItemShow: (state) => set({ bookItemShow: state }),
        setBookItemShowId: (id: string) => set({ bookId: id }),
    }
))