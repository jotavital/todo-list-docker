import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './components/router/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/auth';

function App() {
    return (
        <>
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <AuthProvider>
                        <NavBar />
                        <AppRoutes />
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
