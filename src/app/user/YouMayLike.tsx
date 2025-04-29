import { Book } from "../../components/Book"
import { useCategory } from "../../context/CategoryContext"
import { books } from "../../utils/constants"

const YouMayLike = () => {

  const { category } = useCategory()

  return (
    <>
        <div className="px-5 mb-4">
            <h1 className="font-bold text-main-color text-[30px]">You May Like</h1>
            <div className="mt-5 grid grid-cols-5 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
                {category.map((category) => {
                    return books.map((book) => {
                        if (category.categoryName === book.category) {
                            return (
                                <Book
                                key={book.book_name}
                                image_src={book.image_src}
                                book_name={book.book_name}
                                author_name={book.author_name}
                                category={book.category}
                                description={book.description}
                                rating={book.rating}
                                />
                            )
                        }
                    })
                })}
            </div>
        </div>
    </>
  )
}

export default YouMayLike