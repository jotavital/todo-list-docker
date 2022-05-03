import { useState } from 'react';
import { Card, CardHeader, IconButton, Divider, Typography, CardActions, CardContent, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DateTimeAndClock from '../DateTimeAndClock';
import CardTitle from './CardTitle';

export default function TaskCard({ taskId, title, description, due_date, status }) {
    const [temporaryStatus, setTemporaryStatus] = useState(status);

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
                    <IconButton>
                        <EditIcon color='primary'></EditIcon>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon color='error'></DeleteIcon>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}
