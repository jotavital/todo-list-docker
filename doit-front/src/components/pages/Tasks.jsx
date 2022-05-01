import { Grid, Typography, Button } from "@mui/material";
import NewTaskModal from "../modals/NewTaskModal";
import CustomSnackbar from '../snackbars/CustomSnackbar';
import { useState } from "react";

function Tasks() {

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

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
                    <NewTaskModal setSnackbarMessage={setSnackbarMessage} handleOpenSnackbar={handleOpenSnackbar} />
                    <CustomSnackbar message={snackbarMessage} isOpen={isSnackbarOpen} handleCloseSnackbar={handleCloseSnackbar} />
                    <Button variant="outlined" onClick={handleOpenSnackbar}>
                        Abrir mensagem
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;