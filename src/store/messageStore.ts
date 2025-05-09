import axios from "axios"
import { create } from "zustand"

type Message = {
    id: number;
    senderUserId: string;
    receiverAdminId: string;
    content: string;
    sentAt:string;
}

interface IMessageState {
    messages: Message[];
    getUserChatWithAdmin: (userId: string) => Promise<void>;
    sendMessageToAdmin: (userId: string, message: string) => Promise<void>
    sendMessageToUser: (senderId: string, receiverId: string, message: string) => Promise<void>
}

export const useMessageStore = create<IMessageState>((set) => (
    {
        messages: [],
        getUserChatWithAdmin: async (userId) => {
            try {
                const response = await axios.get<Message[]>(`http://smartshelf.runasp.net/api/Message/user-chat-with-admin/${userId}`)
                set({ messages: response.data })
            } catch (error) {
                console.log(error)
            }
        },
        sendMessageToAdmin: async (userId, message) => {
            try {
                const response = await axios.post(`http://smartshelf.runasp.net/api/Message/send-message-to-admin`, {
                        "userId": userId,
                        "message": message
                })
            } catch (error) {
                console.log(error)
            }
        },
        sendMessageToUser: async (senderId, receiverId, message) => {
            try {
                const response = await axios.post(`http://smartshelf.runasp.net/api/Message/send-message-to-user`, {
                    "senderId": senderId,
                    "receiverId": receiverId,
                    "message": message
                })
            } catch (error) {
                console.log(error)
            }
        },
    }
))