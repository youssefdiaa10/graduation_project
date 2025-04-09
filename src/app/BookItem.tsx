import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import image from "../assets/blog_grad_proj_book_img.jpeg"
import { books } from "../utils/constants";

const BookItem = () => {

    const { book_name } = useParams()

    // const book = books.findIndex()

    const isHeart = false
    // const isHeart = true

  return (
    <div>
      <div>

        <div className="bg-red-700 relative min-h-[400px] flex justify-center items-center">
            <Link to={"/home"} className="absolute top-5 left-5">
                <GoArrowLeft className="text-[40px] text-white"/>
            </Link>
            <div>
                <img src={image} alt="book cover" className="rounded-2xl" width={200}/>
            </div>
        </div>

        {/* <div className="bg-img-onboarding min-h-[400px] flex justify-center items-center"/> */}


        <div className="max-w-lg mx-auto mt-5">
            <div>
                <h1 className="text-[30px] font-bold text-center">The Alchemist</h1>
                <h1 className="text-[20px] text-gray-300 mt-1 text-center">Paulo Celo</h1>
            </div>

            <div className="my-5 flex justify-center gap-2">
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Novel</h1>
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Drama</h1>
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Quest</h1>
                <h1 className="bg-gray-300 py-1 px-5 text-[16px] rounded-2xl">Fiction</h1>
            </div>

            <div className="bg-blue-600 flex items-center my-8 justify-center gap-15 py-3 rounded-3xl">
                <button className="text-[30px] font-bold italic text-white">Read Now</button>
                <div className="flex gap-5 items-center">
                    <h1 className="text-white text-[35px]">|</h1>
                    {
                        isHeart ?
                        <FaHeart className="text-[32px] mt-2 text-white"/>
                        :
                        <CiHeart className="text-[37px] mt-2 text-white"/>
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
    </div>
  )
}

export default BookItem
