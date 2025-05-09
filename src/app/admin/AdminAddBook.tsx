import { useEffect, useState } from "react"
import { IBook } from "../../utils/types"
import { useParams } from "react-router-dom"
import { useCategoryStore } from "../../store/categoryStore"
import { useBookStore } from "../../store/bookStore"

const AdminAddBook = () => {

    const { category_name } = useParams()
    const { createBook } = useBookStore()
    const { allCategories, getAllCategories } = useCategoryStore()

    const [categoryID, setCategoryID] = useState<number>(0)
    const [newBook, setNewBook] = useState<IBook>()

    const [name, setName] = useState<string>("")
    const [fileURL, setFileURL] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [rating, setRating] = useState<string>("")

    const [averageRating] = useState<number>(Number(rating))

    useEffect(() => {
        getAllCategories()
    }, [])

    useEffect(() => {
        for (let i = 0; i < allCategories.length; i++) {
            if (allCategories[i].name === category_name) {
                setCategoryID(allCategories[i].id)
                break
            }
        }
    }, [])

    return (
        <>
            <div className="flex flex-col items-center gap-4 my-14 w-md mx-auto">
                <div className="w-full flex flex-col my-3">
                    <label
                        htmlFor="book-cover"
                        className="text-center font-bold text-[21px]"
                    >
                        Book Cover
                    </label>
                    <input
                        value={fileURL}
                        onChange={(event) => setFileURL(event.target.value)}
                        id="book-cover"
                        className="border border-black rounded-2xl py-1 mt-3 px-5"
                        placeholder="Add Cover"
                        type="url"
                    />
                </div>

                <div className="w-full flex flex-col my-3">
                    <label
                        htmlFor="book-name"
                        className="text-center font-bold text-[21px]"
                    >
                        Book Name
                    </label>
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        id="book-name"
                        className="border border-black rounded-2xl py-1 mt-3 px-5"
                        placeholder="Add Name"
                        type="text"
                    />
                </div>

                <div className="w-full flex flex-col my-3">
                    <label
                        htmlFor="book-author"
                        className="text-center font-bold text-[21px]"
                    >
                        Book Author
                    </label>
                    <input
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        id="book-author"
                        className="border border-black rounded-2xl py-1 mt-3 px-5"
                        placeholder="Add Author"
                        type="text"
                    />
                </div>

                <div className="w-full flex flex-col my-3">
                    <label
                        htmlFor="book-description"
                        className="text-center font-bold text-[21px]"
                    >
                        Book description
                    </label>
                    <input
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        id="book-category"
                        className="border border-black rounded-2xl py-1 mt-3 px-5"
                        placeholder="Add Description"
                        type="text"
                    />
                </div>

                <div className="w-full flex flex-col my-3">
                    <label
                        htmlFor="book-rating"
                        className="text-center font-bold text-[21px]"
                    >
                        Book Rating
                    </label>
                    <input
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        id="book-rating"
                        className="border border-black rounded-2xl py-1 mt-3 px-5"
                        placeholder="Add Rating"
                        type="number"
                    />
                </div>

                <button
                    onClick={() => {
                        setNewBook({ name, author, fileURL, description, averageRating })
                        if (newBook) {
                            createBook("9e8cbc03-44c4-4d34-850b-bea6d6eef425", categoryID, newBook)
                        }

                        setAuthor("")
                        setDescription("")
                        setFileURL("")
                        setName("")
                        setRating("")
                    }}
                    className="w-full text-center py-2 mt-9 transition duration-200 bg-secondary hover:bg-main text-white rounded-2xl font-bold text-[25px]"
                >
                    Add
                </button>
            </div>
        </>
    )
}

export default AdminAddBook
