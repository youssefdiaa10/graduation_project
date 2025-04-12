import BookReading from "../components/BookReading"
import { useReadingBooks } from "../context/ReadingContext"

const Reading = () => {

    const { readingBooks } = useReadingBooks()

  return (
    <>
        <div className="px-5 mb-4">
            <h1 className="font-bold text-main-color italic text-[36px]">Reading History</h1>
        <div className="mt-10 px-7 py-5 bg-gray-300 rounded-4xl inset-shadow-gray-950">
            {readingBooks.map((book) => (
                <BookReading
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

export default Reading
