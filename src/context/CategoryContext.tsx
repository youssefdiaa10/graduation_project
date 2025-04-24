import { createContext, useContext, useState } from "react";
import { ICategory } from "../utils/types";


interface CategoryContextType {
    category: ICategory[];
    addCategory:  (category: ICategory) => void;
    removeCategory: (categoryName: string) => void;
    isCategory: (bookName: string) => boolean;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);


export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [category, setCategory] = useState<ICategory[]>([])

    const addCategory = (myCategory: ICategory) => {
        if (category.length <= 2) {
            setCategory((prev) => [...prev, myCategory])
        }
    }

    const removeCategory = (categoryName: string) => {
        setCategory((prev) => prev.filter((category) => category.categoryName !== categoryName));
    };

    const isCategory = (categoryName: string) => {
        return category.some((category) => category.categoryName === categoryName);
    };

    return (
        <CategoryContext.Provider value={{ category, addCategory, removeCategory, isCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useCategory = (): CategoryContextType => {
    const context = useContext(CategoryContext)

    if (!context) {
        throw new Error("useCategory must be used within a CategoryProvider");
    }
    return context
}