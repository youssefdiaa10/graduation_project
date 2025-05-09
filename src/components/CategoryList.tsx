import { useCategory } from '../context/CategoryContext';
import { useFavoriteStore } from '../store/favoriteStore';
import { ICategory } from '../utils/types';
const CategoryList = ({
    id,
    name,
}: ICategory) => {

    const { addCategory, removeCategory, isCategory } = useCategory()
    const is_category: boolean = isCategory(name)
    const { categoryIds } = useFavoriteStore()

    return (
        <h1
            onClick={() => {

                if (categoryIds.length <= 3) {
                    categoryIds.push(id)
                }

                if (is_category === true) {
                    removeCategory(name)
                }
                else {
                    addCategory({ id, name })
                }
            }}
            className={`
        hover:bg-secondary hover:text-white transition duration-300 shadow-lg text-center py-3 px-5 rounded-2xl
        ${is_category === true
                    ?
                    "bg-main text-white"
                    :
                    "bg-white"
                }
    `}>
            {name}
        </h1>
    )
}

export default CategoryList