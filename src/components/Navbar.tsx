import { IoIosArrowDown } from "react-icons/io"
import { IoEarth, IoSearch } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { useGenreShowStore } from "../store/genreShowStore"

const Navbar = () => {

  const { setIsShow } = useGenreShowStore()

  return (
    <div className="bg-white shadow-lg flex gap-2.5 py-10">
        <div className="ml-15 flex gap-5 items-center">
            <h1 className="font-medium">English</h1>
            <IoEarth className="text-[22px]"/>
        </div>
        <p className="text-gray-600 font-bold mx-5">|</p>
        <NavLink to={"/home/search"}>
            <IoSearch  className="text-[22px]"/>
        </NavLink>
        <p className="text-gray-600 font-bold mx-5">|</p>
        <div className="flex items-center gap-3">
            <IoIosArrowDown onClick={setIsShow} className="text-[22px]"/>
            <h1 className="font-medium">Genre</h1>
        </div>
    </div>
  )
}

export default Navbar
