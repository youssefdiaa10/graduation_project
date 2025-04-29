import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {

    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)

  return (
    <>
        {
            [...Array(5)].map((_star,i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                        className='star'
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                        className="text-[34px] text-black"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={35}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })
        }
    </>
  )
}

export default StarRating
