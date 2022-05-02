import { createContext, useEffect, useState } from 'react';
import { apiClient } from '../providers/apiClient';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isUserAuthenticated) {
            setUser(localStorage.getItem('authenticatedUser'));
        }
    }, []);

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
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error('Não foi possível fazer o logout.');
            });

        navigate('/login');
    }

    const isUserAuthenticated = () => {
        const storedUser = localStorage.getItem('authenticatedUser');

        if (storedUser) {
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ isUserAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}