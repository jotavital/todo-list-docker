import { Grid, Button, TextField, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import { apiClient } from '../../providers/apiClient';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        apiClient.post('/user', data)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200 && !response.data === false) {
                    navigate('/login');
                } else {
                    console.error('Não foi possível se cadastrar agora. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField fullWidth label='Nome completo' type='text' defaultValue="João Pedro Vital" {...register('name', { required: true })} />
                {errors.name && "Campo obrigatório"}
                <TextField fullWidth label='E-mail' type='email' defaultValue="joao@g.com" {...register('email', { required: true })} />
                {errors.email && "Campo obrigatório"}
                <TextField fullWidth label='Senha' type='password' defaultValue="123" {...register('password', { required: true })} />
                {errors.password && "Campo obrigatório"}
                <Grid mt={2} container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Enviar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default RegisterForm;