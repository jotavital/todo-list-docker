import { Grid, Typography, Fab } from "@mui/material";
import NewTaskModal from "../modals/NewTaskModal";
import CustomSnackbar from '../snackbars/CustomSnackbar';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function Tasks() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState({});

    const handleOpenSnackbar = () => {
        setIsSnackbarOpen(true);
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpen(false);
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} padding={3}>
                    <Typography variant="h3" textAlign="center">Minhas tarefas</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container justifyContent="center" padding={1}>
                    <Fab color="success" variant="extended" onClick={handleOpenModal}>
                        <AddIcon />
                        Nova tarefa
                    </Fab>
                    <NewTaskModal isModalOpen={isModalOpen} setSnackbarOptions={setSnackbarOptions} handleOpenSnackbar={handleOpenSnackbar} handleCloseModal={handleCloseModal} />
                    <CustomSnackbar options={snackbarOptions} isOpen={isSnackbarOpen} handleCloseSnackbar={handleCloseSnackbar} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;