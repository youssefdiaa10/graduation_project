import { Link } from "react-router-dom"
import CategoryList from "../../components/CategoryList"
import { useCategoryStore } from "../../store/categoryStore"
import { useEffect } from "react"
import { useFavoriteStore } from "../../store/favoriteStore"
import { useUserStore } from "../../store/authStore"

const Category = () => {

    const { allCategories, getAllCategories } = useCategoryStore()
    const { categoryIds, setFavoriteCategories } = useFavoriteStore()
    const { user } = useUserStore()

    useEffect(() => {
        getAllCategories()
    }, [])

    function handleSelectCategories(userId: string, ids: number[]) {
        setFavoriteCategories(userId, ids)
    }

    return (
        <div className="max-w-[700px] my-10 mx-auto mt-20">
            <h1 className="text-main text-[30px] w-lg font-bold">Select the genres for which you want to receive recommendations</h1>
            <p className="my-5 text-black text-[17px]">Maximum 3 Categories</p>
            <div className="bg-gray-100 flex flex-wrap justify-center gap-3 my-5 p-5 rounded-2xl">
                {allCategories.map(category => (
                    <CategoryList
                        key={category.name}
                        id={category.id}
                        name={category.name}
                    />
                ))}
            </div>
            <Link to={"/home/blog"}>
                <button
                    className="hover:bg-main bg-secondary transition duration-300 w-full text-white py-2 text-[20px] rounded-2xl"
                    onClick={() => {
                        if (user.id) {
                            handleSelectCategories(user.id, categoryIds)
                        }
                    }}
                >
                    Next
                </button>
            </Link>
        </div>
    )
}

export default Category