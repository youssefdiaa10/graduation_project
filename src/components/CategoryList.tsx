import { useCategory } from '../context/CategoryContext';
import { ICategory } from '../utils/types';
const CategoryList = ({
    id,
    name,
}: ICategory) => {

    const { addCategory, removeCategory, isCategory } = useCategory()
    const is_category: boolean = isCategory(name)

  return (
    <h1
    onClick={() => {
        if (is_category === true) {
            removeCategory(name)
        }
        else{
            addCategory({ id, name })
        }
    }}
    className={`
        hover:bg-secondary hover:text-white transition duration-300 shadow-lg text-center py-3 px-5 rounded-2xl
        ${
        is_category === true
        ?
        "bg-main text-white"
        :
        "bg-white"
        }
    `}>
        {/* <h1 className='text-[16px] text-black'>{categoryName}</h1> */}
        {name}
    </h1>
  )
}

export default CategoryList