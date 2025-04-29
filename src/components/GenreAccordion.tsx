import { useGenreShowStore } from "../store/genreShowStore"
import { motion } from "framer-motion"
import { slideInFromTop } from "../utils/motion"
import { categories } from "../utils/constants"
import GenreList from "./GenreList"

export const GenreAccordion = () => {

  const {isShow} = useGenreShowStore()

  return (
    <>
    {
      isShow === false
      ?
      ""
      :
      <motion.div variants={slideInFromTop(0.1)} className="w-fit">
        <ul className="bg-white/85 shadow-2xl rounded-2xl cursor-pointer p-2 grid grid-cols-4">
          {categories.map((category) => (
            <GenreList
            key={category.name}
            id={category.id}
            name={category.name}
            />
          ))}
        </ul>
      </motion.div>
    }
    </>
  )
}
