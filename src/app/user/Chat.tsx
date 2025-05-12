import { useEffect, useState } from "react"
import { IoMdSend } from "react-icons/io"
import { useMessageStore } from "../../store/messageStore"
import { useUserStore } from "../../store/authStore"

const Chat = () => {

    const { messages, sendMessageToAdmin, getUserChatWithAdmin } = useMessageStore()
    const { user } = useUserStore()
    const [message, setMessage] = useState("")
    const [send, setSend] = useState<boolean>(false)

    useEffect(() => {
        getUserChatWithAdmin(user.id)
        setSend(false)
    }, [send])

    return (
        <>
            <div className="px-5 h-full py-5 flex flex-col justify-between">
                <div className="flex bg-white rounded-2xl shadow-xl justify-center">
                    <div className="flex items-center gap-3">
                        <h1 className="font-bold text-[40px] italic text-main-color">Bookly</h1>
                        <div>🟢</div>
                    </div>
                </div>


                <div className="flex flex-col h-[500px] my-3 py-3 scrollable-div overflow-y-scroll overflow-x-hidden">
                    {messages.map((msg) => (
                        <div className={`${msg.senderId !== user.id
                            ?
                            "bg-gray-300 ml-8 text-black self-start"
                            :
                            "bg-main mr-8 text-white self-end"
                            }
                        w-fit py-3 px-4 my-1.5 break-all max-w-[500px] rounded-2xl`}>
                            <h1 className="text-[20px]">{msg.content}</h1>
                        </div>
                    ))}
                </div>


                <div className="flex rounded-2xl shadow-xl py-5 mt-auto p-3">
                    <input
                        onChange={(event) => {
                            setMessage(event.target.value)
                        }}
                        type="text"
                        placeholder="Message"
                        value={message}
                        className="placeholder:px-4 placeholder:text-[20px] text-[24px] px-4 w-full outline-0"
                    />
                    <IoMdSend
                        onClick={() => {
                            if (message !== "") {
                                sendMessageToAdmin(user.id, message)
                                setMessage("")
                                setSend(true)
                            }
                        }}
                        className="text-[35px] cursor-pointer"
                    />
                </div>
            </div>
        </>
    )
}

export default Chat
