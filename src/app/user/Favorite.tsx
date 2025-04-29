import { BookHorizontal } from "../../components/BookHorizontal"
import { useFavoriteBooks } from "../../context/FavoriteContext"
import { motion } from "framer-motion"
import { slideInFromRight, slideInFromTop } from "../../utils/motion"

const Favorite = () => {

  const { favoriteBooks } = useFavoriteBooks()

  return (
    <>
        <div className="px-5 mb-4">
          <motion.h1 variants={slideInFromTop(0.3)} className="font-bold text-main-color text-[30px]">Favorite</motion.h1>
          <motion.div variants={slideInFromRight(.3)} className="mt-10 px-7 py-5 bg-gray-100 rounded-4xl inset-shadow-gray-950">
            {favoriteBooks.map((book) => (
                <BookHorizontal
                key={book.book_name}
                image_src={book.image_src}
                book_name={book.book_name}
                author_name={book.author_name}
                category={book.category}
                discription={book.discription}
                rating={book.rating}
                type="favorite"
                />
            ))}
          </motion.div>
        </div>
    </>
  )
}

export default Favorite