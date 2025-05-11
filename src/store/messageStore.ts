import axios from "axios"
import { create } from "zustand"

type Message = {
    content: string;
    sentAt: string;
    senderId: string;
    receiverId: string;
}

type AdminUsers = {
    userId: string,
    userName: string,
    profilePicture: string,
    lastMessage: string,
    timeStamp: string,
}


interface IMessageState {
    messages: Message[];
    chatDetailsMessages: Message[];
    adminUsers: AdminUsers[];
    getUserChatWithAdmin: (userId: string) => Promise<void>;
    getChatDetails: (userId: string) => Promise<void>;
    getAllAdminChats: () => Promise<void>;
    sendMessageToAdmin: (userId: string, message: string) => Promise<void>;
    sendMessageToUser: (senderId: string, receiverId: string, message: string) => Promise<void>;
}

export const useMessageStore = create<IMessageState>((set) => (
    {
        messages: [],
        chatDetailsMessages: [],
        adminUsers: [],
        getChatDetails: async (userId: string) => {
            try {
                const response = await axios.get<Message[]>(`http://smartshelf.runasp.net/api/message/api/chat/254/${userId}`)
                set({ chatDetailsMessages: response.data })
            } catch (error) {
                console.log(error)
            }
        },
        getAllAdminChats: async () => {
            try {
                const response = await axios.get<AdminUsers[]>(`http://smartshelf.runasp.net/api/message/api/chat?userId=254`)
                set({ adminUsers: response.data })
            } catch (error) {
                console.log(error)
            }
        },
        getUserChatWithAdmin: async (userId: string) => {
            try {
                const response = await axios.get<Message[]>(`http://smartshelf.runasp.net/api/message/api/chat?userId=${userId}`)
                set({ messages: response.data })
            } catch (error) {
                console.log(error)
            }
        },
        sendMessageToAdmin: async (userId: string, message: string) => {
            try {
                await axios.post(`http://smartshelf.runasp.net/api/Message/send-message-to-admin`, {
                    "userId": userId,
                    "message": message
                })
                set((state) => {
                    return {
                        messages: [...state.messages, {
                            content: message,
                            sentAt: (new Date()).toString(),
                            senderId: userId,
                            receiverId: "254",
                        }]
                    }
                })
            } catch (error) {
                console.log(error)
            }
        },
        sendMessageToUser: async (senderId: string, receiverId: string, message: string) => {
            try {
                await axios.post(`http://smartshelf.runasp.net/api/Message/send-message-to-user`, {
                    "senderId": senderId,
                    "receiverId": receiverId,
                    "message": message
                })
                set((state) => {
                    return {
                        messages: [...state.messages, {
                            content: message,
                            sentAt: (new Date()).toString(),
                            senderId: senderId,
                            receiverId: receiverId,
                        }]
                    }
                })
            } catch (error) {
                console.log(error)
            }
        },
    }
))