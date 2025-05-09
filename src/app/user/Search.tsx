import { IoIosSearch } from "react-icons/io"
import { BookHorizontal } from "../../components/BookHorizontal"
import { useBookStore } from "../../store/bookStore"
import { useUserStore } from "../../store/authStore"

const Search = () => {

  const { booksByName, getBooksByName } = useBookStore()
  const { user } = useUserStore()

  let searchContext = ""

  function handleSearch() {
    if (searchContext !== "" && user?.id) {
      getBooksByName(searchContext, user.id)
    }
  }

  return (
    <div className="px-5 mb-5">
      <div className="bg-gray-300 rounded-2xl flex items-center">
        <div className="p-5 mx-5">
          <IoIosSearch
            onClick={handleSearch}
            className="text-gray-700 text-[40px] cursor-pointer"
          />
        </div>
        <input onChange={(event) => searchContext = event.target.value} className="py-5 outline-0 w-full text-[25px] placeholder:text-gray-700 placeholder:text-[25px] placeholder:pl-5" placeholder="Search" type="text" />
      </div>
      <div id="my-search" className="mt-10 px-7 py-5 bg-gray-100 rounded-4xl inset-shadow-gray-950">
        {booksByName.map((book) => (
          <BookHorizontal
            key={book.name}
            id={book.id}
            name={book.name}
            author={book.author}
            description={book.description}
            fileURL={book.fileURL}
            categoryName={book.categoryName}
            publishedYear={book.publishedYear}
            averageRating={book.averageRating}
            numPages={book.numPages}
            linkBook={book.linkBook}
            type="search"
          />
        ))}
      </div>
    </div>
  )
}

export default Search
