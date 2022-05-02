import * as React from 'react';
import { Card, CardHeader, Checkbox, IconButton, Divider, Typography, CardActions, CardContent, Grid, FormControlLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DateTimeAndClock from '../DateTimeAndClock';
import CardTitle from './CardTitle';

export default function TaskCard({ title, description, due_date, status }) {
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 150 }}>
                <CardHeader
                    title={
                        <CardTitle text={title} status={status} />
                    }
                    subheader={
                        <DateTimeAndClock dateTime={due_date} />
                    }
                />
                <Divider variant="middle" />
                <CardContent>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Checkbox />
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
