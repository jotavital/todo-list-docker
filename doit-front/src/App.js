import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './components/router/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;