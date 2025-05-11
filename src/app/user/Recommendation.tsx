import { useEffect } from "react"
import { Book } from "../../components/Book"
import { useBookStore } from "../../store/bookStore"
import { useUserStore } from "../../store/authStore"
import BookShowItem from "../../components/BookShowItem"

const Recommendation = () => {

  const { recommendedBooks, getRecommendedBooks } = useBookStore()
  const { user } = useUserStore()

  useEffect(() => {
    getRecommendedBooks(user.id)
  }, [])

  return (
    <>
      <div className="px-5 relative">
        <h1 className="font-bold text-main-color text-[30px]">Recommendation</h1>
        <div className="mt-5 grid grid-cols-5 gap-3 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
          {recommendedBooks.map(book => (
            <Book
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
            />
          ))}
        </div>
      </div>

      <BookShowItem />
    </>
  )
}

export default Recommendation
