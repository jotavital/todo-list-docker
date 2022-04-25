import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import NotFound from '../NotFound';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/login' element={
                <UnauthenticatedRoute>
                    <Login />
                </UnauthenticatedRoute>
            } />
            <Route path='/register' element={
                <UnauthenticatedRoute>
                    <Register />
                </UnauthenticatedRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;