import { useParams } from "react-router-dom"
import { Book } from "../../components/Book"
import { books } from "../../utils/constants"
import { useEffect } from "react"
import { useBookStore } from "../../store/bookStore"

const Genre = () => {

  const { genre_name } = useParams()


  const { booksByCategoryName, getBooksByCategoryName } = useBookStore()

  if(genre_name !== undefined) {
    useEffect(() => {
      getBooksByCategoryName(genre_name)
    }, [genre_name])
  }

  return (
    <>
        <div className="px-5 mb-4">
            <h1 className="font-bold text-main-color text-[30px]">{genre_name}</h1>
            <div className="mt-5 grid grid-cols-5 gap-3 bg-gray-100 inset-shadow-gray-950 py-3 px-5 rounded-2xl">
                  {books.map((book) => {
                    if (book.categoryName === genre_name) {
                      return (
                        <Book
                        key={book.name}
                        id= {book.id}                    
                        name= {book.name}
                        author= {book.author}
                        description= {book.description}
                        fileURL= {book.fileURL}
                        categoryName= {book.categoryName}
                        publishedYear= {book.publishedYear}
                        averageRating= {book.averageRating}
                        numPages= {book.numPages}
                        linkBook= {book.linkBook}
                        />
                      )
                    }
                    return
                  })}
            </div>
        </div>
    </>
  )
}

export default Genre
