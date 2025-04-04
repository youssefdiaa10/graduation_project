import image from "../assets/blog_grad_proj_book_img.jpeg"
import { FaHome } from "react-icons/fa";

export const Infos = () => {
  return (
    <>
        <div className="bg-amber-200">
            <div className="bg-pink-600 flex flex-col items-center mt-5">
                <div className="w-fit h-fit rounded-full">
                    <img src={image} alt="face" width={75} height={75} className="rounded-full"/>
                </div>
                <h1 className="text-center font-bold text-[17px]">Ahmed <br /> Mohamed</h1>
            </div>
            <div className="bg-blue-500">
                <div className="bg-green-500 rounded-2xl py-4 flex items-center my-2 gap-2 mx-5">
                    <FaHome className="text-[20px] ml-5"/>
                    <h1 className="font-bold">Home Screen</h1>
                </div>
            </div>
        </div>
    </>
  )
}
