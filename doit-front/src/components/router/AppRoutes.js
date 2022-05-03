import {
    Routes,
    Route
} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import NotFound from '../NotFound';
import Tasks from '../pages/Tasks';

function AppRoutes() {

    return (
        <Routes>
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
            <Route path='/' element={
                <PrivateRoute>
                    <Tasks />
                </PrivateRoute>
            } />
            <Route path='/tasks' element={
                <PrivateRoute>
                    <Tasks />
                </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;