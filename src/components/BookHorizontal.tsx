import { FaStar } from 'react-icons/fa'
import { IBook } from '../utils/types'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useFavoriteBooks } from '../context/FavoriteContext'


type Props = IBook & { type: "search" | "favorite" | "history" }


export const BookHorizontal = ({
    image_src,
    book_name,
    author_name,
    category,
    discription,
    rating,
    type, } : Props) => {

    const { addBookToFavorite, removeBookFromFavorite, isFavorite } = useFavoriteBooks()
    const favorite = isFavorite(book_name)

    return (
    <>
        <div className="py-4 bg-white rounded-2xl shadow-xl px-5 flex justify-between my-5">
            <div className="flex gap-3.5">
                <Link to={`/home/${book_name}`}>
                    <img src={image_src} className="rounded-2xl" alt="book cover" width={100} />
                </Link>
                <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold mt-2 italic">{book_name}</h1>
                    <h1 className="italic text-gray-400 my-2">{author_name}</h1>
                        <div className="flex gap-2 items-center">
                            <span>{rating}</span>
                            <FaStar className="text-yellow-300"/>
                        </div>
                </div>
            </div>
            {
                type !== "favorite"
                ?
                ""
                :
                favorite ?
                <IoHeartSharp
                onClick={() => {
                    removeBookFromFavorite(book_name)
                }}
                className="text-[60px] my-auto mr-10 text-red-500"/>
                :
                <IoHeartOutline
                onClick={() => {
                    addBookToFavorite({ image_src, book_name, author_name, category, discription, rating })
                }}
                className="text-[60px] my-auto mr-10 text-gray-400"/>
            }
        </div>
    </>
  )
}
