import { Book } from "../components/Book"
import { books } from "../utils/constants"

const Recommendation = () => {
  return (
    <>
        <div className="px-5">
            <h1 className="font-bold text-secondary-color italic text-[26px]">Recommendation</h1>
            <div className="mt-5 grid grid-cols-5 gap-3 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
                {books.map((book) => (
                    <Book
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

export default Recommendation
