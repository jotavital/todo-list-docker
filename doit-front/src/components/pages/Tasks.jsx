import { Grid, Typography, Fab } from "@mui/material";
import NewTaskModal from "../modals/NewTaskModal";
import CustomSnackbar from '../snackbars/CustomSnackbar';
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TaskListing from "../TaskListing";
import { apiClient } from "../../providers/apiClient";

function Tasks() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState({});
    const [wasTaskSuccessfullyAdded, setWasTaskSuccessfullyAdded] = useState(false);
    const [taskDeletedStatus, setTaskDeletedStatus] = useState(null);
    const [needsToUpdateTaskList, setNeedsToUpdateTaskList] = useState(false);
    const [tasks, setTasks] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

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

    const getTasks = () => {
        setIsDataLoaded(false);
        apiClient.get('/task').then(({ data }) => {
            setTasks(data);
            setIsDataLoaded(true);
        });
    }

    useEffect(() => {
        getTasks();
    }, []);

    if (needsToUpdateTaskList) {
        setNeedsToUpdateTaskList(false);
        getTasks();
    }

    if (wasTaskSuccessfullyAdded) {
        setWasTaskSuccessfullyAdded(false);
        setNeedsToUpdateTaskList(true);
        handleCloseModal();
        handleOpenSnackbar();
    }

    if (taskDeletedStatus === 'success') {
        setTaskDeletedStatus(null);
        setNeedsToUpdateTaskList(true);
        setSnackbarOptions({
            message: 'Tarefa excluída',
            severity: 'success'
        });
        handleOpenSnackbar();
    } else if (taskDeletedStatus === 'error') {
        setTaskDeletedStatus(null);
        setSnackbarOptions({
            message: 'Erro ao excluir tarefa',
            severity: 'error'
        });
        handleOpenSnackbar();
    }

    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} padding={2}>
                    <Typography variant="h4" textAlign="center">Minhas tarefas</Typography>
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
                    <NewTaskModal
                        setWasTaskSuccessfullyAdded={setWasTaskSuccessfullyAdded}
                        isModalOpen={isModalOpen}
                        setSnackbarOptions={setSnackbarOptions}
                        handleOpenSnackbar={handleOpenSnackbar}
                        handleCloseModal={handleCloseModal}
                    />
                    <CustomSnackbar
                        options={snackbarOptions}
                        isOpen={isSnackbarOpen}
                        handleCloseSnackbar={handleCloseSnackbar}
                    />
                    <TaskListing
                        tasks={tasks}
                        isDataLoaded={isDataLoaded}
                        setTaskDeletedStatus={setTaskDeletedStatus}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;