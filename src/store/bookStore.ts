import axios from "axios"
import { create } from "zustand"
import { IBook } from '../utils/types';


type IRecommendedBook = {
    book_id: string;
    title: string;
    author: string;
    categories: string;
    book_pic: string;
    published_year: number;
    average_rate: number;
    num_pages: number;
    description: string;
    isFavorite: boolean;
    // linkBook?: string;
}


type BookStore = {
    allBooks: IBook[];
    randomBooks: IBook[];
    topBooks: IBook[];
    booksByCategoryName: IBook[];
    bookByID: IBook | null;
    booksByUserCategories: IBook[];
    booksByName: IBook[];
    recommendedBooks: IRecommendedBook[]
    loading: boolean;
    error: string | null;
    createBook: (userId: string, categoryId: number, newBook: IBook) => Promise<void>
    getAllBooks: (userId: string) => Promise<void>;
    getRandomBooks: (userId: string) => Promise<void>;
    getTopBooks: (userId: string) => Promise<void>;
    getBooksByCategoryName: (categoryName: string, userId: string) => Promise<void>;
    getBookByID: (bookID: string, userId: string) => Promise<void>;
    getBooksByUserCategories: (userID: string) => Promise<void>;
    getBooksByName: (bookName: string, userId: string) => Promise<void>;
    getRecommendedBooks: (userId?: string) => Promise<void>;
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
    loading: false,
    error: null,
    createBook: async (userId: string, categoryId: number, newBook: IBook) => {
        // set({ loading: true, error: null });
        try{
            await axios.post(`http://smartshelf.runasp.net/api/Book/Create/${userId}/${categoryId}`, {
                "Name": newBook.name,
                "Author": newBook.author,
                "Description": newBook.description,
                "FileURL": newBook.fileURL,
                "AverageRating": newBook.averageRating
            })
            // console.log(response)
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getAllBooks: async (userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<{ books: IBook[] }>(`http://smartshelf.runasp.net/api/Book/GetAll/${userId}?pageNumber=1&pageSize=200`)
            set({ allBooks: response.data.books, loading: false })
        } catch(error: any){
            set({ error: error.message || 'Failed to fetch books', loading: false });
            console.log(error.message)
        }
    },
    getRandomBooks: async (userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/GetRandomBooks/${userId}`)
            set({ randomBooks: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getTopBooks: async (userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/GetTopRatedBooks/${userId}`)
            set({ topBooks: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getBooksByCategoryName: async (categoryName: string, userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<{ books: IBook[] }>(`http://smartshelf.runasp.net/api/Book/CategoryName/${categoryName}/${userId}?pageNumber=1&pageSize=46`)
            set({ booksByCategoryName: response.data.books, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getBookByID: async (bookID: string, userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook>(`http://smartshelf.runasp.net/api/Book/get/${bookID}/${userId}`)
            set({ bookByID: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getBooksByUserCategories: async (userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<IBook[]>(`http://smartshelf.runasp.net/api/Book/GetTopBooksByUserCategories/${userId}`)
            set({ booksByUserCategories: response.data, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getBooksByName: async (bookName: string, userId: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<{ books: IBook[] }>(`http://smartshelf.runasp.net/api/Book/BookName/${bookName}/${userId}`)
            set({ booksByName: response.data.books, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
    getRecommendedBooks: async (_userId?: string) => {
        // set({ loading: true, error: null });
        try{
            const response = await axios.get<{ recommended_books: IRecommendedBook[] }>(`https://6cdb-156-204-25-2.ngrok-free.app/generate_recommendations?user_id=2`, {
                headers: {
                    'Accept': 'application/json',
                },
            })
            console.log(response.data.recommended_books)
            set({ recommendedBooks: response.data.recommended_books, loading: false })
        } catch(error: any){
            // set({ error: error.message || 'Failed to fetch users', loading: false });
            console.log(error.message)
        }
    },
}))