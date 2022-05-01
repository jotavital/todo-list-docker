import { Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

class CustomSnackBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.props.isOpen}
                    autoHideDuration={5000}
                    onClose={this.props.handleCloseSnackbar}
                >
                    <MuiAlert
                        elevation={6}
                        variant="filled"
                        onClose={this.props.handleCloseSnackbar}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        {this.props.message}
                    </MuiAlert>
                </Snackbar>
            </Stack>
        );
    }
}

export default CustomSnackBar;