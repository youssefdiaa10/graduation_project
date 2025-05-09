import { BookHorizontal } from "../../components/BookHorizontal"
import { motion } from "framer-motion"
import { slideInFromRight, slideInFromTop } from "../../utils/motion"
import { useFavoriteStore } from "../../store/favoriteStore"
import { useEffect, useState } from "react"
import { useUserStore } from "../../store/authStore"

const Favorite = () => {

  const { favoriteBooks, getFavoriteBooks } = useFavoriteStore()
  const [render, setRender] = useState<boolean>(false)
  const { user } = useUserStore()

  useEffect(() => {
    if (user?.id) {
      getFavoriteBooks(user?.id)
    }
  }, [render])

  return (
    <>
      <div className="px-5 mb-4">
        <motion.h1 variants={slideInFromTop(0.3)} className="font-bold text-main-color text-[30px]">Favorite</motion.h1>
        <motion.div variants={slideInFromRight(.3)} className="mt-10 px-7 py-5 bg-gray-100 rounded-4xl inset-shadow-gray-950">
          {favoriteBooks.map((book) => (
            <BookHorizontal
              key={book.id}
              id={book.id}
              name={book.name}
              author={book.author}
              description={book.description}
              fileURL={book.fileURL}
              categoryName={book.categoryName}
              publishedYear={book.publishedYear}
              averageRating={book.averageRating}
              numPages={book.numPages}
              linkBook={book.linkBook}
              setRender={setRender}
              type="favorite"
            />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Favorite