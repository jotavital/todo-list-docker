import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function DueDateInput({ control, defaultValue }) {

    defaultValue = (defaultValue) ? defaultValue : null;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <Controller
                control={control}
                name="due_date"
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <DateTimePicker
                        label="Prazo"
                        views={['day', 'month', 'year', 'hours', 'minutes']}
                        onChange={onChange}
                        value={value}
                        renderInput={
                            (props) =>
                                <TextField
                                    {...props}
                                />
                        }
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default DueDateInput;