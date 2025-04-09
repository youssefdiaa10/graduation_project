import './App.css'
import Login from './app/Login'
import Signup from './app/Signup'
import Blog from './app/Blog'
import Onboarding from './app/Onboarding'
import PlanSelection from './app/PlanSelection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { motion } from "framer-motion"


const router = createBrowserRouter([
  { path: "/", element: <Onboarding/> },
  { path: "/login", element: <Login/> },
  { path: "/signup", element: <Signup/> },
  { path: "/blog", element: <ProtectedRoute><Blog/></ProtectedRoute> },
  { path: "/plans", element: <ProtectedRoute><PlanSelection/></ProtectedRoute> },
])

function App() {

  return (
    <motion.div initial="hidden" animate="visible">
        <RouterProvider router={router}/>
    </motion.div>
  )
}

export default App
