import { useTheme } from '@emotion/react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Grid, Typography } from '@mui/material';
import { format as formatDate, differenceInDays } from 'date-fns';

function DateTimeAndClock({ due_date }) {
    const formatted_due_date = (due_date) ? formatDate(new Date(due_date), 'dd/MM/yy HH:mm') : '---';
    const differenceToDueDate = differenceInDays(new Date(due_date), new Date());
    var dueDateColor = null;

    const theme = useTheme();

    if (differenceToDueDate <= 1) {
        dueDateColor = theme.palette.error.main;
    } else if (differenceToDueDate >= 2 && differenceToDueDate <= 3) {
        dueDateColor = theme.palette.warning.main;
    } else {
        dueDateColor = theme.palette.info.main
    }

    return (
        <Grid container alignItems='center'>
            <AccessTimeFilledIcon sx={{ fontSize: 18, marginRight: 1 }} />
            <Typography color={dueDateColor} >{formatted_due_date}</Typography>
        </Grid>
    );
}

export default DateTimeAndClock;