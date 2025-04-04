import { IInput } from "./types";

export const signup_inputs: Array<IInput> = [
    {
        div_class: "flex flex-col my-4",
        label_class: "text-[18px] font-bold italic",
        label_text: "Name",
        input_id: "my-name",
        input_type: "text",
        input_class: "border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]",
        placeholder: "Enter your Name"
    },
    {
        div_class: "flex flex-col my-4",
        label_class: "text-[18px] font-bold italic",
        label_text: "Email",
        input_id: "my-email",
        input_type: "email",
        input_class: "border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]",
        placeholder: "Enter your Email"
    },
    {
        div_class: "flex flex-col my-4",
        label_class: "text-[18px] font-bold italic",
        label_text: "Password",
        input_id: "my-password",
        input_type: "password",
        input_class: "border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]",
        placeholder: "Enter your Password"
    },
    {
        div_class: "flex flex-col my-4",
        label_class: "text-[18px] font-bold italic",
        label_text: "Confirm Password",
        input_id: "my-re-password",
        input_type: "password",
        input_class: "border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]",
        placeholder: "Re-enter the password"
    },
]


export const login_inputs: Array<IInput> = [
    {
        div_class: "flex flex-col my-4",
        label_class: "text-[18px] font-bold italic",
        label_text: "Email",
        input_id: "my-email",
        input_type: "email",
        input_class: "border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]",
        placeholder: "Enter your Email"
    },
    {
        div_class: "flex flex-col my-4",
        label_class: "text-[18px] font-bold italic",
        label_text: "Password",
        input_id: "my-password",
        input_type: "password",
        input_class: "border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]",
        placeholder: "Enter your Password"
    },
]