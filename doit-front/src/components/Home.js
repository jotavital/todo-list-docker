import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';

function Home() {

    const { isUserAuthenticated, user } = useContext(AuthContext);

    return (
        <>
            <h1>home</h1>
            <h2>isUserAuthenticated: {String(isUserAuthenticated)}</h2>
            <h2>localStorage.getItem('authenticatedUser'): {String(localStorage.getItem('authenticatedUser'))}</h2>
            <h2>user: {String(user)}</h2>
        </>
    );
}

export default Home;