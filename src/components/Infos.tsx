import { IoPersonSharp } from "react-icons/io5";
import { FaHome, FaRegLightbulb } from "react-icons/fa";
import image from "../assets/info_grad_proj_profile_img.jpg"

export const Infos = () => {
  return (
    <>
        <div className="">
            <div className="flex flex-col items-center mt-10">
                <div className="w-[75px] h-[75px] flex justify-center items-center rounded-full overflow-hidden">
                    <img src={image} alt="face"/>
                </div>
                <h1 className="text-center font-bold text-[17px] mt-3">Ahmed <br /> Mohamed</h1>
            </div>
            <div className="mt-10">
                <div className="transition duration-300 hover:text-white hover:bg-blue-500 bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5">
                    <FaHome className="text-[20px] ml-5"/>
                    <h1 className="font-bold">Home Screen</h1>
                </div>

                <div className="transition duration-300 hover:text-white hover:bg-blue-500 bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5">
                    <IoPersonSharp className="text-[20px] ml-5"/>
                    <h1 className="font-bold">Profile</h1>
                </div>

                <div className="transition duration-300 hover:text-white hover:bg-blue-500 bg-white rounded-2xl py-4 flex items-center my-5 gap-2 mx-5">
                    <FaRegLightbulb className="text-[20px] ml-5"/>
                    <h1 className="font-bold">Recommendation</h1>
                </div>
            </div>
        </div>
    </>
  )
}
