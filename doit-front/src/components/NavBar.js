import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    MenuItem,
    Tooltip,
    Button
} from '@mui/material';
import { useState, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

const NavBar = () => {
    const { isUserAuthenticated, logout } = useContext(AuthContext);

    const pages = [];
    const settings = [];

    if ((isUserAuthenticated())) {
        pages.push(
            {
                name: 'Minhas tarefas',
                action: '/tasks'
            }
        );

        settings.push(
            {
                name: 'Perfil',
                action: '/user/profile'
            },
            {
                name: 'Logout',
                action: logout
            }
        );
    } else {
        pages.push(
            {
                name: 'Login',
                action: '/login'
            },
            {
                name: 'Cadastro',
                action: '/register'
            }
        );
    }

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu();
        logout();
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        DoIt
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    component={RouterLink} to={page.action}
                                >
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        DoIt
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={RouterLink} to={page.action}
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {isUserAuthenticated() &&
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Configurações">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="User" src="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    setting.action !== logout ? (
                                        <MenuItem key={setting.name} onClick={handleCloseUserMenu} component={RouterLink} to={setting.action}>
                                            <Typography textAlign="center">{setting.name}</Typography>
                                        </MenuItem>
                                    ) : (
                                        <MenuItem key={setting.name} onClick={handleLogout}>
                                            <Typography textAlign="center">{setting.name}</Typography>
                                        </MenuItem>
                                    )
                                ))}
                            </Menu>
                        </Box>
                    }

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;