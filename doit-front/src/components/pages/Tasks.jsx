import { Grid, Typography, Button } from "@mui/material";
import NewTaskModal from "../modals/NewTaskModal";
import CustomSnackbar from '../snackbars/CustomSnackbar';
import { useState } from "react";

function Tasks() {

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(true);

    const handleOpenSnackbar = () => {
        setIsSnackbarOpen(true);
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpen(false);
    }

    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} padding={3}>
                    <Typography variant="h3" textAlign="center">Minhas tarefas</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container justifyContent="center" padding={1}>
                    <NewTaskModal />
                    <CustomSnackbar message='teste' isOpen={isSnackbarOpen} handleCloseSnackbar={handleCloseSnackbar} />
                    <Button variant="outlined" onClick={handleOpenSnackbar}>
                        Abrir mensagem
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;