import { IoIosArrowDown } from "react-icons/io"
import { IoEarth, IoSearch } from "react-icons/io5"

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg flex gap-2.5 py-10">
        <div className="ml-15 flex gap-5 items-center">
            <h1 className="font-medium">English</h1>
            {/* <span>🌐</span> */}
            <IoEarth className="text-[22px]"/>
        </div>
        <p className="text-gray-600 font-bold mx-5">|</p>
        <div>
            {/* <h1 className="font-medium">🔍</h1> */}
            <IoSearch  className="text-[22px]"/>
        </div>
        <p className="text-gray-600 font-bold mx-5">|</p>
        <div className="flex items-center gap-3">
            {/* <span>⬇️</span> */}
            <IoIosArrowDown className="text-[22px]"/>
            <h1 className="font-medium">Genre (All)</h1>
        </div>
    </div>
  )
}

export default Navbar
