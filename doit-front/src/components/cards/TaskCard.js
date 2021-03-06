import { useState } from 'react';
import { Card, CardHeader, IconButton, Divider, Typography, CardActions, CardContent, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DateTimeAndClock from '../DateTimeAndClock';
import CardTitle from './CardTitle';
import { apiClient } from '../../providers/apiClient';

export default function TaskCard({ task, taskId, title, description, due_date, status, setTaskDeletedStatus, handleOpenModal, setTaskDataToEdit }) {
    const [temporaryStatus, setTemporaryStatus] = useState(status);

    const handleDeleteTask = (taskId) => {
        apiClient.delete('/task/' + taskId)
            .then(() => {
                setTaskDeletedStatus('success');
            })
            .catch((error) => {
                console.error(error);
                setTaskDeletedStatus('error');
            });
    }

    const handleEditTask = (task) => {
        setTaskDataToEdit(task);
        handleOpenModal();
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 150 }}>
                <CardHeader
                    title={
                        <CardTitle taskId={taskId} text={title} temporaryStatus={temporaryStatus} setTemporaryStatus={setTemporaryStatus} />
                    }
                    subheader={
                        <DateTimeAndClock due_date={due_date} />
                    }
                />
                <Divider variant="middle" />
                <CardContent>
                    <Typography variant="body2">
                        {description ? description : 'Sem descrição'}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <IconButton onClick={() => {
                        handleEditTask(task);
                    }}>
                        <EditIcon color='primary'></EditIcon>
                    </IconButton>
                    <IconButton onClick={() => {
                        handleDeleteTask(taskId);
                    }}>
                        <DeleteIcon color='error'></DeleteIcon>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}
