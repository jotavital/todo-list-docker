import { Grid, Typography } from "@mui/material";
import NewTask from "../modals/NewTask";

function Tasks() {
    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} padding={3}>
                    <Typography variant="h3" textAlign="center">Minhas tarefas</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container justifyContent="center" padding={1}>
                    <NewTask />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tasks;