import { TextField } from '@mui/material';

function NameInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
            label='Nome'
            type='text'
            {...register('name',
                {
                    required: {
                        value: true,
                        message: 'Informe o seu nome'
                    }
                }
            )}
        />
    );
}

export default NameInput;