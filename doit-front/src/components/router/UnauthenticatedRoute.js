import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Navigate, useLocation } from "react-router-dom";

const UnauthenticatedRoute = ({ children }) => {

    const location = useLocation();
    const referrer = location.state?.from?.pathname || "/";

    const { isUserAuthenticated } = useContext(AuthContext);

    if (isUserAuthenticated) {
        return <Navigate to={referrer} />
    }

    return children;
}

export default UnauthenticatedRoute;