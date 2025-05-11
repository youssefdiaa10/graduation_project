import { useEffect } from "react"
import { useMessageStore } from "../../store/messageStore"
import Icon from "../../components/Icon"
import { Link } from "react-router-dom"

const AdminAllChats = () => {
    const { adminUsers, getAllAdminChats } = useMessageStore()

    useEffect(() => {
        getAllAdminChats()
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
                    {adminUsers.map((user) => (
                        <div className="w-full mt-5">
                            <Link to={`/admin/chat/${user.userId}/${user.userName}`}>
                                <button className="bg-secondary hover:bg-main transition duration-300 rounded-2xl text-white w-full text-[26px] font-bold px-7 py-3">{user.userName}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminAllChats
