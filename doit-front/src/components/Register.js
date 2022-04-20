import { Grid, Typography } from "@mui/material";
import RegisterForm from "./forms/RegisterForm";

function Register() {
    return (
        <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
            <Grid item xs={10} sm={6} md={4} lg={3} >
                <Typography variant="h3" mb={3} textAlign='center'>Cadastro</Typography>
                <RegisterForm />
            </Grid>
        </Grid>
    );
}

export default Register;