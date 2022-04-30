import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isUserAuthenticated } = useContext(AuthContext);

    if (!isUserAuthenticated()) {
        return <Navigate to='/login' />
    }

    return children;
}

export default PrivateRoute;