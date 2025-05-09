import axios from "axios"
import { create } from "zustand"
import { ICategory } from '../utils/types';


type CategoryStore = {
    allCategories: ICategory[];
    categoryByID: ICategory;
    loading: boolean;
    error: string | null;
    getAllCategories: () => Promise<void>;
    getCategoryByID: (categoryID: number) => Promise<void>;
    };


export const useCategoryStore = create<CategoryStore>((set) => ({
    allCategories: [],
    categoryByID: { id: NaN, name: "" },
    loading: false,
    error: null,
    getAllCategories: async () => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<{ categories: ICategory[] }>("http://smartshelf.runasp.net/api/Category?pageNumber=1&pageSize=46")
            set({ allCategories: response.data.categories, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getCategoryByID: async (categoryID: number) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<ICategory>(`http://smartshelf.runasp.net/api/Category/${categoryID}`)
            set({ categoryByID: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
}))