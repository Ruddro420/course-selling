
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem("signUp"));

    // Check if the user exists and has a phone number
    const isAuthenticated = user;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
