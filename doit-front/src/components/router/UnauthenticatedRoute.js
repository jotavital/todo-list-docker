import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Navigate } from "react-router-dom";

const UnauthenticatedRoute = ({ children }) => {

    const { isUserAuthenticated } = useContext(AuthContext);

    if (isUserAuthenticated()) {
        return <Navigate to={-1} replace={true} />
    }
    return children;
}

export default UnauthenticatedRoute;