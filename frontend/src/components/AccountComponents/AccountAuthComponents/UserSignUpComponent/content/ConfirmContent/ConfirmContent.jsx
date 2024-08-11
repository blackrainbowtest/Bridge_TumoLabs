import { useFormContext } from 'react-hook-form';
import TextInputComponent from 'components/_shared/TextInputComponent';
import { memo } from 'react';

function ConfirmContent() {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();

    const password = watch('password');

    return (
        <TextInputComponent
            label='Confirm Password'
            type='password'
            {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match',
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message || ''}
        />
    );
}

export default memo(ConfirmContent);
