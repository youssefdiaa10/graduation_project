import { FaHome, FaHeart, FaHistory, FaUserEdit } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useGenreShowStore } from "../store/genreShowStore";
import { useUserStore } from "../store/authStore";
import { useBookShowStore } from "../store/bookShowStore";
import image from "../assets/unknown profile picture.png"

export const Infos = () => {

    const { isShow, setIsShow } = useGenreShowStore()
    const { setBookItemShow } = useBookShowStore()
    const { user } = useUserStore()

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
                        <img
                            src={
                                user.profilePicture
                                    ?
                                    user.profilePicture
                                    :
                                    image
                            }
                            alt="face"
                        />
                    </div>
                    <h1 className="text-center font-bold text-[17px] mt-3">{user.username}</h1>
                </div>
                <div className="mt-10">

                    <NavLink
                        onClick={() => {
                            handleAccordion()
                            setBookItemShow(false)
                        }}
                        to={"/home/update_profile"}
                        className={`transition duration-300 hover:text-white hover:bg-main bg-white cursor-pointer rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}
                    >
                        <FaUserEdit className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Edit Profile</h1>
                    </NavLink>

                    <NavLink
                        onClick={() => {
                            handleAccordion()
                            setBookItemShow(false)
                        }}
                        to={"/home/blog"}
                        className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}
                    >
                        <FaHome className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Home Screen</h1>
                    </NavLink>

                    <NavLink
                        onClick={() => {
                            handleAccordion()
                            setBookItemShow(false)
                        }}
                        to={"/home/history"}
                        className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}
                    >
                        <FaHistory className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Reading History</h1>
                    </NavLink>

                    <NavLink
                        onClick={() => {
                            handleAccordion()
                            setBookItemShow(false)
                        }}
                        to={"/home/favorite"}
                        className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}
                    >
                        <FaHeart className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Favorite Books</h1>
                    </NavLink>

                    <NavLink
                        onClick={() => {
                            handleAccordion()
                            setBookItemShow(false)
                        }}
                        to={"/home/chat"}
                        className={`transition duration-300 hover:text-white hover:bg-main bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5`}
                    >
                        <BsChatLeftText className="text-[20px] ml-5 mr-2" />
                        <h1 className="font-bold">Chat With Us</h1>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
