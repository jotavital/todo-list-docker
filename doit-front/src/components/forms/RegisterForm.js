import { Grid, Button, Stack, Typography, Link } from "@mui/material";
import { useForm } from 'react-hook-form';
import { apiClient } from '../../providers/apiClient';
import { useNavigate } from 'react-router-dom';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';
import NameInput from "./inputs/NameInput";
import { useTheme } from "@emotion/react";

function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const theme = useTheme();

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
                <NameInput register={register} errors={errors} />
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />
                <Grid container>
                    <Typography color={theme.palette.info.main}>
                        Já é cadastrado?
                        <Link marginLeft={1} href='/login'>Entrar</Link>
                    </Typography>
                </Grid>
                <Grid mt={2} container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Cadastrar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default RegisterForm;