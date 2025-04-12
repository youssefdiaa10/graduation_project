import { createContext, useContext, useState } from "react";
import { IBook } from "../utils/types";


interface ReadingBooksContextType {
    readingBooks: IBook[];
    addBookToReading: (book: IBook) => void;
    removeBookFromReading: (bookName: string) => void;
}

const ReadingBooksContext = createContext<ReadingBooksContextType | undefined>(undefined);


export const ReadingBooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [readingBooks, setReadingBooks] = useState<IBook[]>([])

    const addBookToReading = (book: IBook) => {
        setReadingBooks((prev) => [...prev, book])
    }

    const removeBookFromReading = (bookName: string) => {
        setReadingBooks((prev) => prev.filter((book) => book.book_name !== bookName));
    };

    return (
        <ReadingBooksContext.Provider value={{ readingBooks, addBookToReading, removeBookFromReading }}>
            {children}
        </ReadingBooksContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useReadingBooks = (): ReadingBooksContextType => {
    const context = useContext(ReadingBooksContext)

    if (!context) {
        throw new Error("useReadingBooks must be used within a ReadingBooksProvider");
    }
    return context
}