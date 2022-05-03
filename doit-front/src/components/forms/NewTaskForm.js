import { DialogActions, Button, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import TaskTitleInput from './inputs/TaskTitleInput';
import DueDateInput from "./inputs/DueDateInput";
import TaskDescriptionInput from "./inputs/TaskDescriptionInput";
import { apiClient } from '../../providers/apiClient';
import { format as formatDate } from 'date-fns';

function NewTaskForm({ setWasTaskSuccessfullyAdded, handleCloseModal, handleOpenSnackbar, setSnackbarOptions, taskDataToEdit }) {

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.due_date = (data.due_date != null) ? formatDate(data.due_date, 'yyyy-MM-dd HH:mm:ii') : null;

        apiClient.post('/task', data)
            .then((response) => {
                if (response.data) {
                    setSnackbarOptions(
                        {
                            message: "Tarefa adicionada",
                            severity: "success"
                        }
                    );
                    setWasTaskSuccessfullyAdded(true);
                }
            })
            .catch((error) => {
                console.error(error);
                setSnackbarOptions(
                    {
                        message: "Erro ao adicionar a tarefa",
                        severity: "error"
                    }
                );
                handleOpenSnackbar();
            });

    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TaskTitleInput register={register} errors={errors} value={taskDataToEdit?.title} />
                <TaskDescriptionInput register={register} errors={errors} value={taskDataToEdit?.description} />
                <DueDateInput control={control} defaultValue={taskDataToEdit?.due_date} />
                <DialogActions>
                    <Button onClick={handleCloseModal} color='error' variant='outlined'>Voltar</Button>
                    <Button color='success' type='submit' variant='contained'>Salvar</Button>
                </DialogActions>
            </Stack>
        </form>
    );
}

export default NewTaskForm;