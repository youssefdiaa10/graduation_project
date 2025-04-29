import { useState } from "react"
import { IoMdSend } from "react-icons/io"

const AdminChat = () => {

    const [message, setMessage] = useState("")
    const [send, setSend] = useState(false)

  return (
    <>
        <div className="px-5 relative h-screen py-5 flex flex-col justify-between">
            <div className="flex bg-white rounded-2xl shadow-xl justify-center">
                <div className="flex items-center gap-3">
                    <h1 className="font-bold text-[40px] text-main-color">User 1</h1>
                    <div>🟢</div>
                </div>
            </div>



            <div className="h-[400px] my-3 py-3">
                {
                    send
                    ?
                <div className="bg-gray-300 ml-5 w-fit py-3 px-4 rounded-2xl text">
                    <h1 className="text-black text-[20px]">{message}</h1>
                </div>
                    :
                    ""
                }

                {
                    send
                    ?
                <div className="bg-main-color text-white mt-5 ml-auto mr-5 w-fit py-3 px-4 rounded-2xl text">
                    <h1 className=" text-[20px]">{message}</h1>
                </div>
                    :
                    ""
                }
            </div>



            <div className="flex rounded-2xl shadow-xl py-5 mt-auto p-3">
                <input onChange={(event) => setMessage(event.target.value)} type="text" placeholder="Message..." className="placeholder:px-3 placeholder:text-[20px] w-full outline-0" />
                <IoMdSend onClick={() => setSend((prev) => !prev)} className="text-[35px]"/>
            </div>
        </div>
    </>
  )
}

export default AdminChat
