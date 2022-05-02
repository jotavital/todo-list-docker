import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Grid, Typography } from '@mui/material';

function DateTimeAndClock({ dateTime }) {
    return (
        <Grid container alignItems='center'>
            <AccessTimeFilledIcon sx={{ fontSize: 18, marginRight: 1 }} />
            <Typography>{dateTime}</Typography>
        </Grid>
    );
}

export default DateTimeAndClock;