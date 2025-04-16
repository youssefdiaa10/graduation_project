import { Link, useParams } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import { books } from "../utils/constants";
import { IBook } from "../utils/types";
import { useFavoriteBooks } from "../context/FavoriteContext";
import { useReadingBooks } from "../context/ReadingContext";

const BookItem = () => {

    const { book_name } = useParams()
    const [isHeart, setIsHeart] = useState<boolean>(false)

    const { addBookToFavorite, removeBookFromFavorite, isFavorite } = useFavoriteBooks()

    const { addBookToReading } = useReadingBooks()

    const imgRef = useRef<HTMLImageElement | null>(null);
    const [color, setColor] = useState<number[] | null>(null);

    const book: IBook | undefined = books.find((book) => {
        if (book_name === book.book_name) {
            return book
        }
    })

    const handleFavorite = (book_name: string) => {
        const favorite = isFavorite(book_name)
        setIsHeart(favorite)
    }


    const extractColor = () => {
        const img = imgRef.current;
        if (!img) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get image data (all pixels)
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        let r = 0, g = 0, b = 0, count = 0;

        // Loop over every pixel (4 values per pixel: R, G, B, A)
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];     // Red
            g += data[i + 1]; // Green
            b += data[i + 2]; // Blue
            count++;
        }

        // Average the RGB values
        setColor([
            Math.round(r / count),
            Math.round(g / count),
            Math.round(b / count),
        ]);
    };

  return (
    <>
    {
        book &&
    <div onLoad={() => handleFavorite(book.book_name)}>
        <div style={{backgroundColor: `${color === null ? "#000000" : `rgb(${color[0]},${color[1]},${color[2]})`}`}} className="relative min-h-[400px] flex justify-center items-center">
            <Link to={"/home/blog"} className="absolute top-5 left-5">
                <GoArrowLeft style={{color: `${color === null ? "#ffffff" : `rgb(${color[0]},${color[0]},${color[0]})`}`}} className="text-[40px]"/>
            </Link>
            <div>
                <img ref={imgRef} onLoad={extractColor} crossOrigin="anonymous" src={book.image_src} alt="book cover" className="rounded-2xl" width={200}/>
            </div>
        </div>

        {/* <div className="bg-img-onboarding min-h-[400px] flex justify-center items-center"/> */}


        <div className="max-w-lg mx-auto mt-5">
            <div>
                <h1 className="text-[30px] font-bold text-center">{book.book_name}</h1>
                <h1 className="text-[20px] text-gray-300 mt-1 text-center">{book.author_name}</h1>
            </div>

            <div className="my-5 flex justify-center gap-2">
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Novel</h1>
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Drama</h1>
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Quest</h1>
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Fiction</h1>
            </div>

            <div className="bg-blue-600 flex items-center my-10 justify-center gap-20 w-full mx-auto py-5 rounded-3xl">
                <button onClick={() => addBookToReading(book)} className="text-[40px] py-2 px-3 font-bold italic text-white">Read Now</button>
                <div className="flex gap-5 items-center">
                    <h1 className="text-white text-[45px] font-light">|</h1>
                    {
                        isHeart ?
                        <IoHeartSharp
                        onClick={() => {
                            setIsHeart((prev) => !prev)
                            removeBookFromFavorite(book.book_name)
                        }
                        }
                        className="text-[60px] mt-2 text-red-500"/>
                        :
                        <IoHeartOutline
                        onClick={() => {
                            setIsHeart((prev) => !prev)
                            addBookToFavorite(book)
                        }
                        }
                        className="text-[60px] mt-2 text-white"/>
                    }
                </div>
            </div>

            <div className="bg-gray-300 rounded-2xl py-4 px-5 mt-3 mb-5">
                <h1>
                    A timeless tale of adventure and self-discovery,
                    The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids.
                    Encouraged by a mysterious king, he sets out on a journey that leads him through deserts,
                    bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way,
                    he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage,
                    faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.
                </h1>
            </div>
        </div>

    </div>
    }
    </>
  )
}

export default BookItem
