import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}

export default AppRoutes;