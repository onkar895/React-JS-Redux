import { useNavigate } from "react-router-dom"
import { useAuth } from "./Authentication"

export const Profile = () => {
    const Auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        Auth.logout()
        navigate('/')
    }

    return (
        <>
            <div>
                <h2>Welcome  { Auth.user}</h2>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}