import React, { JSX } from "react"
import { useUserStore } from "../store/authStore"
import { Navigate } from "react-router-dom"
// import { users } from "../utils/constants"


type ProtectedRouteProps = {
    children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const user = useUserStore((state) => state.user)

    if(!user || !user.email){
    // if(user !== null){
        // if (users.includes(user) === false) {
            return <Navigate to={"/login"} replace/>
        // }
    }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
