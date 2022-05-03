import { Grid, CircularProgress, Typography, Alert } from '@mui/material';
import TaskCard from './cards/TaskCard';

function TaskListing({tasks, isDataLoaded}) {

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
                    return <TaskCard key={task.id} taskId={task.id} title={task.title} due_date={task.due_date} description={task.description} status={task.status} />
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
        </Grid>
    );
}

export default TaskListing;