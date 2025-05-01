import { FaStar } from "react-icons/fa"
import { IBook } from "../utils/types"
import { useGenreShowStore } from "../store/genreShowStore"
import { useBookShowStore } from "../store/bookShowStore"

export const Book = ({
    fileURL,
    name,
    author,
    averageRating }: IBook) => {

    const { isShow, setIsShow } = useGenreShowStore()
    const { setBookItemShow } = useBookShowStore()

    let rating = String(averageRating)
    rating = rating.slice(0, 3)

    const handleAccordion = () => {
        if (isShow === true) {
            setIsShow()
        }
    }


    return (
        <>
            <div className="shrink-0 w-[200px] flex flex-col gap-5 justify-between bg-white my-2 p-4 shadow-xl cursor-pointer hover:scale-105 transition duration-300">
                <div onClick={() => {
                    handleAccordion()
                    setBookItemShow()
                }}>
                    <img src={fileURL} alt="book cover" className="rounded-2xl m-auto" />
                </div>
                <div className="text-center">
                    <h1 className="text-[16px] text-wrap">{name}</h1>
                    <h1 className="text-[13px] text-gray-600">{author}</h1>
                    <div className="flex gap-8 items-center justify-center mt-2">
                        <div className="flex gap-2 items-center">
                            <span className="text-[17px]">{rating}</span>
                            <FaStar className="text-yellow-300" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}