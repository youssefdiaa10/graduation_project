import { useParams } from "react-router-dom"
import { Book } from "../../components/Book"
import { useEffect } from "react"
import { useBookStore } from "../../store/bookStore"
import { useBookShowStore } from "../../store/bookShowStore"
import { useUserStore } from "../../store/authStore"
import BookShowItem from "../../components/BookShowItem"

const Genre = () => {

  const { genre_name } = useParams()
  const { booksByCategoryName, getBooksByCategoryName, getBookByID } = useBookStore()
  const { bookId } = useBookShowStore()
  const { user } = useUserStore()

  useEffect(() => {
    getBookByID(bookId, user.id)
  }, [bookId])


  if (genre_name !== undefined) {
    useEffect(() => {
      if (user.id) {
        getBooksByCategoryName(genre_name, user.id)
      }
    }, [genre_name])
  }

  return (
    <>
      <div className="px-5 mb-4">
        <h1 className="font-bold text-main-color text-[30px]">{genre_name}</h1>
        <div className="mt-5 grid grid-cols-5 gap-3 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl scrollable-div">
          {booksByCategoryName.map((book) => (
            <Book
              key={book.id}
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
            />
          ))}
        </div>
      </div>

      <BookShowItem />
    </>
  )
}

export default Genre
