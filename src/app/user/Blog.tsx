import { motion } from "framer-motion"
import { slideInFromRight, slideInFromTop } from "../../utils/motion"
import { Book } from "../../components/Book"
import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useBookStore } from "../../store/bookStore"
import { useUserStore } from "../../store/authStore"
import { useBookShowStore } from "../../store/bookShowStore"
import BookItem from "../../components/BookItem"

const Blog = () => {

    const { bookItemShow, bookId } = useBookShowStore()
    const { user } = useUserStore()
    const {
        topBooks,
        randomBooks,
        booksByUserCategories,
        getTopBooks,
        getBookByID,
        getRandomBooks,
        getBooksByUserCategories
    } = useBookStore()

    useEffect(() => {
        if (bookId && user?.id) {
            getBookByID(bookId, user.id)
        }
    }, [bookId])

    useEffect(() => {
        if (user?.id) {
            getTopBooks(user.id)
            getBooksByUserCategories(user.id)
            getRandomBooks(user.id)
        }
    }, [])

    return (
        <>
            {/* Popular Now */}
            <motion.div variants={slideInFromTop(.5)} className="ml-7 my-10 mr-5">
                <div className="flex justify-between items-baseline">
                    <motion.h1 variants={slideInFromRight(1)} className="text-[27px] my-3 mx-5 font-bold text-main">Popular Now</motion.h1>
                    <Link to={`/home/popular_now`}>
                        <motion.div variants={slideInFromRight(1)} className="mx-5 flex gap-2 items-center">
                            <h1 className="text-[17px] my-3 text-secondary">See All</h1>
                            <GoArrowRight className="text-main-color text-[22px]" />
                        </motion.div>
                    </Link>
                </div>
                <div className="bg-gray-100 rounded-4xl scrollable-div py-3 px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
                    {topBooks.map(book => (
                        <Book
                            key={book.id}
                            id={book.id}
                            name={book.name}
                            author={book.author}
                            description={book.description}
                            fileURL={book.fileURL}
                            categoryName={book.categoryName}
                            publishedYear={book.publishedYear}
                            averageRating={book.averageRating}
                            numPages={book.numPages}
                            linkBook={book.linkBook}
                        />
                    ))}
                </div>
            </motion.div>

            {/* You may like */}
            <motion.div variants={slideInFromTop(.5)} className="ml-7 my-10 mr-5">
                <div className="flex justify-between items-baseline">
                    <motion.h1 variants={slideInFromRight(1)} className="text-[27px] my-3 mx-5 font-bold text-main">You May like</motion.h1>
                    <Link to={`/home/you_may_like`}>
                        <motion.div variants={slideInFromRight(1)} className="mx-5 flex gap-2 items-center">
                            <h1 className="text-[17px] my-3 text-secondary">See All</h1>
                            <GoArrowRight className="text-main-color text-[22px]" />
                        </motion.div>
                    </Link>
                </div>
                <div className="bg-gray-100 rounded-4xl scrollable-div py-3 px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
                    {booksByUserCategories.map((book) => (
                        <Book
                            key={book.id}
                            id={book.id}
                            name={book.name}
                            author={book.author}
                            description={book.description}
                            fileURL={book.fileURL}
                            categoryName={book.categoryName}
                            publishedYear={book.publishedYear}
                            averageRating={book.averageRating}
                            numPages={book.numPages}
                            linkBook={book.linkBook}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Recommended */}
            <motion.div variants={slideInFromTop(.5)} className="ml-7 my-10 mr-5">
                <div className="flex justify-between items-baseline">
                    <motion.h1 variants={slideInFromRight(1)} className="text-[27px] my-3 mx-5 font-bold text-main">Recommended</motion.h1>
                    <Link to={`/home/recommendation`}>
                        <motion.div variants={slideInFromRight(1)} className="mx-5 flex gap-2 items-center">
                            <h1 className="text-[17px] my-3 text-secondary">See All</h1>
                            <GoArrowRight className="text-main-color text-[22px]" />
                        </motion.div>
                    </Link>
                </div>
                <div className="bg-gray-100 rounded-4xl scrollable-div py-3 px-5 inset-shadow-gray-950 flex flex-row flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll">
                    {randomBooks.map(book => (
                        <Book
                            key={book.id}
                            id={book.id}
                            name={book.name}
                            author={book.author}
                            description={book.description}
                            fileURL={book.fileURL}
                            categoryName={book.categoryName}
                            publishedYear={book.publishedYear}
                            averageRating={book.averageRating}
                            numPages={book.numPages}
                            linkBook={book.linkBook}
                        />
                    ))}

                    {/* {recommendedBooks.map(book => (
                        <Book
                            key={book.book_id}
                            id={book.book_id}
                            name={book.title}
                            author={book.author}
                            description={book.description}
                            fileURL={book.book_pic}
                            categoryName={book.categories}
                            publishedYear={book.published_year}
                            averageRating={book.average_rate}
                            numPages={book.num_pages}
                        // linkBook={book.}
                        />
                    ))} */}
                </div>
            </motion.div>

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
        </>
    )
}

export default Blog
