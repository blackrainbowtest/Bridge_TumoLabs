export function handleError(err) {
    return err.response?.data?.non_field_errors ??
           err.response?.data?.error ??
           err.message;
}