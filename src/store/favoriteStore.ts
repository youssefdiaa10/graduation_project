import axios from "axios"
import { create } from "zustand"
import { IBook } from "../utils/types";

interface IFavoriteState {
    favoriteBooks: IBook[];
    categoryIds: number[];
    toggleFavorite: (userId: string, bookId: string) => Promise<void>;
    getFavoriteBooks: (userId: string) => Promise<void>;
    setFavoriteCategories: (userId: string, categoryIds: number[]) => Promise<void>
}

export const useFavoriteStore = create<IFavoriteState>((set) => (
    {
        favoriteBooks: [],
        categoryIds: [],
        toggleFavorite: async (userId, bookId) => {
            try {
                const response = await axios.post("http://smartshelf.runasp.net/api/Favourite/toggle-favorite", {
                    "userId": userId,
                    "bookId": bookId
                })
            } catch (error) {
                console.log(error)
            }
        },
        getFavoriteBooks: async (userId) => {
            try {
                const response = await axios.get<{ favoriteBooks: IBook[] }>(`http://smartshelf.runasp.net/api/Favourite/favorites/${userId}`)
                set({ favoriteBooks: response.data.favoriteBooks })
            } catch (error) {
                console.log(error)
            }
        },
        setFavoriteCategories: async (userId, categoryIds) => {
            try {
                const response = await axios.post(`http://smartshelf.runasp.net/api/UserCategory/select-categories`, {
                    "UserId": userId,
                    "CategoryIds": categoryIds
                })
            } catch (error) {
                console.log(error)
            }
        },
    }
))