import { BookItem } from "../components/BookItem"
import { Infos } from "../components/Infos"
import Navbar from "../components/Navbar"
import { books } from "../utils/constants"

const Blog = () => {
  return (
    <div className="h-screen">
      <div>
        <Navbar/>
      </div>
      <div className="mt-10 grid grid-flow-col grid-cols-5 h-screen">
        <div className="shadow-xl rounded-2xl col-span-1 grid grid-cols-subgrid bg-white">
          <Infos />
        </div>

        <div className="col-span-4 grid-cols-subgrid">


          <div className="ml-7 my-10">
            <h1 className="text-[27px] mb-3 font-bold text-secondary-color">Policy</h1>
            <div className="px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
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


          <div className="ml-7 my-10">
            <h1 className="text-[27px] mb-3 font-bold text-secondary-color">Policy</h1>
            <div className="px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
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


          <div className="ml-7 my-10">
            <h1 className="text-[27px] mb-3 font-bold text-secondary-color">Policy</h1>
            <div className="px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
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
      </div>
    </div>
  )
}

export default Blog