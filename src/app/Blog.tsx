import { useRef } from "react"
import { BookItem } from "../components/BookItem"
import { Infos } from "../components/Infos"
import Navbar from "../components/Navbar"
import { books } from "../utils/constants"
import { useScroll, useTransform, motion } from "framer-motion"
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

        <div className="col-span-4 grid-cols-subgrid ">
            <div className="px-5 flex flex-row flex-nowrap gap-4 my-10 overflow-y-hidden overflow-x-scroll">
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
  )
}

export default Blog



const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])
  return (
    <>
        <motion.div
        style={{x}}
        className="px-5 flex gap-4 bg-green-500 mt-10"
        >
        {books.map(book => (
          <BookItem
          image_src={book.image_src}
          book_name={book.book_name}
          author_name={book.author_name}
          rating={book.rating}
          />
        ))}
        </motion.div>
    </>
  )
}