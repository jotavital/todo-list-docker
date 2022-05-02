import { createContext, useState } from 'react';
import { apiClient } from '../providers/apiClient';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isUserAuthenticatedInApi, setIsUserAuthenticatedInApi] = useState(false);
    const [isUserAuthenticationPromiseFullfilled, setIsUserAuthenticationPromiseFullfilled] = useState(false);

    const navigate = useNavigate();

    const login = (data) => {
        apiClient.post('/login', data)
            .then((response) => {
                if (response.status === 200 && !response.data === false) {
                    setUser(response.data[0]);
                    localStorage.setItem('authenticatedUser', JSON.stringify(response.data[0]));

                    navigate('/');
                } else {
                    console.error('Credenciais incorretas. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Credenciais incorretas. Tente novamente.');
            });
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authenticatedUser');

        apiClient.post('/logout')
            .catch((error) => {
                console.error('Não foi possível fazer o logout.');
            });

        navigate('/login');
    }

    const checkIfUserAuthenticatedInApi = () => {
        apiClient.get('auth/check').then((response) => {
            setIsUserAuthenticationPromiseFullfilled(true);
            setIsUserAuthenticatedInApi(response.data);
        });

    }

    const isUserAuthenticated = () => {
        const storedUser = localStorage.getItem('authenticatedUser');

        if (isUserAuthenticatedInApi && storedUser) {
            if(!user){
                setUser(JSON.parse(storedUser));
            }
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ isUserAuthenticationPromiseFullfilled, checkIfUserAuthenticatedInApi, setIsUserAuthenticatedInApi, isUserAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}