import { create } from "zustand"
import { IUser } from "../utils/types";
import axios from "axios";


type UserStore = {
    user: IUser | null;
    message: string | null;
    isAuth: boolean;
    signup: (email:string, phone:string, username:string, password:string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => (
    {
        user: null,
        message: null,
        isAuth: false,
        login: async (email, password) => {
            const response = await axios.post("http://smartshelf.runasp.net/api/User/login", {
                "email": email,
                "Password": password
            })
            console.log(response)
            localStorage.setItem("isAuth", "true")
            set({ isAuth: true, user: response.data.user })
        },
        signup: async (email, phone, username, password) => {
            try {
                const response = await axios.post<IUser>("http://smartshelf.runasp.net/api/User/register",
                { 
                    "Email": email,
                    "Phone": phone,
                    "Username": username,
                    "Password": password 
                })
                // console.log(response.data)
                console.log()
                // console.log(response.status)
                console.log()
                // console.log(response.headers)
                console.log()
                console.log(response.config)
            } catch (error) {
                console.log(error)
            }
        },
    }
))