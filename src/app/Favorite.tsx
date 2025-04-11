import { BookSearch } from "../components/BookSearch"
import { useFavoriteBooks } from "../context/FavoriteContext"

const Favorite = () => {

  const { favoriteBooks } = useFavoriteBooks()

  return (
    <>
        <div className="px-5 mb-4">
            <h1 className="font-bold text-main-color italic text-[26px]">Favorite</h1>
        <div className="mt-10 px-7 py-5 bg-gray-300 rounded-4xl inset-shadow-gray-950">
            {favoriteBooks.map((book) => (
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
    </>
  )
}

export default Favorite