import axios from "axios"
import { create } from "zustand"
import { IBook } from '../utils/types';

type BookStore = {
    allBooks: IBook[];
    randomBooks: IBook[];
    topBooks: IBook[];
    booksByCategoryName: IBook[];
    bookByID: IBook | null;
    booksByUserCategories: IBook[];
    booksByName: IBook[];
    recommendedBooks: IBook[];
    moreLikeThisBooks: IBook[];
    createBook: (userId: string, categoryId: number, newBook: Omit<IBook, "id">) => Promise<void>
    getAllBooks: (userId: string) => Promise<void>;
    getRandomBooks: (userId: string) => Promise<void>;
    getTopBooks: (userId: string) => Promise<void>;
    getBooksByCategoryName: (categoryName: string, userId: string) => Promise<void>;
    getBookByID: (bookID: string, userId: string) => Promise<void>;
    getBooksByUserCategories: (userID: string) => Promise<void>;
    getBooksByName: (bookName: string, userId: string) => Promise<void>;
    getRecommendedBooks: (userId: string) => Promise<void>;
    getMoreLikeThisBooks: (userId: string, bookId: string) => Promise<void>;
};

export const useBookStore = create<BookStore>((set) => ({
    allBooks: [],
    randomBooks: [],
    topBooks: [],
    booksByCategoryName: [],
    bookByID: null,
    booksByUserCategories: [],
    booksByName: [],
    recommendedBooks: [],
    moreLikeThisBooks: [],
    createBook: async (userId: string, categoryId: number, newBook: Omit<IBook, "id">) => {
        try {
            await axios.post(`http://smartshelf.runasp.net/api/Book/Create/${userId}/${categoryId}`, {
                "Name": newBook.name,
                "Author": newBook.author,
                "Description": newBook.description,
                "FileURL": newBook.fileURL,
                "AverageRating": newBook.averageRating
            })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getAllBooks: async (userId: string) => {
        try {
            const response = await axios.get<{ books: IBook[] }>(`http://smartshelf.runasp.net/api/Book/GetAll/${userId}?pageNumber=1&pageSize=200`)
            set({ allBooks: response.data.books })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getRandomBooks: async (userId: string) => {
        try {
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/GetRandomBooks/${userId}`)
            set({ randomBooks: response.data })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getTopBooks: async (userId: string) => {
        try {
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/GetTopRatedBooks/${userId}`)
            set({ topBooks: response.data })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getBooksByCategoryName: async (categoryName: string, userId: string) => {
        try {
            const response = await axios.get<{ books: IBook[] }>(`http://smartshelf.runasp.net/api/Book/CategoryName/${categoryName}/${userId}?pageNumber=1&pageSize=46`)
            set({ booksByCategoryName: response.data.books })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getBookByID: async (bookID: string, userId: string) => {
        try {
            const response = await axios.get<IBook>(`http://smartshelf.runasp.net/api/Book/get/${bookID}/${userId}`)
            set({ bookByID: response.data })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getBooksByUserCategories: async (userId: string) => {
        try {
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/GetTopBooksByUserCategories/${userId}`)
            set({ booksByUserCategories: response.data })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getBooksByName: async (bookName: string, userId: string) => {
        try {
            const response = await axios.get<{ books: IBook[] }>(`http://smartshelf.runasp.net/api/Book/BookName/${bookName}/${userId}`)
            set({ booksByName: response.data.books })
        } catch (error: any) {
            console.log(error.message)
        }
    },
    getRecommendedBooks: async (userId: string) => {
        try {
            const response = await axios.get<{ recommended_books: IBook[] }>(`https://2a8c-156-204-60-78.ngrok-free.app/generate_recommendations?user_id=${userId}`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                }
            })
            set({ recommendedBooks: response.data.recommended_books })
        } catch (error: any) {
            console.log(error.message)
            set({ recommendedBooks: [] })
        }
    },
    getMoreLikeThisBooks: async (userId: string, bookId: string) => {
        try {
            const response = await axios.get<{ recommended_books: IBook[] }>(`https://2a8c-156-204-60-78.ngrok-free.app/recommend_by_book_id?user_id=${userId}&book_id=${bookId}`, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                }
            })
            set({ moreLikeThisBooks: response.data.recommended_books })
        } catch (error: any) {
            console.log(error.message)
        }
    },
}))