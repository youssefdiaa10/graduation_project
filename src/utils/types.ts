export interface IOnboardingV1 {
    image_src: string;
    text: string;
}


export interface IBook {
    image_src: string;
    book_name: string;
    author_name: string;
    category: string;
    discription: string;
    rating: number;
}


export interface IInfo {
    // id: number;
    text: string;
}


export interface IUser {
    email: string;
    password: string;
}


export type UserProfileToken = {
    userName: string;
    email: string;
    token: string;
};


export type UserProfile = {
    userName: string;
    email: string;
};




export interface ICategory {
    categoryName: string;
}