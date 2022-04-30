import { TextField } from '@mui/material';

function TaskTitleInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.title}
            helperText={errors.title?.message}
            label='Título'
            type='text'
            {...register('title',
                {
                    required: {
                        value: true,
                        message: 'Campo obrigatório'
                    }
                }
            )}
        />
    );
}

export default TaskTitleInput;