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
                const response = await axios.get<{ history: IBook[] }>(`http://smartshelf.runasp.net/api/history/${userId}?pageNumber=1&pageSize=10`)
                set({ historyBooks: response.data.history })
            } catch (error) {
                console.log(error)
            }
        },
        addHistoryBook: async (userId, bookId) => {
            try {
                await axios.post(`http://smartshelf.runasp.net/api/history/add`, {
                        "userId": userId,
                        "bookId": bookId
                })
            } catch (error) {
                console.log(error)
            }
        },
    }
))