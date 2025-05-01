import { Book } from "../../components/Book"
import { useCategory } from "../../context/CategoryContext"
import { books } from "../../utils/constants"

const YouMayLike = () => {

    const { category } = useCategory()

    return (
        <>
            <div className="px-5 mb-4">
                <h1 className="font-bold text-main-color text-[30px]">You May Like</h1>
                <div className="mt-5 grid grid-cols-5 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
                    {category.map((category) => {
                        return books.map((book) => {
                            if (category.name === book.categoryName) {
                                return (
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
                                )
                            }
                        })
                    })}
                </div>
            </div>
        </>
    )
}

export default YouMayLike