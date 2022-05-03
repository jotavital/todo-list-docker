import { TextField } from "@mui/material";

function EmailInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            label='E-mail'
            type='email'
            {...register('email',
                {
                    required: {
                        value: true,
                        message: "Informe um e-mail"
                    },
                    pattern: {
                        message: "Informe um e-mail válido",
                        value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
                    }
                }
            )}
        />
    );
}

export default EmailInput;