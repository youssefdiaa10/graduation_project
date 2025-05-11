import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { motion } from "framer-motion"
import "./App.css"
import Signup from './app/Signup'
import Login from './app/Login'
import Home from './app/user/Home'
import Onboarding from './app/user/Onboarding'
import Recommendation from './app/user/Recommendation'
import Search from './app/user/Search'
import Blog from './app/user/Blog'
import Chat from './app/user/Chat'
import Genre from './app/user/Genre'
import Favorite from './app/user/Favorite'
import History from './app/user/History'
import Category from './app/user/Category'
import YouMayLike from './app/user/YouMayLike'
import PopularNow from './app/user/PopularNow'
import AdminOnboarding from './app/admin/AdminOnboarding'
import AdminChat from './app/admin/AdminChat'
import AdminSelectCategory from './app/admin/AdminSelectCategory'
import AdminAddBook from './app/admin/AdminAddBook'
import MainLayout from './components/layouts/MainLayout'
import { CategoryProvider } from './context/CategoryContext'
import { ReadingBooksProvider } from './context/ReadingContext'
import AdminAllChats from './app/admin/AdminAllChats'



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/category",
        element: <Category />
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "/home/search",
            element: <Search />
          },
          {
            path: "/home/blog",
            element: <Blog />
          },
          {
            path: "/home/recommendation",
            element: <Recommendation />
          },
          {
            path: "/home/popular_now",
            element: <PopularNow />
          },
          {
            path: "/home/you_may_like",
            element: <YouMayLike />
          },
          {
            path: "/home/favorite",
            element: <Favorite />
          },
          {
            path: "/home/history",
            element: <History />
          },
          {
            path: "/home/genre/:genre_name",
            element: <Genre />
          },
          {
            path: "/home/chat",
            element: <Chat />
          },
        ]
      },
      {
        path: "/admin",
        element: <AdminOnboarding />,
      },
      {
        path: "/admin/all_chats",
        element: <AdminAllChats />
      },
      {
        path: "/admin/chat/:userId",
        element: <AdminChat />
      },
      {
        path: "/admin/select_category",
        element: <AdminSelectCategory />
      },
      {
        path: "/admin/select_category/:category_name",
        element: <AdminAddBook />
      },
    ]
  },
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
])

function App() {

  return (
    <ReadingBooksProvider>
      <CategoryProvider>
        <motion.div initial="hidden" animate="visible">
          <RouterProvider router={router} />
        </motion.div>
      </CategoryProvider>
    </ReadingBooksProvider>
  )
}

export default App
