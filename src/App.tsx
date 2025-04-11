import './App.css'
import Login from './app/Login'
import Signup from './app/Signup'
import Home from './app/Home'
import Onboarding from './app/Onboarding'
import PlanSelection from './app/PlanSelection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { motion } from "framer-motion"
import BookItem from './app/BookItem'
import Search from './app/Search'
import Blog from './app/Blog'
import Chat from './app/Chat'
import Recommendation from './app/Recommendation'
import Genre from './app/Genre'
import Favorite from './app/Favorite'
import { FavoriteBooksProvider } from './context/FavoriteContext'


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
        path: "/home/favorite",
        element: <ProtectedRoute><Favorite/></ProtectedRoute>
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
  {
    path: "/plans",
    element: <ProtectedRoute><PlanSelection/></ProtectedRoute>
  },
])

function App() {

  return (
    <FavoriteBooksProvider>
      <motion.div initial="hidden" animate="visible">
        <RouterProvider router={router}/>
      </motion.div>
    </FavoriteBooksProvider>
  )
}

export default App
