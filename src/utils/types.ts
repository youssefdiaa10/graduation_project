import React from "react";
import { IconType } from "react-icons";

export interface IOnboardingV1 {
    image_src: string;
    text: string;
}

export interface IInput {
    div_class: string;
    label_class: string;
    label_text: string;
    input_id: string;
    input_type: string;
    input_class: string;
    placeholder: string;
}

export interface IBook {
    image_src: string;
    book_name: string;
    author_name: string;
    rating: string;
}

export interface IInfo {
    // icon: React.JSX.IntrinsicElements;
    text: string;
}