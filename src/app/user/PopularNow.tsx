import { Book } from "../../components/Book"
import { books } from "../../utils/constants"

const PopularNow = () => {
  return (
    <>
        <div className="px-5">
            <h1 className="font-bold text-main-color text-[30px]">Popular Now</h1>
            <div className="mt-5 grid grid-cols-5 gap-5 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
                {books.map(book => {
                    if (book.rating >= 4.5) {
                        return (
                            <Book
                            key={book.book_name}
                            image_src={book.image_src}
                            book_name={book.book_name}
                            author_name={book.author_name}
                            category={book.category}
                            discription={book.discription}
                            rating={book.rating}
                            />
                        )
                    }
                })}
            </div>
        </div>
    </>
  )
}

export default PopularNow
