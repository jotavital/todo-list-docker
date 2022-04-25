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
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={
                <PrivateRoute>
                    <Register />
                </PrivateRoute>
            }></Route>
        </Routes>
    );
}

export default AppRoutes;