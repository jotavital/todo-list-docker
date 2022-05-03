import { useTheme } from "@emotion/react";
import { Grid, Button, Stack, Typography, Link } from "@mui/material";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../contexts/auth";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const theme = useTheme();

    const onSubmit = (data) => {
        login(data);
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />
                <Grid container>
                    <Typography color={theme.palette.info.main}>
                        Ainda não tem login?
                        <Link marginLeft={1} href='/register'>Cadastre-se</Link>
                    </Typography>
                </Grid>
                <Grid container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Entrar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default LoginForm;