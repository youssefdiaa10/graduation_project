import { FaStar } from "react-icons/fa"
import { IBook } from "../utils/types"
import { Link } from "react-router-dom"
import { useGenreShowStore } from "../store/genreShowStore"
import { useFavoriteBooks } from "../context/FavoriteContext"
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5"

export const Book = ({
    image_src,
    book_name,
    author_name,
    rating } : IBook) => {

        const { isShow, setIsShow } = useGenreShowStore()

        const { addBookToFavorite, removeBookFromFavorite, isFavorite } = useFavoriteBooks()
        const favorite = isFavorite(book_name)

        const handleAccordion = () => {
            if (isShow === true) {
                setIsShow()
            }
        }

  return (
    <>
        <div className="shrink-0 flex flex-col gap-5 justify-between bg-white my-2 p-4 shadow-xl cursor-pointer hover:scale-105 transition duration-300">
            <Link onClick={handleAccordion} to={`/home/${book_name}`} className="">
                <img src={image_src} alt="book cover" width={150} height={150} className=" rounded-2xl m-auto"/>
            </Link>
            <div className="text-center">
                <h1 className="text-[16px]">{book_name}</h1>
                <h1 className="text-[13px] text-gray-600">{author_name}</h1>
                <div className="flex gap-8 items-center justify-center mt-2">
                    <div className="flex gap-2 items-center">
                        <span>{rating}</span>
                        <FaStar className="text-yellow-300"/>
                    </div>
                    <div>
                        {
                            favorite ?
                            <IoHeartSharp
                            onClick={() => {
                                removeBookFromFavorite(book_name)
                            }}
                            className="text-[35px]  text-red-500"/>
                            :
                            <IoHeartOutline
                            onClick={() => {
                                addBookToFavorite({ image_src, book_name, author_name, rating })
                            }}
                            className="text-[35px] text-black"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}