import { IBook } from "../utils/types"

export const BookItem = ({
    image_src,
    book_name,
    author_name,
    rating } : IBook) => {
  return (
    <>
        <div className="bg-white p-4 shadow-xl w-fit">
            <img src={image_src} alt="book cover" width={150} height={150} className="rounded-2xl m-auto"/>
            <div className="text-center mt-5">
                <h1 className="text-[16px]">{book_name}</h1>
                <h1 className="text-[13px] text-gray-600">{author_name}</h1>
                <div className="flex gap-2 justify-center mt-2">
                    <span>{rating}</span>
                    ⭐
                </div>
            </div>
        </div>
    </>
  )
}
