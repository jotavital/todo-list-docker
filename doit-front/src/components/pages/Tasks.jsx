import { Grid, Typography, Box } from "@mui/material";

function Tasks() {
    return (
        <Grid container sx={{ bgcolor: 'warning.main' }}>
            <Grid container sx={{ bgcolor: 'error.main' }}>
                <Grid item xs={12}>
                    <Typography variant="h3" textAlign="center">Minhas tarefas</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ bgcolor: 'warning.main' }}>
                <Grid item xs={12}>
                    <Typography variant="h3" textAlign="center">Minhas tarefas</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;