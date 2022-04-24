import { createContext, useState } from 'react';
import { apiClient } from '../providers/apiClient';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = (data) => {
        apiClient.get(process.env.REACT_APP_SANCTUM_CSRF_COOKIE).then(response => {
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
        });
    }

    return (
        <AuthContext.Provider value={{ isUserAuthenticated: !!user, user, login }}>
            {children}
        </AuthContext.Provider>
    );
}