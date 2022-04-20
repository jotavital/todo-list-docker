import { Grid, Button, TextField, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import { apiClient } from '../../providers/apiClient';

function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        apiClient.post('/user', data)
            .then((response) => {
                console.log(response.data);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField fullWidth label='Nome completo' type='text' {...register('full_name', { required: true })} />
                {errors.full_name && "Campo obrigatório"}
                <TextField fullWidth label='E-mail' type='email' {...register('email', { required: true })} />
                {errors.email && "Campo obrigatório"}
                <TextField fullWidth label='Senha' type='password' {...register('password', { required: true })} />
                {errors.password && "Campo obrigatório"}
                <Grid mt={2} container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Enviar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default RegisterForm;