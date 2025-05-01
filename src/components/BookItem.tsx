import { GoArrowLeft } from "react-icons/go";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useFavoriteBooks } from "../context/FavoriteContext";
import { useBookStore } from "../store/bookStore";
import { useReadingBooks } from "../context/ReadingContext";
import StarRating from "./StarRating";
import { useBookShowStore } from "../store/bookShowStore";
import { useFavoriteStore } from "../store/favoriteStore";
import { useUserStore } from "../store/authStore";

const BookItem = ({ bookId }: { bookId: string }) => {

    const [isHeart, setIsHeart] = useState<boolean>(false)
    const { bookByID, getBookByID } = useBookStore()
    const { setBookItemShow } = useBookShowStore()
    const { addBookToReading } = useReadingBooks()
    const { toggleFavorite } = useFavoriteStore()
    const { user } = useUserStore()
    const { addBookToFavorite, removeBookFromFavorite, isFavorite } = useFavoriteBooks()

    useEffect(() => {
        if (bookId) {
            getBookByID(bookId)
        }
    }, [bookId])

    const handleFavorite = (book_name: string) => {
        const favorite = isFavorite(book_name)
        setIsHeart(favorite)
    }

    if (!bookByID) {
        return <></>
    }
    return (
        <>
            <div className="absolute z-1 top-0 left-0 right-0 h-full bg-black/20">
                <div className="w-lg mx-auto bg-white mt-6 rounded-2xl pb-2 shadow-xl" onLoad={() => handleFavorite(bookByID.name)}>
                    <div className="bg-main relative min-h-[400px] flex flex-col justify-center items-center">
                        <div className="w-full flex justify-between items-center">
                            <div>
                                <GoArrowLeft className="text-white/0" />
                            </div>
                            <div
                                className="mr-5 bg-white hover:bg-gray-200 transition duration-150 text-main px-4 rounded-2xl font-bold text-[24px]"
                                onClick={setBookItemShow}
                            >
                                X
                            </div>

                        </div>
                        <div>
                            <img src={bookByID.fileURL} alt="book cover" className="rounded-2xl" width={200} />
                        </div>
                    </div>

                    <div className="max-w-lg mx-auto mt-5">
                        <div className="my-5 flex justify-center gap-2">
                            <h1 className="bg-secondary text-white py-1 px-7 font-bold text-[16px] rounded-2xl">{bookByID.categoryName}</h1>
                        </div>


                        <div>
                            <h1 className="text-[30px] font-bold text-center">{bookByID.name}</h1>
                            <h1 className="text-[20px] text-gray-400 mt-1 text-center">{bookByID.author}</h1>
                        </div>


                        <div className="flex justify-center gap-3.5 my-7">
                            <StarRating key={bookByID.averageRating} />
                        </div>


                        <div className="hover:bg-main bg-secondary flex items-center my-7 justify-center w-fit gap-10 mx-auto py-2 px-16 rounded-3xl">
                            <button
                                onClick={() => {
                                    addBookToReading(bookByID)

                                    if (user?.id) {
                                        toggleFavorite(user?.id, bookId)
                                    }
                                }}
                                className="text-[25px] px-3 font-bold text-white">
                                Read Now
                            </button>
                            <div className="flex gap-5 items-center">
                                <h1 className="text-white text-[30px] font-light">|</h1>
                                {
                                    isHeart ?
                                        <IoHeartSharp
                                            onClick={() => {
                                                setIsHeart((prev) => !prev)
                                                removeBookFromFavorite(bookByID.name)
                                            }
                                            }
                                            className="text-[45px] mt-2 text-red-500" />
                                        :
                                        <IoHeartOutline
                                            onClick={() => {
                                                setIsHeart((prev) => !prev)
                                                addBookToFavorite(bookByID)
                                            }
                                            }
                                            className="text-[45px] mt-2 text-white" />
                                }
                            </div>
                        </div>

                        <div className="mt-3 mb-5 flex gap-5 mx-2">
                            <h1 className="bg-gray-200 text-center rounded-2xl text-[18px] py-4 px-5">{bookByID.description}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookItem
