import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

function AuthChecker({ children }) {
    const { isUserAuthenticationPromiseFullfilled, checkIfUserAuthenticatedInApi } = useContext(AuthContext);

    checkIfUserAuthenticatedInApi();

    if (isUserAuthenticationPromiseFullfilled) {
        return children;
    } else {
        return null;
    }

}

export default AuthChecker;