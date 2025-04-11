import { createContext, useContext, useState } from "react";
import { IBook } from "../utils/types";


interface FavoriteBooksContextType {
    favoriteBooks: IBook[];
    addBookToFavorite: (book: IBook) => void;
    removeBookFromFavorite: (bookName: string) => void;
    isFavorite: (bookName: string) => boolean;
}

const FavoriteBooksContext = createContext<FavoriteBooksContextType | undefined>(undefined);


export const FavoriteBooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favoriteBooks, setFavoriteBooks] = useState<IBook[]>([])

    const addBookToFavorite = (book: IBook) => {
        setFavoriteBooks((prev) => [...prev, book])
    }

    const removeBookFromFavorite = (bookName: string) => {
        setFavoriteBooks((prev) => prev.filter((book) => book.book_name !== bookName));
    };

    const isFavorite = (bookName: string) => {
        return favoriteBooks.some((book) => book.book_name === bookName);
    };

    return (
        <FavoriteBooksContext.Provider value={{ favoriteBooks, addBookToFavorite, removeBookFromFavorite, isFavorite }}>
            {children}
        </FavoriteBooksContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useFavoriteBooks = (): FavoriteBooksContextType => {
    const context = useContext(FavoriteBooksContext)

    if (!context) {
        throw new Error("useFavoriteBooks must be used within a FavoriteBooksProvider");
    }
    return context
}