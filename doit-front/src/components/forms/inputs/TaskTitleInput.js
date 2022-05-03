import { TextField } from '@mui/material';

function TaskTitleInput({ errors, register, value }) {
    return (
        <TextField
            fullWidth
            error={!!errors.title}
            helperText={errors.title?.message}
            label='Título'
            type='text'
            defaultValue={value}
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