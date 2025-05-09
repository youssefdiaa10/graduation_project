import { Link } from "react-router-dom"
import Icon from "../../components/Icon"
import { useCategoryStore } from "../../store/categoryStore"
import { useEffect } from "react"

const AdminSelectCategory = () => {

    const { allCategories, getAllCategories } = useCategoryStore()

    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <>
            <div className="flex flex-col items-center mt-14 w-md mx-auto">
                <div>
                    <Icon
                        text="Bookly Admin Center"
                        text_className="text-[30px] font-bold ml-5 text-main-color"
                    />
                </div>

                <div className="flex flex-col items-center gap-4 my-5 w-full">
                    {allCategories.map((book) => (
                        <div className="w-full mt-5">
                            <Link to={`/admin/select_category/${book.name}`}>
                                <button className="bg-secondary hover:bg-main transition duration-300 rounded-2xl text-white w-full text-[26px] font-bold px-7 py-3">{book.name}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminSelectCategory
