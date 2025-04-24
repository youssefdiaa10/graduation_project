import { books } from "../../utils/constants"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"
import { BookHorizontal } from "../../components/BookHorizontal"

const Search = () => {

  const [search, setSearch] = useState<string>("")

  let searchContext = ""

  function handleSearch(){
    if (searchContext !== "") {
      setSearch(searchContext)
    }
  }

  return (
    <div className="px-5 mb-5">
        <div className="bg-gray-300 rounded-2xl flex items-center">
            <div className="p-5 mx-5">
              <IoIosSearch onClick={handleSearch} className="text-gray-700 text-[40px]"/>
            </div>
            <input onChange={(event) => searchContext = event.target.value} className="py-5 outline-0 w-full text-[25px] placeholder:text-gray-700 placeholder:text-[25px] placeholder:pl-5" placeholder="Search" type="text" />
        </div>
        <div id="my-search" className="mt-10 px-7 py-5 bg-gray-100 rounded-4xl inset-shadow-gray-950">
            {books.filter((item) => {
              return search.toLowerCase() === ""
              ? ""
              : item.book_name.toLowerCase().includes(search)
            }).map((book) => (
                <BookHorizontal
                key={book.book_name}
                image_src={book.image_src}
                book_name={book.book_name}
                author_name={book.author_name}
                category={book.category}
                discription={book.discription}
                rating={book.rating}
                type="search"
                />
            ))}
        </div>
    </div>
  )
}

export default Search
