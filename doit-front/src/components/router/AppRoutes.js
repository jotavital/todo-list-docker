import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import NotFound from '../NotFound';
import Tasks from '../pages/Tasks';
import AuthChecker from "./AuthChecker";

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
                <AuthChecker>
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                </AuthChecker>
            } />
            <Route path='/tasks' element={
                <AuthChecker>
                    <PrivateRoute>
                        <Tasks />
                    </PrivateRoute>
                </AuthChecker>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;