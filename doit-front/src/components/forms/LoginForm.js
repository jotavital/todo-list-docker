import { Grid, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../contexts/auth";
import ConsoleLogUsers from '../test/ConsoleLogUsers';
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);

    const onSubmit = (data) => {
        login(data);
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />
                <Grid container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Entrar</Button>
                </Grid>
            </Stack>
            <ConsoleLogUsers />
        </form>
    );
}

export default LoginForm;