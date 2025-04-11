import { books } from "../utils/constants"
import { BookSearch } from "../components/BookSearch"
import { useState } from "react"

const Search = () => {

  const [search, setSearch] = useState<string>("")

  return (
    <div className="px-5 mb-5">
        <div className="bg-gray-300 rounded-2xl flex items-center gap-5">
            <input onChange={(event) => setSearch(event.target.value)} className="py-5 mx-13 outline-0 w-full text-[25px] placeholder:text-[25px] placeholder:pl-5" placeholder="Search" type="text" />
        </div>
        <div className="mt-10 px-7 py-5 bg-gray-300 rounded-4xl inset-shadow-gray-950">
            {books.filter((item) => {
              return search.toLowerCase() === ''
              ? item
              : item.book_name.toLowerCase().includes(search)
            }).map((book) => (
                <BookSearch
                key={book.book_name}
                image_src={book.image_src}
                book_name={book.book_name}
                author_name={book.author_name}
                rating={book.rating}
                />
            ))}
        </div>
    </div>
  )
}

export default Search
