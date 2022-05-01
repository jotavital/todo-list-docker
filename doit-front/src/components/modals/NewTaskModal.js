import { useState } from 'react';
import {
    Fab,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import NewTaskForm from '../forms/NewTaskForm';

export default function NewTaskModal() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab color="success" variant="extended" onClick={handleClickOpen}>
                <AddIcon />
                Nova tarefa
            </Fab>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
                <Grid container>
                    <Grid item xs={11}>
                        <DialogTitle>
                            Nova tarefa
                        </DialogTitle>
                    </Grid>
                    <Grid container item xs={1} alignItems='center' justifyContent='center'>
                        <Grid>
                            <IconButton onClick={handleClose}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <DialogContent>
                    <NewTaskForm handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </div>
    );
}