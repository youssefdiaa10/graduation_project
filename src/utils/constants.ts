import { IInfo, IOnboardingV1, IBook, IUser, ICategory } from "./types";

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
        category: "History",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4,
    },
    {
        image_src: blog_image_2,
        book_name: "The Name of the Wind",
        author_name: "Brandon Sanderson",
        category: "History",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.4,
    },
    {
        image_src: blog_image_3,
        book_name: "The Name of the Win",
        author_name: "Brandon Sanderson",
        category: "French",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.8,
    },
    {
        image_src: blog_image_4,
        book_name: "The Name of the Wi",
        author_name: "Brandon Sanderson",
        category: "French",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 3.4,
    },
    {
        image_src: blog_image_1,
        book_name: "The Ne of the Wind",
        author_name: "Brandon Sanderson",
        category: "Arabic",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.9,
    },
    {
        image_src: blog_image_2,
        book_name: "The Nam f the Wind",
        author_name: "Brandon Sanderson",
        category: "Sci-Fi",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5,
    },
    {
        image_src: blog_image_3,
        book_name: "TName of the Wind",
        author_name: "Brandon Sanderson",
        category: "Geography",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.5,
    },
    {
        image_src: blog_image_4,
        book_name: "Name of the Wind",
        author_name: "Brandon Sanderson",
        category: "Science",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.4,
    },
    {
        image_src: blog_image_1,
        book_name: "The of the Wind",
        author_name: "Brandon Sanderson",
        category: "Programming",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.6,
    },
    {
        image_src: blog_image_2,
        book_name: "The Name of Wind",
        author_name: "Brandon Sanderson",
        category: "Engineering",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 2.7,
    },
    {
        image_src: blog_image_3,
        book_name: "The Name of thy Wind",
        author_name: "Brandon Sanderson",
        category: "English",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 1.2,
    },
    {
        image_src: blog_image_4,
        book_name: "The Name of 09he Wind",
        author_name: "Brandon Sanderson",
        category: "Novels",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4.8,
    },
    {
        image_src: blog_image_1,
        book_name: "The Name orb the Wind",
        author_name: "Brandon Sanderson",
        category: "Art",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 2.5,
    },
    {
        image_src: blog_image_2,
        book_name: "Harry Potter and the Sorcerer's Stone",
        author_name: "J.K. Rowling",
        category: "Juvenile Fiction",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_3,
        book_name: "Steve Jobs",
        author_name: "Walter Isaacson",
        category: "Biography & Autobiography",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_4,
        book_name: "How to Read Literature Like a Professor",
        author_name: "Thomas C. Foster",
        category: "Literary Criticism",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_3,
        book_name: "The Republic",
        author_name: "Plato",
        category: "Philosophy",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_1,
        book_name: "Watchmen",
        author_name: "Alan Moore",
        category: "Comics & Graphic Novels",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_4,
        book_name: "The Purpose Driven Life",
        author_name: "Rick Warren",
        category: "Religion",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_2,
        book_name: "Hamlet",
        author_name: "William Shakespeare",
        category: "Drama",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_3,
        book_name: "National Geographic Kids Almanac",
        author_name: "National Geographic Kids",
        category: "Juvenile Nonfiction",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_3,
        book_name: "The Sun and Her Flowers",
        author_name: "Rupi Kaur",
        category: "Poetry",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_2,
        book_name: "The Norton Anthology of English Literature",
        author_name: "Stephen Greenblatt",
        category: "Literary Collections",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_4,
        book_name: "Rich Dad Poor Dad",
        author_name: "Robert Kiyosaki",
        category: "Business & Economics",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_3,
        book_name: "Sapiens: A Brief History of Humankind",
        author_name: "Yuval Noah Harari",
        category: "Social Science",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_1,
        book_name: "The Complete Book of Acting",
        author_name: "Stella Adler",
        category: "Performing Arts",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_1,
        book_name: "Salt, Fat, Acid, Heat",
        author_name: "Samin Nosrat",
        category: "Cooking",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "The Power of Now",
        author_name: "Eckhart Tolle",
        category: "Body, Mind & Spirit",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_3,
        book_name: "Lonely Planet's Ultimate Travel List",
        author_name: "Lonely Planet",
        category: "Travel",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_1,
        book_name: "Clean Code",
        author_name: "Robert C. Martin",
        category: "Computers",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_4,
        book_name: "Thinking, Fast and Slow",
        author_name: "Daniel Kahneman",
        category: "Psychology",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "Atomic Habits",
        author_name: "James Clear",
        category: "Self-Help",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_3,
        book_name: "The Prince",
        author_name: "Niccolò Machiavelli",
        category: "Political Science",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_1,
        book_name: "The 5 Love Languages",
        author_name: "Gary Chapman",
        category: "Family & Relationships",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_3,
        book_name: "How Not to Die",
        author_name: "Michael Greger",
        category: "Health & Fitness",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_2,
        book_name: "Born a Crime",
        author_name: "Trevor Noah",
        category: "Humor",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_1,
        book_name: "Eats, Shoots & Leaves",
        author_name: "Lynne Truss",
        category: "Language Arts & Disciplines",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_3,
        book_name: "Goodnight Moon",
        author_name: "Margaret Wise Brown",
        category: "Children's stories",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "Educated",
        author_name: "Tara Westover",
        category: "Education",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_1,
        book_name: "The Emperor of All Maladies",
        author_name: "Siddhartha Mukherjee",
        category: "Medical",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_3,
        book_name: "The Hidden Life of Trees",
        author_name: "Peter Wohlleben",
        category: "Nature",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_2,
        book_name: "The Hobbit",
        author_name: "J.R.R. Tolkien",
        category: "Adventure stories",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_4,
        book_name: "The Art of Game Design",
        author_name: "Jesse Schell",
        category: "Games",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "The Story of Music",
        author_name: "Howard Goodall",
        category: "Music",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_1,
        book_name: "Pride and Prejudice",
        author_name: "Jane Austen",
        category: "English fiction",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "Moneyball",
        author_name: "Michael Lewis",
        category: "Sports & Recreation",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_1,
        book_name: "The Hound of the Baskervilles",
        author_name: "Arthur Conan Doyle",
        category: "Detective and mystery stories",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_4,
        book_name: "Mistborn: The Final Empire",
        author_name: "Brandon Sanderson",
        category: "Fantasy fiction",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_1,
        book_name: "The Great Gatsby",
        author_name: "F. Scott Fitzgerald",
        category: "American fiction",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "In Cold Blood",
        author_name: "Truman Capote",
        category: "True Crime",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_1,
        book_name: "Spanish for Dummies",
        author_name: "Susana Wald",
        category: "Foreign Language Study",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_3,
        book_name: "Oxford English Dictionary",
        author_name: "Oxford University Press",
        category: "Reference",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_1,
        book_name: "Humans of New York",
        author_name: "Brandon Stanton",
        category: "Photography",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 5
    },
    {
        image_src: blog_image_2,
        book_name: "The Nine",
        author_name: "Jeffrey Toobin",
        category: "Law",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
    {
        image_src: blog_image_4,
        book_name: "The Fountainhead",
        author_name: "Ayn Rand",
        category: "Architecture",
        discription: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
        rating: 4
    },
]


