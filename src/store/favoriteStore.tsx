import axios from "axios"
import { create } from "zustand"
import { IBook } from "../utils/types";

interface IFavoriteState {
    favoriteBooks: IBook[];
    toggleFavorite: (userId: string, bookId: string) => Promise<void>;
    getFavoriteBooks: (userId: string) => Promise<void>;
}

export const useFavoriteStore = create<IFavoriteState>((set) => (
    {
        favoriteBooks: [],
        toggleFavorite: async (userId, bookId) => {
            try {
                const response = await axios.post("http://smartshelf.runasp.net/api/Favourite/toggle-favorite", {
                    "userId": userId,
                    "bookId": bookId
                })
                console.log("toggleFavorite begins")
                console.log(response)
                console.log("toggleFavorite ends")
            } catch (error) {
                console.log(error)
            }
        },
        getFavoriteBooks: async (userId) => {
            try {
                const response = await axios.get<{ favoriteBooks: IBook[] }>(`http://smartshelf.runasp.net/api/Favourite/favorites/5?pageNumber=1&pageSize=30&userId=${userId}`)
                set({ favoriteBooks: response.data.favoriteBooks })
                console.log("getFavoriteBooks begins")
                console.log(response)
                console.log("getFavoriteBooks ends")
            } catch (error) {
                console.log(error)
            }
        },
    }
))