import { IInfo, IOnboardingV1,  } from "./types";

// IBook, IUser, ICategory

import image1 from "../assets/onboarding/onboarding_grad_proj_img1.png"
import image2 from "../assets/onboarding/onboarding_grad_proj_img2.png"
import image3 from "../assets/onboarding/onboarding_grad_proj_img3.png"

// import blog_image_1 from "../assets/blog/blog_grad_proj_book_img.jpeg"
// import blog_image_2 from "../assets/blog/blog_grad_proj_book_img_2.jpeg"
// import blog_image_3 from "../assets/blog/blog_grad_proj_book_img_3.jpeg"
// import blog_image_4 from "../assets/blog/blog_grad_proj_book_img_4.jpeg"


// export const books: Array<IBook> = [
//     {
//         image_src: blog_image_1,
//         book_name: "The Name of the Wina",
//         author_name: "Brandon Sanderson",
//         category: "History",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4,
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Name of the Wind",
//         author_name: "Brandon Sanderson",
//         category: "History",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.4,
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "The Name of the Win",
//         author_name: "Brandon Sanderson",
//         category: "French",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.8,
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "The Name of the Wi",
//         author_name: "Brandon Sanderson",
//         category: "French",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 3.4,
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The Ne of the Wind",
//         author_name: "Brandon Sanderson",
//         category: "Arabic",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.9,
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Nam f the Wind",
//         author_name: "Brandon Sanderson",
//         category: "Sci-Fi",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5,
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "TName of the Wind",
//         author_name: "Brandon Sanderson",
//         category: "Geography",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.5,
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "Name of the Wind",
//         author_name: "Brandon Sanderson",
//         category: "Science",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.4,
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The of the Wind",
//         author_name: "Brandon Sanderson",
//         category: "Programming",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.6,
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Name of Wind",
//         author_name: "Brandon Sanderson",
//         category: "Engineering",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 2.7,
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "The Name of thy Wind",
//         author_name: "Brandon Sanderson",
//         category: "English",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 1.2,
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "The Name of 09he Wind",
//         author_name: "Brandon Sanderson",
//         category: "Novels",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4.8,
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The Name orb the Wind",
//         author_name: "Brandon Sanderson",
//         category: "Art",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 2.5,
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "Harry Potter and the Sorcerer's Stone",
//         author_name: "J.K. Rowling",
//         category: "Juvenile Fiction",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "Steve Jobs",
//         author_name: "Walter Isaacson",
//         category: "Biography & Autobiography",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "How to Read Literature Like a Professor",
//         author_name: "Thomas C. Foster",
//         category: "Literary Criticism",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "The Republic",
//         author_name: "Plato",
//         category: "Philosophy",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Watchmen",
//         author_name: "Alan Moore",
//         category: "Comics & Graphic Novels",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "The Purpose Driven Life",
//         author_name: "Rick Warren",
//         category: "Religion",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "Hamlet",
//         author_name: "William Shakespeare",
//         category: "Drama",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "National Geographic Kids Almanac",
//         author_name: "National Geographic Kids",
//         category: "Juvenile Nonfiction",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "The Sun and Her Flowers",
//         author_name: "Rupi Kaur",
//         category: "Poetry",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Norton Anthology of English Literature",
//         author_name: "Stephen Greenblatt",
//         category: "Literary Collections",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "Rich Dad Poor Dad",
//         author_name: "Robert Kiyosaki",
//         category: "Business & Economics",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "Sapiens: A Brief History of Humankind",
//         author_name: "Yuval Noah Harari",
//         category: "Social Science",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The Complete Book of Acting",
//         author_name: "Stella Adler",
//         category: "Performing Arts",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Salt, Fat, Acid, Heat",
//         author_name: "Samin Nosrat",
//         category: "Cooking",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Power of Now",
//         author_name: "Eckhart Tolle",
//         category: "Body, Mind & Spirit",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "Lonely Planet's Ultimate Travel List",
//         author_name: "Lonely Planet",
//         category: "Travel",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Clean Code",
//         author_name: "Robert C. Martin",
//         category: "Computers",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "Thinking, Fast and Slow",
//         author_name: "Daniel Kahneman",
//         category: "Psychology",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "Atomic Habits",
//         author_name: "James Clear",
//         category: "Self-Help",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "The Prince",
//         author_name: "Niccolò Machiavelli",
//         category: "Political Science",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The 5 Love Languages",
//         author_name: "Gary Chapman",
//         category: "Family & Relationships",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "How Not to Die",
//         author_name: "Michael Greger",
//         category: "Health & Fitness",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "Born a Crime",
//         author_name: "Trevor Noah",
//         category: "Humor",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Eats, Shoots & Leaves",
//         author_name: "Lynne Truss",
//         category: "Language Arts & Disciplines",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "Goodnight Moon",
//         author_name: "Margaret Wise Brown",
//         category: "Children's stories",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "Educated",
//         author_name: "Tara Westover",
//         category: "Education",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The Emperor of All Maladies",
//         author_name: "Siddhartha Mukherjee",
//         category: "Medical",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "The Hidden Life of Trees",
//         author_name: "Peter Wohlleben",
//         category: "Nature",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Hobbit",
//         author_name: "J.R.R. Tolkien",
//         category: "Adventure stories",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "The Art of Game Design",
//         author_name: "Jesse Schell",
//         category: "Games",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Story of Music",
//         author_name: "Howard Goodall",
//         category: "Music",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Pride and Prejudice",
//         author_name: "Jane Austen",
//         category: "English fiction",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "Moneyball",
//         author_name: "Michael Lewis",
//         category: "Sports & Recreation",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The Hound of the Baskervilles",
//         author_name: "Arthur Conan Doyle",
//         category: "Detective and mystery stories",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "Mistborn: The Final Empire",
//         author_name: "Brandon Sanderson",
//         category: "Fantasy fiction",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "The Great Gatsby",
//         author_name: "F. Scott Fitzgerald",
//         category: "American fiction",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "In Cold Blood",
//         author_name: "Truman Capote",
//         category: "True Crime",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Spanish for Dummies",
//         author_name: "Susana Wald",
//         category: "Foreign Language Study",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_3,
//         book_name: "Oxford English Dictionary",
//         author_name: "Oxford University Press",
//         category: "Reference",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_1,
//         book_name: "Humans of New York",
//         author_name: "Brandon Stanton",
//         category: "Photography",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 5
//     },
//     {
//         image_src: blog_image_2,
//         book_name: "The Nine",
//         author_name: "Jeffrey Toobin",
//         category: "Law",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
//     {
//         image_src: blog_image_4,
//         book_name: "The Fountainhead",
//         author_name: "Ayn Rand",
//         category: "Architecture",
//         description: "A timeless tale of adventure and self-discovery, The Alchemist follows Santiago, a young shepherd who dreams of discovering a hidden treasure near the Egyptian pyramids. Encouraged by a mysterious king, he sets out on a journey that leads him through deserts, bustling markets, and encounters with wise mentors—including an enigmatic alchemist. Along the way, he learns valuable lessons about destiny, perseverance, and the true meaning of wealth. A story of courage, faith, and transformation, this novel continues to inspire readers to follow their dreams and listen to their hearts.",
//         rating: 4
//     },
// ]


