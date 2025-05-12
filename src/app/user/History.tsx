import { motion } from "framer-motion"
import { slideInFromRight, slideInFromTop } from "../../utils/motion"
import { BookHorizontal } from "../../components/BookHorizontal"
import { useHistoryStore } from "../../store/historyStore"
import { useEffect } from "react"
import { useUserStore } from "../../store/authStore"


const History = () => {

    const { historyBooks, getHistoryBooks } = useHistoryStore()
    const { user } = useUserStore()

    useEffect(() => {
        getHistoryBooks(user.id)
    }, [])

    if (!historyBooks.length) {
        return (
            <div className="mt-8">
                <h1 className="text-center text-main font-bold text-2xl">
                    No Books have been read for Now
                </h1>
            </div>
        )
    }


    return (
        <>
            <div className="px-5 mb-4">
                <motion.h1 variants={slideInFromTop(0.3)} className="font-bold text-main-color text-[30px]">Reading History</motion.h1>
                <motion.div variants={slideInFromRight(0.3)} className="mt-10 px-7 py-5 bg-gray-100 rounded-4xl inset-shadow-gray-950">
                    {historyBooks.map((book) => (
                        <BookHorizontal
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
                            type="history"
                        />
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default History
