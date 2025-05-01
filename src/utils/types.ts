export interface IOnboardingV1 {
    image_src: string;
    text: string;
}


export interface IBook {
    id: string;
    name: string;
    author: string;
    description: string;
    fileURL: string;
    categoryName: string;
    publishedYear: number;
    averageRating: number;
    numPages: number;
    linkBook: string;
}


export interface IInfo {
    // id: number;
    text: string;
}


export interface IUser {
    id: string;
    email: string;
    phone: string;
    username: string;
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
    id: number;
    name: string;
}