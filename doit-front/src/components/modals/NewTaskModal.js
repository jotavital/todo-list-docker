import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NewTaskForm from '../forms/NewTaskForm';

export default function NewTaskModal({ setWasTaskSuccessfullyAdded, handleOpenSnackbar, setSnackbarOptions, isModalOpen, handleCloseModal }) {
    return (
        <div>
            <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth maxWidth='sm'>
                <Grid container>
                    <Grid item xs={10}>
                        <DialogTitle>
                            Nova tarefa
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
                    <NewTaskForm setWasTaskSuccessfullyAdded={setWasTaskSuccessfullyAdded} handleOpenSnackbar={handleOpenSnackbar} handleCloseModal={handleCloseModal} setSnackbarOptions={setSnackbarOptions} />
                </DialogContent>
            </Dialog>
        </div>
    );
}