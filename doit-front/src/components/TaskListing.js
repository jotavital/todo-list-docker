import { Grid, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiClient } from '../providers/apiClient';
import TaskCard from './cards/TaskCard';

function TaskListing() {

    const [tasks, setTasks] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

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

    if (!isDataLoaded) {
        return (
            <Grid item padding={10}>
                <CircularProgress />
            </Grid>
        )
    }
    return (
        <Grid container padding={1} spacing={2} justifyContent="center">
            {tasks &&
                tasks.map((task) => {
                    return <TaskCard key={task.id} title={task.title} due_date={task.due_date} description={task.description} status={task.status} />
                })
            }
        </Grid>
    );
}

export default TaskListing;