import { TextField } from '@mui/material';

function TaskDescriptionInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.description}
            helperText={errors.description?.message}
            label='Descrição'
            multiline
            rows={2}
            type='text'
            {...register('description')}
        />
    );
}

export default TaskDescriptionInput;