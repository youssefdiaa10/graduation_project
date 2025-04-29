import { Link } from "react-router-dom"
import Icon from "../../components/Icon"

const AdminOnboarding = () => {
  return (
    <>
        <div className="flex flex-col items-center mt-14 w-md mx-auto">
            <div>
                <Icon
                text="Bookly Admin Center"
                text_className="text-[30px] font-bold ml-5 text-main-color"
                />
            </div>

            <div className="flex flex-col items-center mt-5 w-full">
                <div className="w-full">
                    <Link to={"/admin/select_category"}>
                        <button className="bg-secondary hover:bg-main transition duration-300 rounded-2xl text-white w-full text-[26px] font-bold my-6 px-7 py-3">Add</button>
                    </Link>
                </div>
                <div className="w-full">
                `   <Link to={"/admin/chat"}>
                        <button className="bg-secondary hover:bg-main transition duration-300 rounded-2xl text-white w-full text-[26px] font-bold my-6 px-7 py-3">Chat</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminOnboarding
