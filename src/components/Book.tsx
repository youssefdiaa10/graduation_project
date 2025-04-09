import { FaStar } from "react-icons/fa"
import { IBook } from "../utils/types"

export const Book = ({
    image_src,
    book_name,
    author_name,
    rating } : IBook) => {
  return (
    <>
        <div className="bg-white my-5 p-4 shadow-xl cursor-pointer hover:scale-105 transition duration-300">
            <img src={image_src} alt="book cover" width={150} height={150} className="rounded-2xl m-auto"/>
            <div className="text-center mt-5">
                <h1 className="text-[16px]">{book_name}</h1>
                <h1 className="text-[13px] text-gray-600">{author_name}</h1>
                <div className="flex gap-2 items-center justify-center mt-2">
                    <span>{rating}</span>
                    <FaStar className="text-yellow-300"/>
                </div>
            </div>
        </div>
    </>
  )
}