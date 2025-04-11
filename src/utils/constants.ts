import { IInfo, IOnboardingV1, IBook, IUser, IGenreList } from "./types";
import image1 from "../assets/onboarding/onboarding_grad_proj_img1.png"
import image2 from "../assets/onboarding/onboarding_grad_proj_img2.png"
import image3 from "../assets/onboarding/onboarding_grad_proj_img3.png"
import blog_image_1 from "../assets/blog/blog_grad_proj_book_img.jpeg"
import blog_image_2 from "../assets/blog/blog_grad_proj_book_img_2.jpeg"
import blog_image_3 from "../assets/blog/blog_grad_proj_book_img_3.jpeg"
import blog_image_4 from "../assets/blog/blog_grad_proj_book_img_4.jpeg"


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
        image_src: blog_image_3,
        book_name: "The Name of the Win",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_4,
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
        image_src: blog_image_3,
        book_name: "TName of the Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_4,
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
        image_src: blog_image_3,
        book_name: "The Name of thy Wind",
        author_name: "Brandon Sanderson",
        rating: "4.4",
    },
    {
        image_src: blog_image_4,
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


export const genres: Array<IGenreList> = [
    {
        text: "Fantasy",
    },
    {
        text: "English",
    },
    {
        text: "Sci-Fi",
    },
    {
        text: "Arabic",
    },
    {
        text: "History",
    },
    {
        text: "Music",
    },
    {
        text: "Dummies",
    },
    {
        text: "Cars",
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