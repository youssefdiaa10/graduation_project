// import { Link } from "react-router-dom"
// import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { Book } from "../components/Book"
import { books } from "../utils/constants"
// import { useState } from "react"

const Genre = () => {

  const { genre_name } = useParams()

  // const [genName, setGenName] = useState("")

  // if (genre_name !== undefined) {
  //   setGenName(genre_name)
  // }

  return (
    <>
        <div className="px-5 mb-4">
            <h1 className="font-bold text-main-color italic text-[26px]">{genre_name}</h1>
            <div className="mt-5 grid grid-cols-5 gap-3">



                {books.map((book) => (
                    <Book
                    key={book.book_name}
                    image_src={book.image_src}
                    book_name={book.book_name}
                    author_name={book.author_name}
                    rating={book.rating}
                    />

                //     <Link className="shrink-0" to={`/home/${book.book_name}`}>
                //     <div className="bg-white my-5 p-4 shadow-xl cursor-pointer hover:scale-105 transition duration-300">
                //         <img src={book.image_src} alt="book cover" width={150} height={150} className="rounded-2xl m-auto"/>
                //         <div className="text-center mt-5">
                //             <h1 className="text-[16px]">{book.book_name}</h1>
                //             <h1 className="text-[13px] text-gray-600">{book.author_name}</h1>
                //             <div className="flex gap-2 items-center justify-center mt-2">
                //                 <span>{book.rating}</span>
                //                 <FaStar className="text-yellow-300"/>
                //             </div>
                //         </div>
                //     </div>
                // </Link>
                ))}




                            {/* {books.filter((item) => {
                              return genre_name?.toLowerCase() === ''
                              ? item
                              : item.book_name.toLowerCase().includes(genre_name === undefined ? "" : genre_name)
                            }).map((book) => (
                                <Book
                                key={book.book_name}
                                image_src={book.image_src}
                                book_name={book.book_name}
                                author_name={book.author_name}
                                rating={book.rating}
                                />
                            ))} */}
            </div>
        </div>
    </>
  )
}

export default Genre
