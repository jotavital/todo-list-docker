import { useState } from 'react';
import {
    Fab,
    Dialog,
    Button,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import NewTaskForm from '../forms/NewTaskForm';

export default function NewTaskModal({ handleOpenSnackbar, setSnackbarOptions }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Fab color="success" variant="extended" onClick={handleOpenModal}>
                <AddIcon />
                Nova tarefa
            </Fab>
            <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth maxWidth='sm'>
                <Grid container>
                    <Grid item xs={11}>
                        <DialogTitle>
                            Nova tarefa
                        </DialogTitle>
                    </Grid>
                    <Grid container item xs={1} alignItems='center' justifyContent='center'>
                        <Grid>
                            <IconButton onClick={handleCloseModal}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <DialogContent>
                    <NewTaskForm handleOpenSnackbar={handleOpenSnackbar} handleCloseModal={handleCloseModal} setSnackbarOptions={setSnackbarOptions} />
                </DialogContent>
            </Dialog>
        </div>
    );
}