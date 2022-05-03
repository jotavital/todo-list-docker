import { Typography, Chip, Grid } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { apiClient } from "../../providers/apiClient";

function CardTitle({ taskId, text, temporaryStatus, setTemporaryStatus }) {

    const handleToggleTaskStatus = () => {
        apiClient.post('/task/togglestatus/' + taskId)
            .then(({ data }) => {
                if (data) {
                    setTemporaryStatus(!temporaryStatus);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <Grid container alignItems='center'>
            <Typography variant="h6" sx={{ marginRight: 1 }}>{text}</Typography>
            {temporaryStatus
                ?
                <Chip
                    variant="outlined"
                    sx={{ padding: 1 }}
                    onClick={handleToggleTaskStatus}
                    clickable
                    icon={<CheckBoxIcon />}
                    size="small"
                    color="success"
                    label="Completo"
                />
                :
                <Chip
                    variant="outlined"
                    sx={{ padding: 1 }}
                    onClick={handleToggleTaskStatus}
                    clickable
                    icon={<CheckBoxOutlineBlankIcon />}
                    size="small"
                    color="error"
                    label="Incompleto"
                />
            }
        </Grid>
    );
}

export default CardTitle;