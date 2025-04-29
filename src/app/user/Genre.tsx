import { useParams } from "react-router-dom"
import { Book } from "../../components/Book"
import { books } from "../../utils/constants"

const Genre = () => {

  const { genre_name } = useParams()

  return (
    <>
        <div className="px-5 mb-4">
            <h1 className="font-bold text-main-color text-[30px]">{genre_name}</h1>
            <div className="mt-5 grid grid-cols-5 gap-3 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
                  {books.map((book) => {
                    if (book.category === genre_name) {
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
                    return
                  })}
            </div>
        </div>
    </>
  )
}

export default Genre
