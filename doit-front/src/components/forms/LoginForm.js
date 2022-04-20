import { Grid, Button, TextField, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import { apiClient } from '../../providers/apiClient';
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {

        apiClient.get(process.env.REACT_APP_SANCTUM_CSRF_COOKIE).then(response => {
            apiClient.post('/login', data)
                .then((response) => {
                    navigate('/');
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField fullWidth label='E-mail' type='email' {...register('email', { required: true })} />
                {errors.email && "Campo obrigatório"}
                <TextField fullWidth label='Senha' type='password' {...register('password', { required: true })} />
                {errors.password && "Campo obrigatório"}
                <Grid container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Entrar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default LoginForm;