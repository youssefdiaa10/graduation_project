import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useBookStore } from "../store/bookStore";
import { useBookShowStore } from "../store/bookShowStore";
import { useFavoriteStore } from "../store/favoriteStore";
import { useUserStore } from "../store/authStore";
import { useHistoryStore } from "../store/historyStore";
import { FaStar } from 'react-icons/fa'
import { useReviewStore } from "../store/reviewStore";

const BookItem = ({ bookId }: { bookId: string }) => {

    const [isHeart, setIsHeart] = useState<boolean>(false)
    const { bookByID, getBookByID, getMoreLikeThisBooks } = useBookStore()
    const { setBookItemShow } = useBookShowStore()
    const { addHistoryBook } = useHistoryStore()
    const { favoriteBooks, toggleFavorite, getFavoriteBooks } = useFavoriteStore()
    const { addReviewBook } = useReviewStore()
    const { user } = useUserStore()
    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)

    useEffect(() => {
        getBookByID(bookId, user.id)
        getFavoriteBooks(user.id)
    }, [bookId, user])

    const handleFavorite = (bookId: string) => {
        for (let i = 0; i < favoriteBooks.length; i++) {
            if (favoriteBooks[i].id === bookId) {
                setIsHeart(true)
                break
            }
        }
    }

    if (!bookByID) {
        return <></>
    }
    return (
        <>
            <div className="w-lg mx-auto bg-white mt-6 rounded-2xl pb-2 shadow-xl" onLoad={() => handleFavorite(bookByID.name)}>

                <div className="bg-main relative min-h-[400px] flex flex-col justify-center items-center">
                    <div className="w-full flex justify-end absolute top-3 items-center">
                        <div
                            className="mr-5 bg-white hover:bg-gray-200 transition duration-150 cursor-pointer text-main px-4 rounded-2xl font-bold text-[24px]"
                            onClick={() => setBookItemShow(false)}
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
                        {
                            [...Array(5)].map((_star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label key={`${i}`}>
                                        <input
                                            className='star'
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            onClick={() => {
                                                setRating(ratingValue)
                                                if (user.id) {
                                                    addReviewBook(user.id, bookId, rating)
                                                }
                                            }}
                                        />
                                        <FaStar
                                            className="text-[34px] cursor-pointer text-black"
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            size={35}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        />
                                    </label>
                                )
                            })
                        }
                    </div>

                    <div className="hover:bg-main bg-secondary flex items-center my-7 justify-center w-fit gap-10 mx-auto py-2 px-16 rounded-3xl">
                        <a
                            href="https://www.gutenberg.org/ebooks/75999.html.images"
                            className="text-[25px] px-3 font-bold cursor-pointer text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                addHistoryBook(user.id, bookId)
                                getMoreLikeThisBooks(user.id, bookId)
                            }}
                        >
                            Read Now
                        </a>
                        <div className="flex gap-5 items-center">
                            <h1 className="text-white text-[30px] font-light">|</h1>
                            {
                                isHeart || bookByID.isFavorite ?
                                    <IoHeartSharp
                                        onClick={() => {
                                            setIsHeart((prev) => !prev)
                                            if (user.id) {
                                                toggleFavorite(user.id, bookId)
                                            }
                                        }
                                        }
                                        className="text-[45px] mt-2 cursor-pointer text-red-500" />
                                    :
                                    <IoHeartOutline
                                        onClick={() => {
                                            setIsHeart((prev) => !prev)
                                            if (user.id) {
                                                toggleFavorite(user.id, bookId)
                                            }
                                        }
                                        }
                                        className="text-[45px] mt-2 cursor-pointer text-white" />
                            }
                        </div>
                    </div>

                    <div className="mt-3 mb-5 flex justify-center gap-5 mx-7">
                        <h1 className="bg-gray-200 text-center rounded-2xl text-[18px] py-4 px-5">{bookByID.description}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookItem
