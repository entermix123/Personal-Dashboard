import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";


export default function PrivetGuard() {
    const {isAuthenticated} = useAuthContext();

    return isAuthenticated
        ? <Outlet />			// permission granted component
        : <Navigate to="/login" />;
}