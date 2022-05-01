import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CustomSnackbar({ message }) {
    const [open, setOpen] = React.useState(false);

    const handleSnackbarOpen = () => {
        setOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant="outlined" onClick={handleSnackbarOpen}>
                Open success snackbar
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    {message}
                </MuiAlert>
            </Snackbar>
        </Stack>
    );
}