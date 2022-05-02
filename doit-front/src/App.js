import './App.css';
import './styles/debugStyles.css';
import NavBar from './components/NavBar';
import AppRoutes from './components/router/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/auth';

const theme = createTheme({});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App app-body">
                <BrowserRouter>
                    <AuthProvider>
                        <NavBar />
                        <AppRoutes />
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
