import { IInfo, IInput, IOnboardingV1, IBook, IUser } from "./types";
import image1 from "../assets/onboarding_grad_proj_img1.png"
import image2 from "../assets/onboarding_grad_proj_img2.png"
import image3 from "../assets/onboarding_grad_proj_img3.png"
import blog_image_1 from "../assets/blog_grad_proj_book_img.jpeg"
import blog_image_2 from "../assets/blog_grad_proj_book_img_2.jpeg"


export const books: Array<IBook> = [
    {
        image_src: blog_image_1,
        book_name: "The Name of the Wina",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_2,
        book_name: "The Name of the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_1,
        book_name: "The Name of the Win",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_2,
        book_name: "The Name of the Wi",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_1,
        book_name: "The Ne of the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_2,
        book_name: "The Nam f the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_1,
        book_name: "TName of the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_2,
        book_name: "Name of the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_1,
        book_name: "The of the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_2,
        book_name: "The Name of Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_1,
        book_name: "The Name of thy Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_2,
        book_name: "The Name of 09he Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_1,
        book_name: "The Name orb the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
]

export const onboardingData: Array<IOnboardingV1> = [
    {
        image_src: image1,
        text:"Get tailored book suggestions based on your reading history and preferences."
    },
    {
        image_src: image2,
        text:"Access your library on your phone, tablet, or laptop—anytime you want!"
    },
    {
        image_src: image3,
        text:"Dive deeper into your favorite stories with exclusive author interviews and insights."
    }
]

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


export const users: Array<IUser> = [
    {
        email: "youssef10@gmail.com",
        password: "qwe",
    },
    {
        email: "youssef20@gmail.com",
        password: "rty",
    },
    {
        email: "youssef30@gmail.com",
        password: "uio",
    },
    {
        email: "youssef40@gmail.com",
        password: "pas",
    },
]


export const infos: Array<IInfo> = [
    {
        // id: 1,
        text: "Home Screen"
    },
    {
        // id: 2,
        text: "Profile"
    },
    {
        // id: 3,
        text: "Recommendation"
    },
]