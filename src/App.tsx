import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { motion } from "framer-motion"
import { FavoriteBooksProvider } from './context/FavoriteContext'
import { ReadingBooksProvider } from './context/ReadingContext'
import { CategoryProvider } from './context/CategoryContext'
import "./App.css"
import Login from './app/user/Login'
import Signup from './app/user/Signup'
import Home from './app/user/Home'
import Onboarding from './app/user/Onboarding'
import ProtectedRoute from './components/ProtectedRoute'
import BookItem from './app/user/BookItem'
import Recommendation from './app/user/Recommendation'
import Search from './app/user/Search'
import Blog from './app/user/Blog'
import Chat from './app/user/Chat'
import Genre from './app/user/Genre'
import Favorite from './app/user/Favorite'
import Reading from './app/user/Reading'
import Category from './app/user/Category'
import YouMayLike from './app/user/YouMayLike'
import BookViewer from './app/user/BookViewer'
import PopularNow from './app/user/PopularNow'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/home/:book_name",
    element: <ProtectedRoute><BookItem/></ProtectedRoute>
  },
  {
    path: "/home/book_reader",
    element: <ProtectedRoute><BookViewer/></ProtectedRoute>
  },
  {
    path: "/category",
    element: <ProtectedRoute><Category/></ProtectedRoute>
  },
  {
    path: "/home",
    element: <ProtectedRoute><Home/></ProtectedRoute>,
    children: [
      {
        path: "/home/search",
        element: <ProtectedRoute><Search/></ProtectedRoute>
      },
      {
        path: "/home/blog",
        element: <ProtectedRoute><Blog/></ProtectedRoute>
      },
      {
        path: "/home/recommendation",
        element: <ProtectedRoute><Recommendation/></ProtectedRoute>
      },
      {
        path: "/home/popular_now",
        element: <ProtectedRoute><PopularNow/></ProtectedRoute>
      },
      {
        path: "/home/you_may_like",
        element: <ProtectedRoute><YouMayLike/></ProtectedRoute>
      },
      {
        path: "/home/favorite",
        element: <ProtectedRoute><Favorite/></ProtectedRoute>
      },
      {
        path: "/home/reading",
        element: <ProtectedRoute><Reading/></ProtectedRoute>
      },
      {
        path: "/home/genre/:genre_name",
        element: <ProtectedRoute><Genre/></ProtectedRoute>
      },
      {
        path: "/home/chat",
        element: <ProtectedRoute><Chat/></ProtectedRoute>
      },
    ]
  },
])

function App() {

  return (
    <CategoryProvider>
      <ReadingBooksProvider>
        <FavoriteBooksProvider>
            <motion.div initial="hidden" animate="visible">
              <RouterProvider router={router}/>
            </motion.div>
        </FavoriteBooksProvider>
      </ReadingBooksProvider>
    </CategoryProvider>
  )
}

export default App
