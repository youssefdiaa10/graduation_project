import { BookItem } from "../components/BookItem"
import Navbar from "../components/Navbar"
import { books } from "../utils/books"
const Blog = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="mt-10 grid grid-flow-col">
        <div className="bg-amber-900 ">
          BLOG 1
        </div>
        <div className=" grid grid-cols-5 gap-y-5">
          {books.map(book => (
            <BookItem
            image_src={book.image_src}
            book_name={book.book_name}
            author_name={book.author_name}
            rating={book.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
