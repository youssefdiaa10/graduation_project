import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { FavoriteBooksProvider } from './context/FavoriteContext'
import { ReadingBooksProvider } from './context/ReadingContext'
import { CategoryProvider } from './context/CategoryContext'
import "./App.css"
import Signup from './app/Signup'
import Login from './app/Login'
import Home from './app/user/Home'
import Onboarding from './app/user/Onboarding'
import ProtectedRoute from './components/ProtectedRoute'
import BookItem from './app/user/BookItem2'
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
import AdminOnboarding from './app/admin/AdminOnboarding'
import AdminChat from './app/admin/AdminChat'
import AdminSelectCategory from './app/admin/AdminSelectCategory'
import AdminAddBook from './app/admin/AdminAddBook'
import MainLayout from './components/layouts/MainLayout'
// import { UserProvider } from './context/UserContext'



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home/book_reader",
        element: <BookViewer />
      },
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
            path: "/home/reading",
            element: <Reading />
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


  // {
  //   path: "/admin",
  //   element: <ProtectedRoute><AdminOnboarding /></ProtectedRoute>,
  // },
  // {
  //   path: "/admin/chat",
  //   element: <ProtectedRoute><AdminChat /></ProtectedRoute>
  // },
  // {
  //   path: "/admin/select_category",
  //   element: <ProtectedRoute><AdminSelectCategory /></ProtectedRoute>
  // },
  // {
  //   path: "/admin/select_category/:category_name",
  //   element: <ProtectedRoute><AdminAddBook /></ProtectedRoute>
  // },


  // {
  //   path: "/home/:id",
  //   element: <ProtectedRoute><BookItem /></ProtectedRoute>
  // },
  // {
  //   path: "/home/book_reader",
  //   element: <ProtectedRoute><BookViewer /></ProtectedRoute>
  // },
  // {
  //   path: "/category",
  //   element: <ProtectedRoute><Category /></ProtectedRoute>
  // },
  // {
  //   path: "/home",
  //   element: <ProtectedRoute><Home /></ProtectedRoute>,
  //   children: [
  //     {
  //       path: "/home/search",
  //       element: <ProtectedRoute><Search /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/blog",
  //       element: <ProtectedRoute><Blog /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/recommendation",
  //       element: <ProtectedRoute><Recommendation /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/popular_now",
  //       element: <ProtectedRoute><PopularNow /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/you_may_like",
  //       element: <ProtectedRoute><YouMayLike /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/favorite",
  //       element: <ProtectedRoute><Favorite /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/reading",
  //       element: <ProtectedRoute><Reading /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/genre/:genre_name",
  //       element: <ProtectedRoute><Genre /></ProtectedRoute>
  //     },
  //     {
  //       path: "/home/chat",
  //       element: <ProtectedRoute><Chat /></ProtectedRoute>
  //     },
  //   ]
  // },




  // {
  //   path: "/admin",
  //   element: <AdminOnboarding />,
  // },
  // {
  //   path: "/admin/chat",
  //   element: <AdminChat />
  // },
  // {
  //   path: "/admin/select_category",
  //   element: <AdminSelectCategory />
  // },
  // {
  //   path: "/admin/select_category/:category_name",
  //   element: <AdminAddBook />
  // },


  // // {
  // //   path: "/home/:id",
  // //   element: <BookItem />
  // // },
  // {
  //   path: "/home/book_reader",
  //   element: <BookViewer />
  // },
  // {
  //   path: "/category",
  //   element: <Category />
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: "/home/search",
  //       element: <Search />
  //     },
  //     {
  //       path: "/home/blog",
  //       element: <Blog />
  //     },
  //     {
  //       path: "/home/recommendation",
  //       element: <Recommendation />
  //     },
  //     {
  //       path: "/home/popular_now",
  //       element: <PopularNow />
  //     },
  //     {
  //       path: "/home/you_may_like",
  //       element: <YouMayLike />
  //     },
  //     {
  //       path: "/home/favorite",
  //       element: <Favorite />
  //     },
  //     {
  //       path: "/home/reading",
  //       element: <Reading />
  //     },
  //     {
  //       path: "/home/genre/:genre_name",
  //       element: <Genre />
  //     },
  //     {
  //       path: "/home/chat",
  //       element: <Chat />
  //     },
  //   ]
  // },
])

function App() {


  return (
    // <UserProvider>
    <CategoryProvider>
      <ReadingBooksProvider>
        <FavoriteBooksProvider>
          <motion.div initial="hidden" animate="visible">
            <RouterProvider router={router} />
          </motion.div>
        </FavoriteBooksProvider>
      </ReadingBooksProvider>
    </CategoryProvider>
    // </UserProvider>
  )
}

export default App
