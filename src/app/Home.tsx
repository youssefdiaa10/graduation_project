import { Infos } from "../components/Infos"
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromTop } from "../utils/motion"
import { Outlet } from "react-router-dom"
import { GenreAccordion } from "../components/GenreAccordion"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="h-screen relative">
      <motion.div variants={slideInFromTop(1.5)}>
        <Navbar/>
      </motion.div>

      <div className="ml-5 absolute">
        <GenreAccordion/>
      </div>

      <div className="mt-10 grid grid-flow-col grid-cols-5 h-screen">
        <motion.div variants={slideInFromLeft(2)} className="shadow-xl mb-5 rounded-2xl col-span-1 grid grid-cols-subgrid bg-white">
          <Infos />
        </motion.div>

        <div className="col-span-4 grid-cols-subgrid">
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Home