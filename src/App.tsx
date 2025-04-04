import './App.css'
import Login from './app/Login'
import Signup from './app/Signup'
import Blog from './app/Blog'
import Onboarding from './app/Onboarding'
import PlanSelection from './app/PlanSelection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "/", element: <Onboarding/> },
  { path: "/login", element: <Login/> },
  { path: "/signup", element: <Signup/> },
  { path: "/blog", element: <Blog/> },
  { path: "/plans", element: <PlanSelection/> },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
