import { Typography, Chip, Grid } from "@mui/material";

function CardTitle({ text, status }) {
    return (
        <Grid container alignItems='center'>
            <Typography variant="h6" sx={{ marginRight: 1 }}>{text}</Typography>
            {status
                ?
                <Chip size="small" color="success" label="Completo" />
                :
                <Chip size="small" color="error" label="Incompleto" />
            }
        </Grid>
    );
}

export default CardTitle;