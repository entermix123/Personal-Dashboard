import { Navigate } from 'react-router-dom'
import { useLogout } from '../../../hooks/useAuth'

export default function Logout() {
    const logout = useLogout();

    logout(); // Call the logout function when the component mounts

    return <Navigate to="/" />              // redirect to home page
}