// export const categories: Array<ICategory> = [
//     {
//         id:0,
//         name: "History",
//     },
//     {
//         id:0,
//         name: "Sci-Fi",
//     },
//     {
//         id:0,
//         name: "Science",
//     },
//     {
//         id:0,
//         name: "Art",
//     },
//     {
//         id:0,
//         name: "Juvenile Fiction",
//     },
//     {
//         id:0,
//         name: "Biography & Autobiography",
//     },
//     {
//         id:0,
//         name: "Literary Criticism",
//     },
//     {
//         id:0,
//         name: "Philosophy",
//     },
//     {
//         id:0,
//         name: "Comics & Graphic Novels",
//     },
//     {
//         id:0,
//         name: "Religion",
//     },
//     {
//         id:0,
//         name: "Drama",
//     },
//     {
//         id:0,
//         name: "Juvenile Nonfiction",
//     },
//     {
//         id:0,
//         name: "Poetry",
//     },
//     {
//         id:0,
//         name: "Literary Collections",
//     },
//     {
//         id:0,
//         name: "Business & Economics",
//     },
//     {
//         id:0,
//         name: "Social Science",
//     },
//     {
//         id:0,
//         name: "Performing Arts",
//     },
//     {
//         id:0,
//         name: "Cooking",
//     },
//     {
//         id:0,
//         name: "Body, Mind & Spirit",
//     },
//     {
//         id:0,
//         name: "Travel",
//     },
//     {
//         id:0,
//         name: "Computers",
//     },
//     {
//         id:0,
//         name: "Psychology",
//     },
//     {
//         id:0,
//         name: "Self-Help",
//     },
//     {
//         id:0,
//         name: "Political Science",
//     },
//     {
//         id:0,
//         name: "Family & Relationships",
//     },
//     {
//         id:0,
//         name: "Health & Fitness",
//     },
//     {
//         id:0,
//         name: "Humor",
//     },
//     {
//         id:0,
//         name: "Language Arts & Disciplines",
//     },
//     {
//         id:0,
//         name: "Children's stories",
//     },
//     {
//         id:0,
//         name: "Education",
//     },
//     {
//         id:0,
//         name: "Medical",
//     },
//     {
//         id:0,
//         name: "Nature",
//     },
//     {
//         id:0,
//         name: "Adventure stories",
//     },
//     {
//         id:0,
//         name: "Games",
//     },
//     {
//         id:0,
//         name: "Music",
//     },
//     {
//         id:0,
//         name: "English fiction",
//     },
//     {
//         id:0,
//         name: "Sports & Recreation",
//     },
//     {
//         id:0,
//         name: "Detective and mystery stories",
//     },
//     {
//         id:0,
//         name: "Fantasy fiction",
//     },
//     {
//         id:0,
//         name: "American fiction",
//     },
//     {
//         id:0,
//         name: "True Crime",
//     },
//     {
//         id:0,
//         name: "Foreign Language Study",
//     },
//     {
//         id:0,
//         name: "Reference",
//     },
//     {
//         id:0,
//         name: "Photography",
//     },
//     {
//         id:0,
//         name: "Law",
//     },
//     {
//         id:0,
//         name: "Architecture",
//     },
// ]


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


// export const users: Array<IUser> = [
//     {
//         email: "youssef10@gmail.com",
//         password: "qwe",
//     },
//     {
//         email: "youssef20@gmail.com",
//         password: "rty",
//     },
//     {
//         email: "youssef30@gmail.com",
//         password: "uio",
//     },
//     {
//         email: "youssef40@gmail.com",
//         password: "pas",
//     },
// ]


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