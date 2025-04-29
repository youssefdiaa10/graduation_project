import axios from "axios"
import { create } from "zustand"
import { IBook } from '../utils/types';


type BookStore = {
    allBooks: IBook[];
    randomBooks: IBook[];
    topBooks: IBook[];
    booksByCategoryName: IBook[],
    loading: boolean;
    error: string | null;
    getAllBooks: () => Promise<void>;
    getRandomBooks: () => Promise<void>;
    getTopBooks: () => Promise<void>;
    getBooksByCategoryName: (categoryName: string) => Promise<void>
    };


export const useBookStore = create<BookStore>((set) => ({
    allBooks: [],
    randomBooks: [],
    topBooks: [],
    booksByCategoryName: [],
    loading: false,
    error: null,
    getAllBooks: async () => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>("http://smartshelf.runasp.net/api/Book/GetAll")
            set({ allBooks: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getRandomBooks: async () => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>("http://smartshelf.runasp.net/api/Book/GetRandomBooks")
            set({ randomBooks: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getTopBooks: async () => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>("http://smartshelf.runasp.net/api/Book/GetTopRatedBooks")
            set({ topBooks: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getBooksByCategoryName: async (categoryName: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/CategoryName/${categoryName}`)
            set({ booksByCategoryName: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
}))