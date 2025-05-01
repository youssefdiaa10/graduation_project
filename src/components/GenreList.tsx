import { ICategory } from '../utils/types'
import { Link } from 'react-router-dom'
import { useGenreShowStore } from '../store/genreShowStore'

const GenreList = ({
    name,
}: ICategory) => {

    const { isShow, setIsShow } = useGenreShowStore()

    const handleAccordion = () => {
        if (isShow === true) {
            setIsShow()
        }
    }

    return (
        <>
            <Link onClick={handleAccordion} to={`/home/genre/${name}`} className="font-semibold my-1.5 text-black text-[15px] flex items-end gap-5 w-fit px-3 py-2 rounded-2xl hover:bg-main hover:text-white hover:translate-x-1.5 transition duration-200">
                {name}
            </Link>
        </>
    )
}

export default GenreList
