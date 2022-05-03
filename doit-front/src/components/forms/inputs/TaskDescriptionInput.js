import { TextField } from '@mui/material';

function TaskDescriptionInput({ errors, register, value }) {
    return (
        <TextField
            fullWidth
            error={!!errors.description}
            helperText={errors.description?.message}
            label='Descrição'
            multiline
            defaultValue={value}
            rows={2}
            type='text'
            {...register('description')}
        />
    );
}

export default TaskDescriptionInput;