export const categories: Array<ICategory> = [
    {
        categoryName: "History",
    },
    {
        categoryName: "Sci-Fi",
    },
    {
        categoryName: "Science",
    },
    {
        categoryName: "Art",
    },
    {
        categoryName: "Juvenile Fiction",
    },
    {
        categoryName: "Biography & Autobiography",
    },
    {
        categoryName: "Literary Criticism",
    },
    {
        categoryName: "Philosophy",
    },
    {
        categoryName: "Comics & Graphic Novels",
    },
    {
        categoryName: "Religion",
    },
    {
        categoryName: "Drama",
    },
    {
        categoryName: "Juvenile Nonfiction",
    },
    {
        categoryName: "Poetry",
    },
    {
        categoryName: "Literary Collections",
    },
    {
        categoryName: "Business & Economics",
    },
    {
        categoryName: "Social Science",
    },
    {
        categoryName: "Performing Arts",
    },
    {
        categoryName: "Cooking",
    },
    {
        categoryName: "Body, Mind & Spirit",
    },
    {
        categoryName: "Travel",
    },
    {
        categoryName: "Computers",
    },
    {
        categoryName: "Psychology",
    },
    {
        categoryName: "Self-Help",
    },
    {
        categoryName: "Political Science",
    },
    {
        categoryName: "Family & Relationships",
    },
    {
        categoryName: "Health & Fitness",
    },
    {
        categoryName: "Humor",
    },
    {
        categoryName: "Language Arts & Disciplines",
    },
    {
        categoryName: "Children's stories",
    },
    {
        categoryName: "Education",
    },
    {
        categoryName: "Medical",
    },
    {
        categoryName: "Nature",
    },
    {
        categoryName: "Adventure stories",
    },
    {
        categoryName: "Games",
    },
    {
        categoryName: "Music",
    },
    {
        categoryName: "English fiction",
    },
    {
        categoryName: "Sports & Recreation",
    },
    {
        categoryName: "Detective and mystery stories",
    },
    {
        categoryName: "Fantasy fiction",
    },
    {
        categoryName: "American fiction",
    },
    {
        categoryName: "True Crime",
    },
    {
        categoryName: "Foreign Language Study",
    },
    {
        categoryName: "Reference",
    },
    {
        categoryName: "Photography",
    },
    {
        categoryName: "Law",
    },
    {
        categoryName: "Architecture",
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