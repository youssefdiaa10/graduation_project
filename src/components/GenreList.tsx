// import { GoArrowRight } from 'react-icons/go'
import { ICategory } from '../utils/types'
import { Link } from 'react-router-dom'
import { useGenreShowStore } from '../store/genreShowStore'

const GenreList = ({
    categoryName,
}: ICategory) => {


            const { isShow, setIsShow } = useGenreShowStore()

            const handleAccordion = () => {
                if (isShow === true) {
                    setIsShow()
                }
            }


  return (
    <>
        <Link onClick={handleAccordion} to={`/home/genre/${categoryName}`} className="font-semibold my-1.5 text-black text-[15px] flex items-end gap-5 w-fit px-3 py-2 rounded-2xl hover:bg-main hover:text-white hover:translate-x-1.5 transition duration-200">
            {categoryName}
            {/* <GoArrowRight className="text-[14px]"/> */}
        </Link>
    </>
  )
}

export default GenreList
