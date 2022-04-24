import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../../contexts/auth';

function AppRoutes() {

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={
                    <PrivateRoute>
                        <Register />
                    </PrivateRoute>
                }></Route>
            </Routes>
        </AuthProvider>
    );
}

export default AppRoutes;