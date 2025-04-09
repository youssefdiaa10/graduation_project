import { BookItem } from "../components/BookItem"
import { Infos } from "../components/Infos"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { books } from "../utils/constants"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../utils/motion"

const Home = () => {
  return (
    <div className="h-screen">
      <motion.div variants={slideInFromTop(0.5)}>
        <Navbar/>
      </motion.div>
      <div className="mt-10 grid grid-flow-col grid-cols-5 h-screen">
        <motion.div variants={slideInFromLeft(1)} className="shadow-xl rounded-2xl col-span-1 grid grid-cols-subgrid bg-white">
          <Infos />
        </motion.div>

        <div className="col-span-4 grid-cols-subgrid">


          <motion.div variants={slideInFromTop(1.5)} className="ml-7 my-10">
            <motion.h1 variants={slideInFromRight(2)} className="text-[27px] mb-3 font-bold text-secondary-color">Policy</motion.h1>
            <div className="bg-gray-100 rounded-4xl scrollable-div px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
              {books.map(book => (
                <BookItem
                key={book.book_name}
                image_src={book.image_src}
                book_name={book.book_name}
                author_name={book.author_name}
                rating={book.rating}
                />
              ))}
            </div>
          </motion.div>


          <motion.div variants={slideInFromTop(1.5)} className="ml-7 my-10">
            <motion.h1 variants={slideInFromRight(2)} className="text-[27px] mb-3 font-bold text-secondary-color">Policy</motion.h1>
            <div className="bg-gray-100 rounded-4xl scrollable-div px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
              {books.map(book => (
                <BookItem
                key={book.book_name}
                image_src={book.image_src}
                book_name={book.book_name}
                author_name={book.author_name}
                rating={book.rating}
                />
              ))}
            </div>
          </motion.div>


          <motion.div variants={slideInFromTop(1.5)} className="ml-7 my-10">
            <motion.h1 variants={slideInFromRight(2)} className="text-[27px] mb-3 font-bold text-secondary-color">Policy</motion.h1>
            <div className="bg-gray-100 rounded-4xl scrollable-div px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
              {books.map(book => (
                <BookItem
                key={book.book_name}
                image_src={book.image_src}
                book_name={book.book_name}
                author_name={book.author_name}
                rating={book.rating}
                />
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  )
}

export default Home