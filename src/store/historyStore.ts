import axios from "axios"
import { create } from "zustand"
import { IBook } from "../utils/types";

interface IHistoryState {
    historyBooks: IBook[];
    getHistoryBooks: (userId: string) => Promise<void>;
    addHistoryBook: (userId: string, bookId: string) => Promise<void>
}

export const useHistoryStore = create<IHistoryState>((set) => (
    {
        historyBooks: [],
        getHistoryBooks: async (userId) => {
            try {
                const response = await axios.get<{ historyBooks: IBook[] }>(`http://smartshelf.runasp.net/api/History/${userId}`)
                set({ historyBooks: response.data.historyBooks })
            } catch (error) {
                console.log(error)
            }
        },
        addHistoryBook: async (userId, bookId) => {
            try {
                const response = await axios.post(`http://smartshelf.runasp.net/api/History/add?userId=${userId}&bookId=${bookId}`)
            } catch (error) {
                console.log(error)
            }
        },
    }
))