import { TextField } from "@mui/material";

function PasswordInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            label='Senha'
            type='password'
            {...register('password',
                {
                    required: {
                        value: true,
                        message: "Informe uma senha"
                    }
                }
            )}
        />
    );
}

export default PasswordInput;