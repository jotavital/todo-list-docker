import { Grid, Typography, Fab } from "@mui/material";
import NewTaskModal from "../modals/NewTaskModal";
import CustomSnackbar from '../snackbars/CustomSnackbar';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TaskListing from "../TaskListing";

function Tasks() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState({});
    const [wasTaskSuccessfullyAdded, setWasTaskSuccessfullyAdded] = useState(false);

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
                <Grid item xs={12} padding={2}>
                    <Typography variant="h3" textAlign="center">Minhas tarefas</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container justifyContent="center" padding={1}>
                    <Grid padding={1}>
                        <Fab color="success" variant="extended" onClick={handleOpenModal}>
                            <AddIcon />
                            Nova tarefa
                        </Fab>
                    </Grid>
                    <NewTaskModal setWasTaskSuccessfullyAdded={setWasTaskSuccessfullyAdded} isModalOpen={isModalOpen} setSnackbarOptions={setSnackbarOptions} handleOpenSnackbar={handleOpenSnackbar} handleCloseModal={handleCloseModal} />
                    <CustomSnackbar options={snackbarOptions} isOpen={isSnackbarOpen} handleCloseSnackbar={handleCloseSnackbar} />
                    <TaskListing />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;