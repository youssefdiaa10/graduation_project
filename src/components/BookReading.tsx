import { FaStar } from 'react-icons/fa'
import { IBook } from '../utils/types'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { useReadingBooks } from '../context/ReadingContext'

const BookReading = ({
    image_src,
    book_name,
    author_name,
    rating } : IBook) => {

    const { removeBookFromReading } = useReadingBooks()

    return (
    <>
        <div className="py-4 bg-gray-200 rounded-2xl shadow-xl px-5 flex items-center justify-between my-5">
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
            <MdDelete onClick={() => removeBookFromReading(book_name)} className="text-red-500 mr-7 text-[50px]"/>
        </div>
    </>
  )
}

export default BookReading