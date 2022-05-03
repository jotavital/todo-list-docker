import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NewTaskForm from '../forms/NewTaskForm';

export default function EditTaskModal({ setWasTaskSuccessfullyEdited, handleOpenSnackbar, isModalOpen, handleCloseModal, taskDataToEdit }) {

    return (
        <div>
            <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth maxWidth='sm'>
                <Grid container>
                    <Grid item xs={10}>
                        <DialogTitle>
                            Editar tarefa
                        </DialogTitle>
                    </Grid>
                    <Grid container item xs={1} sm={2} alignItems='center' justifyContent='center'>
                        <Grid>
                            <IconButton onClick={handleCloseModal}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <DialogContent>
                    <NewTaskForm taskDataToEdit={taskDataToEdit} setWasTaskSuccessfullyEdited={setWasTaskSuccessfullyEdited} handleOpenSnackbar={handleOpenSnackbar} handleCloseModal={handleCloseModal} />
                </DialogContent>
            </Dialog>
        </div>
    );
}