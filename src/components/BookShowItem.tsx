import { useBookShowStore } from "../store/bookShowStore"
import BookItem from "./BookItem"

const BookShowItem = () => {
    const { bookItemShow, bookId } = useBookShowStore()

    return (
        <div className={bookItemShow === false ? "" : "absolute z-1 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/20"}>
            {
                bookItemShow === false
                    ?
                    ""
                    :
                    bookId !== null
                        ?
                        <BookItem
                            bookId={bookId}
                        />
                        :
                        ""
            }
        </div>
    )
}

export default BookShowItem
