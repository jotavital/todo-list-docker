import { Grid, CircularProgress, Typography, Alert } from '@mui/material';
import { useState } from 'react';
import TaskCard from './cards/TaskCard';
import EditTaskModal from './modals/EditTaskModal';

function TaskListing({ tasks, isDataLoaded, setSnackbarOptions, setTaskDeletedStatus, setTaskEditedStatus }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskDataToEdit, setTaskDataToEdit] = useState(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setTaskDataToEdit(null);
        setIsModalOpen(false);
    }

    if (!isDataLoaded) {
        return (
            <Grid item padding={10}>
                <CircularProgress />
            </Grid>
        )
    }
    return (
        <Grid container padding={1} spacing={2} justifyContent="center">
            {tasks.length
                ?
                tasks.map((task) => {
                    return <TaskCard
                        key={task.id}
                        taskId={task.id}
                        title={task.title}
                        due_date={task.due_date}
                        description={task.description}
                        status={task.status}
                        setTaskDeletedStatus={setTaskDeletedStatus}
                        handleOpenModal={handleOpenModal}
                        task={task}
                        setTaskDataToEdit={setTaskDataToEdit}
                    />
                })
                :
                <Grid container justifyContent='center' padding={10}>
                    <Alert variant="filled" severity="info">
                        <Typography>
                            Você não possui nenhuma tarefa.
                        </Typography>
                    </Alert>
                </Grid>
            }
            <EditTaskModal setTaskEditedStatus={setTaskEditedStatus} taskDataToEdit={taskDataToEdit} setSnackbarOptions={setSnackbarOptions} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
        </Grid>
    );
}

export default TaskListing;