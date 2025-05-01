import React, { JSX } from "react"
import { useUserStore } from "../store/authStore"
import { Navigate } from "react-router-dom"


type ProtectedRouteProps = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useUserStore((state) => state.isAuth)

  if (!user) {
    return <Navigate to={"/login"} replace />
  }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
