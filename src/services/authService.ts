import axios from "axios"
import { UserProfileToken } from "../utils/types"

const api = ""

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api, {
            username: username,
            password: password,
        })
        return data
    } catch (error) {
        // handleError(error)
        console.log(error)
    }
}


export const registerAPI = async (
    email: string,
    username: string,
    password: string
) => {
    try {
        const data = await axios.post<UserProfileToken>(api, {
            email: email,
            username: username,
            password: password,
        })
        return data
    } catch (error) {
        // handleError(error)
        console.log(error)
    }
}