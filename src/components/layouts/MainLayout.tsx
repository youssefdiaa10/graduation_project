import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const MainLayout = () => {

    const navigate = useNavigate()
    const [isAuthenticating, setIsAuthenticating] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const savedIsAuth = localStorage.getItem("isAuth")
        setIsAuthenticated(savedIsAuth === "true")
        setIsAuthenticating(false)
    }, [])

    useEffect(() => {
        if (!isAuthenticating && !isAuthenticated) {
            navigate("/login")
        }
    }, [isAuthenticating, isAuthenticated])

    if (isAuthenticating) {
        return <div>Loading...</div>
    }

    return <Outlet />
}

export default MainLayout
