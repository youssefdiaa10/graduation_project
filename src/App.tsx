import './App.css'
import Login from './app/Login'
import Signup from './app/Signup'
import Home from './app/Home'
import Onboarding from './app/Onboarding'
import PlanSelection from './app/PlanSelection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { motion } from "framer-motion"


const router = createBrowserRouter([
  { path: "/", element: <Onboarding/> },
  { path: "/login", element: <Login/> },
  { path: "/signup", element: <Signup/> },
  { path: "/home", element: <ProtectedRoute><Home/></ProtectedRoute> },
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
