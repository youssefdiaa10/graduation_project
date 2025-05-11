import { FaStar } from 'react-icons/fa'
import { IBook } from '../utils/types'
import { IoHeartSharp } from 'react-icons/io5'
import { useFavoriteStore } from '../store/favoriteStore'
import { useUserStore } from '../store/authStore'

type Props = IBook & { type: "search" | "favorite" | "history" }

export const BookHorizontal = ({
    id,
    fileURL,
    name,
    author,
    averageRating,
    type, }: Props) => {

    const { toggleFavorite } = useFavoriteStore()
    const { user } = useUserStore()

    let rating = String(averageRating)
    rating = rating.slice(0, 3)

    return (
        <>
            <div className="py-4 bg-white rounded-2xl shadow-xl px-5 flex justify-between my-5">
                <div className="flex gap-3.5">
                    <img src={fileURL} className="rounded-2xl" alt="book cover" width={100} />
                    <div className="flex flex-col">
                        <h1 className="text-[20px] font-bold mt-2">{name}</h1>
                        <h1 className="text-gray-400 my-2">{author}</h1>
                        <div className="flex gap-2 items-center">
                            <span>{rating}</span>
                            <FaStar className="text-yellow-300" />
                        </div>
                    </div>
                </div>

                {
                    type !== "favorite"
                        ?
                        ""
                        :
                        <IoHeartSharp
                            onClick={() => {
                                if (user.id && id) {
                                    toggleFavorite(user.id, id)
                                }
                            }}
                            className="text-[60px] my-auto mr-10 text-red-500" />
                }
            </div>
        </>
    )
}
