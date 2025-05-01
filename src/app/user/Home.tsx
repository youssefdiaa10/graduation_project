import { Infos } from "../../components/Infos"
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromTop } from "../../utils/motion"
import { Outlet } from "react-router-dom"
import { GenreAccordion } from "../../components/GenreAccordion"
import Navbar from "../../components/Navbar"
import BookItem from "../../components/BookItem"
import { useBookShowStore } from "../../store/bookShowStore"
import { useBookStore } from "../../store/bookStore"
import { useEffect } from "react"

const Home = () => {

  const { bookItemShow, bookId } = useBookShowStore()

  const { getBookByID } = useBookStore()

  useEffect(() => {
    if (bookId) {
      getBookByID(bookId)
    }
    console.log(`Home: ${bookId}`)
  }, [bookId])

  return (
    <div className="h-screen relative">
      <motion.div variants={slideInFromTop(.5)}>
        <Navbar />
      </motion.div>

      <div className="ml-5 z-50 absolute">
        <GenreAccordion />
      </div>

      <div className="mt-10 grid grid-flow-col grid-cols-5 h-screen">
        <motion.div variants={slideInFromLeft(.7)} className="shadow-xl mb-5 rounded-2xl col-span-1 grid grid-cols-subgrid bg-white">
          <Infos />
        </motion.div>

        <div className="col-span-4 grid-cols-subgrid">
          <Outlet />
        </div>

        {
          bookItemShow === false
            ?
            ""
            :
            // bookId !== null
            //   ?
            <BookItem
              // bookId={bookId}
              bookId="394751221"
            />
          // :
          // ""
        }

        {/* <BookItem
          // bookId={bookId}
          bookId="375752331"
        /> */}
      </div>
    </div>
  )
}

export default Home