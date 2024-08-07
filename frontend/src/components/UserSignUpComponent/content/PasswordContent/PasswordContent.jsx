import { useFormContext } from 'react-hook-form';
import TextInputComponent from 'components/_shared/TextInputComponent';
import { memo } from 'react';

function PasswordContent() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <TextInputComponent
            label='Password'
            type='password'
            {...register('password', {
                required: 'Password is required',
                minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                },
            })}
            error={!!errors.password}
            helperText={errors.password?.message || ''}
        />
    );
}

export default memo(PasswordContent);
