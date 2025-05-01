import { FaHome, FaHeart, FaHistory } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import image from "../assets/infos/info_grad_proj_profile_img.jpg"
import { NavLink } from "react-router-dom";
import { useGenreShowStore } from "../store/genreShowStore";

export const Infos = () => {

    const { isShow, setIsShow } = useGenreShowStore()

    const handleAccordion = () => {
        if (isShow === true) {
            setIsShow()
        }
    }

    return (
        <>
            <div>
                <div className="flex flex-col items-center mt-10">
                    <div className="w-[75px] h-[75px] flex justify-center items-center rounded-full overflow-hidden">
                        <img src={image} alt="face" />
                    </div>
                    <h1 className="text-center font-bold text-[17px] mt-3">Ahmed <br /> Mohamed</h1>
                </div>
                <div className="mt-10">
                    <NavLink onClick={handleAccordion} to={"/home/blog"} className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}>
                        <FaHome className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Home Screen</h1>
                    </NavLink>

                    <NavLink onClick={handleAccordion} to={"/home/reading"} className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}>
                        <FaHistory className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Reading History</h1>
                    </NavLink>

                    <NavLink onClick={handleAccordion} to={"/home/favorite"} className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}>
                        <FaHeart className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Favorite Books</h1>
                    </NavLink>

                    <NavLink onClick={handleAccordion} to={"/home/chat"} className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}>
                        <BsChatLeftText className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Chat With Us</h1>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
