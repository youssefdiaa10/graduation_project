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

    const { topBooks, randomBooks, booksByUserCategories, getTopBooks, getBookByID, getRandomBooks, getBooksByUserCategories } = useBookStore()
    const { user } = useUserStore()

    const { bookItemShow, bookId } = useBookShowStore()

    useEffect(() => {
        if (bookId) {
            getBookByID(bookId)
        }
        console.log(`Home: ${bookId}`)
    }, [bookId])

    useEffect(() => {
        getTopBooks()
        if (user?.id) {
            getBooksByUserCategories(user.id)
        }
        getRandomBooks()
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
                            key={book.name}
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
                            key={book.name}
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
                            key={book.name}
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



            {
                bookItemShow === false
                    ?
                    ""
                    :
                    bookId !== null
                        ?
                        <BookItem
                            bookId={bookId}
                        // bookId="394751221"
                        />
                        :
                        ""
                // ""
            }
        </>
    )
}

export default Blog
