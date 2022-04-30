import { DialogActions, Button, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import TaskTitleInput from './inputs/TaskTitleInput';
import DueDateInput from "./inputs/DueDateInput";
import TaskDescriptionInput from "./inputs/TaskDescriptionInput";

function NewTaskForm({ handleClose }) {

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TaskTitleInput register={register} errors={errors} />
                <TaskDescriptionInput register={register} errors={errors} />
                <DueDateInput control={control} />
                <DialogActions>
                    <Button onClick={handleClose} color='error' variant='outlined'>Voltar</Button>
                    <Button color='success' type='submit' variant='contained'>Salvar</Button>
                </DialogActions>
            </Stack>
        </form>
    );
}

export default NewTaskForm;