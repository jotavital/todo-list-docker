import { createContext, useState, useEffect } from 'react';
import { apiClient } from '../providers/apiClient';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('authenticatedUser');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
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

    return (
        <AuthContext.Provider value={{ isUserAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}