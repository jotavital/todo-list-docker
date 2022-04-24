import { Grid, Button, TextField, Stack } from "@mui/material";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../contexts/auth";

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);

    const onSubmit = (data) => {
        login(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField fullWidth label='E-mail' type='email' defaultValue='teste@g.com' {...register('email', { required: true })} />
                {errors.email && "Campo obrigatório"}
                <TextField fullWidth label='Senha' type='password' defaultValue='123' {...register('password', { required: true })} />
                {errors.password && "Campo obrigatório"}
                <Grid container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Entrar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default LoginForm;