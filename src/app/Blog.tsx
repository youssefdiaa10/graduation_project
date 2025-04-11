import { books } from "../utils/constants"
import { motion } from "framer-motion"
import { slideInFromRight, slideInFromTop } from "../utils/motion"
import { Book } from "../components/Book"
import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"


const Blog = () => {
  return (
    <>
        <motion.div variants={slideInFromTop(.5)} className="ml-7 my-10">
            <div className="flex justify-between items-baseline">
                <motion.h1 variants={slideInFromRight(1)} className="text-[27px] my-3 mx-5 font-bold text-secondary-color">Geography</motion.h1>
                <Link to={`/home/genre/Geography`}>
                    <motion.div variants={slideInFromRight(1)} className="mx-5 flex gap-2 items-center">
                        <h1 className="text-[17px] my-3 text-main-color">See All</h1>
                        <GoArrowRight className="text-main-color text-[22px]"/>
                    </motion.div>
                </Link>
            </div>
            <div className="bg-gray-100 rounded-4xl scrollable-div py-3 px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
                {books.map(book => (
                    <Book
                    key={book.book_name}
                    image_src={book.image_src}
                    book_name={book.book_name}
                    author_name={book.author_name}
                    rating={book.rating}
                    />
                ))}
            </div>
        </motion.div>


        <motion.div variants={slideInFromTop(.5)} className="ml-7 my-10">
            <div className="flex justify-between items-baseline">
                <motion.h1 variants={slideInFromRight(1)} className="text-[27px] my-3 mx-5 font-bold text-secondary-color">French</motion.h1>
                <Link to={`/home/genre/French`}>
                    <motion.div variants={slideInFromRight(1)} className="mx-5 flex gap-2 items-center">
                        <h1 className="text-[17px] my-3 text-main-color">See All</h1>
                        <GoArrowRight className="text-main-color text-[22px]"/>
                    </motion.div>
                </Link>
            </div>
            <div className="bg-gray-100 rounded-4xl scrollable-div py-3 px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
                {books.map(book => (
                    <Book
                    key={book.book_name}
                    image_src={book.image_src}
                    book_name={book.book_name}
                    author_name={book.author_name}
                    rating={book.rating}
                    />
                ))}
            </div>
        </motion.div>


        <motion.div variants={slideInFromTop(.5)} className="ml-7 my-10">
            <div className="flex justify-between items-baseline">
                <motion.h1 variants={slideInFromRight(1)} className="text-[27px] my-3 mx-5 font-bold text-secondary-color">Novel</motion.h1>
                <Link to={`/home/genre/Novel`}>
                    <motion.div variants={slideInFromRight(1)} className="mx-5 flex gap-2 items-center">
                        <h1 className="text-[17px] my-3 text-main-color">See All</h1>
                        <GoArrowRight className="text-main-color text-[22px]"/>
                    </motion.div>
                </Link>
            </div>
            <div className="bg-gray-100 rounded-4xl scrollable-div py-3 px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
                {books.map(book => (
                    <Book
                    key={book.book_name}
                    image_src={book.image_src}
                    book_name={book.book_name}
                    author_name={book.author_name}
                    rating={book.rating}
                    />
                ))}
            </div>
        </motion.div>
    </>
  )
}

export default Blog
