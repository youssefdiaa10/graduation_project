import * as Yup from "yup";

export const signupSchema = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email Required"),
    phone: Yup.string().matches(/^01[0-9]{9}$/).required("Phone Required"),
    username: Yup.string().min(5, "Name min length is 5").max(30, "Name min length is 30").required("Name Required"),
    password: Yup.string().matches(/^[a-zA-Z0-9][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,9}$/).required("Password Required"),
})

export const loginSchema = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email Required"),
    password: Yup.string().matches(/^[a-zA-Z0-9][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,9}$/).required("Password Required"),
})