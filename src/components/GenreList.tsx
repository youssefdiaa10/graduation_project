import { GoArrowRight } from 'react-icons/go'
import { IGenreList } from '../utils/types'
import { Link } from 'react-router-dom'
import { useGenreShowStore } from '../store/genreShowStore'

const GenreList = ({
    text,
}: IGenreList) => {


            const { isShow, setIsShow } = useGenreShowStore()

            const handleAccordion = () => {
                if (isShow === true) {
                    setIsShow()
                }
            }


  return (
    <>
        <Link onClick={handleAccordion} to={`/home/genre/${text}`} className="font-bold my-1.5 text-black text-[20px] flex items-end gap-5 w-fit px-2 py-2 rounded-2xl hover:bg-main hover:text-white hover:translate-x-1.5 transition duration-200">{text} <GoArrowRight className="text-[24px]"/></Link>
    </>
  )
}

export default GenreList
