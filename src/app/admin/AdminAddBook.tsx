import { useState } from "react"
import { IBook } from "../../utils/types"
import { books } from "../../utils/constants"
import { useParams } from "react-router-dom"

const AdminAddBook = () => {

    const [newBook, setNewBook] = useState<IBook | null>(null)

    const { category_name } = useParams()

    let image_src = ""
    let book_name = ""
    let author_name = ""
    let category = category_name
    let discription = ""
    let new_rating = ""

    function handleAdd() {
        const rating = Number(new_rating)
        if (category !== undefined) {
            setNewBook({ image_src, book_name, author_name, category, discription, rating })
            if (newBook !== null) {
                books.push(newBook)
                console.log(newBook)
            }
        }
    }

  return (
    <>
        <div className="flex flex-col items-center gap-4 mt-14 w-md mx-auto">
            <div className="w-full flex flex-col my-3">
                <label htmlFor="book-cover" className="text-center font-bold text-[21px]">Book Cover</label>
                <input onChange={(event) => image_src = event.target.value} id="book-cover" className="border border-black rounded-2xl py-1 mt-3 px-5" placeholder="Add Cover" type="url" />
            </div>

            <div className="w-full flex flex-col my-3">
                <label htmlFor="book-name" className="text-center font-bold text-[21px]">Book Name</label>
                <input onChange={(event) => book_name = event.target.value} id="book-name" className="border border-black rounded-2xl py-1 mt-3 px-5" placeholder="Add Name" type="text" />
            </div>

            <div className="w-full flex flex-col my-3">
                <label htmlFor="book-author" className="text-center font-bold text-[21px]">Book Author</label>
                <input onChange={(event) => author_name = event.target.value} id="book-author" className="border border-black rounded-2xl py-1 mt-3 px-5" placeholder="Add Author" type="text" />
            </div>

            <div className="w-full flex flex-col my-3">
                <label htmlFor="book-discription" className="text-center font-bold text-[21px]">Book Discription</label>
                <input onChange={(event) => discription = event.target.value} id="book-category" className="border border-black rounded-2xl py-1 mt-3 px-5" placeholder="Add Author" type="text" />
            </div>

            <div className="w-full flex flex-col my-3">
                <label htmlFor="book-rating" className="text-center font-bold text-[21px]">Book Rating</label>
                <input onChange={(event) => new_rating = event.target.value} id="book-rating" className="border border-black rounded-2xl py-1 mt-3 px-5" placeholder="Add Rating" type="number" />
            </div>

            <button onClick={handleAdd} className="w-full text-center py-2 mt-9 transition duration-200 bg-secondary hover:bg-main text-white rounded-2xl font-bold text-[25px]">Add</button>
        </div>
    </>
  )
}

export default AdminAddBook
