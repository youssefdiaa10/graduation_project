import { create } from "zustand"
import { IUpdateProfile, IUser } from "../utils/types";
import axios from "axios";
import { persist } from 'zustand/middleware'

type IRigesterResponse = {
    message: string;
    userId: string;
    emailConfirmationLink: string;
};

type UserStore = {
    user: IUser | null;
    isAuth: boolean;
    message: string;
    emailConfirmationLink: string;
    signup: (email: string, phone: string, username: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    updateProfile: (userId: string, newName: string, newProfilePicture: string) => Promise<void>;
};

export const useUserStore = create<UserStore>()(
    persist(
        (set, _get) => {
            return {
                user: null,
                isAuth: false,
                message: "",
                emailConfirmationLink: "",
                login: async (email: string, password: string) => {
                    const response = await axios.post("http://smartshelf.runasp.net/api/User/login", {
                        "email": email,
                        "Password": password
                    })
                    set({ isAuth: true, user: response.data.user })
                },
                signup: async (email: string, phone: string, username: string, password: string) => {
                    try {
                        const response = await axios.post<IRigesterResponse>("http://smartshelf.runasp.net/api/User/register",
                            {
                                "Email": email,
                                "Phone": phone,
                                "Username": username,
                                "Password": password
                            })
                        set({ message: response.data.message, emailConfirmationLink: response.data.emailConfirmationLink })
                    } catch (error) {
                        console.log(error)
                    }
                },
                updateProfile: async (userId: string, newName: string, newProfilePicture: string) => {
                    try {
                        const formData = new FormData()
                        formData.append("NewName", newName)
                        formData.append("NewProfilePicture", newProfilePicture)
                        const response = await axios.post<IUpdateProfile>(`http://smartshelf.runasp.net/api/User/update-profile/${userId}`,
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            }
                        )
                        set((state) => {
                            return {
                                user: {
                                    ...state.user,
                                    username: response.data.name,
                                    profilePicture: response.data.profilePic
                                }
                            }
                        })

                    } catch (error) {
                        console.log(error)
                    }
                },
            }
        },
        {
            name: "auth-store"
        }
    )
)