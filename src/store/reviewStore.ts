import axios from "axios"
import { create } from "zustand"
import { IBook } from "../utils/types";

interface IReviewState {
    getReviewBooks: () => Promise<void>;
    getAllUserReviewBooks: (userId: string) => Promise<void>
    addReviewBook: (userId: string, bookId: string, rating:number) => Promise<void>
}

export const useReviewStore = create<IReviewState>((_set) => (
    {
        getReviewBooks: async () => {
            try {
                await axios.get<{ reviews: IBook[] }>(`http://smartshelf.runasp.net/api/Reviews`)
            } catch (error) {
                console.log(error)
            }
        },
        getAllUserReviewBooks: async (userId) => {
            try {
                await axios.get<{ reviews: IBook[] }>(`http://smartshelf.runasp.net/api/Reviews/${userId}`)
            } catch (error) {
                console.log(error)
            }
        },
        addReviewBook: async (userId, bookId, rating) => {
            try {
                await axios.post(`http://smartshelf.runasp.net/api/Reviews`, {
                    "userId": userId,
                    "bookId": bookId,
                    "rating": rating
                })
                // console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    }
))