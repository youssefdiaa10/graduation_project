import { create } from "zustand"
import { IRigesterResponse, IUser } from "../utils/types";
import axios from "axios";

type UserStore = {
    user: IUser | null;
    message: string;
    isAuth: boolean;
    emailConfirmationLink: string
    signup: (email:string, phone:string, username:string, password:string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => (
    {
        user: null,
        message: "",
        isAuth: false,
        emailConfirmationLink: "",
        login: async (email, password) => {
            const response = await axios.post("http://smartshelf.runasp.net/api/User/login", {
                "email": email,
                "Password": password
            })
            // console.log("Space")
            // console.log(response.data.user)
            // localStorage.setItem("isAuth", "true")
            set({ isAuth: true, user: response.data.user})
        },
        signup: async (email, phone, username, password) => {
            try {
                const response = await axios.post<IRigesterResponse>("http://smartshelf.runasp.net/api/User/register",
                { 
                    "Email": email,
                    "Phone": phone,
                    "Username": username,
                    "Password": password 
                })
                // console.log(response.data.emailConfirmationLink)
                // console.log(response.data.message)
            set({ message: response.data.message, emailConfirmationLink: response.data.emailConfirmationLink })
            } catch (error) {
                console.log(error)
            }
        },
    }
))