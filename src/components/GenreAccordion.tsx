import { useGenreShowStore } from "../store/genreShowStore"
import { motion } from "framer-motion"
import { slideInFromTop } from "../utils/motion"
import { genres } from "../utils/constants"
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
        <ul className="bg-white shadow-2xl rounded-2xl cursor-pointer py-3 px-2 grid grid-cols-3 gap-2">
          {genres.map((item) => (
            <GenreList
            key={item.text}
            text={item.text}
            />
          ))}
        </ul>
      </motion.div>
    }
    </>
  )
}
