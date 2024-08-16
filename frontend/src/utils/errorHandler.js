export function handleError(err) {
    
    return err.response?.data?.detail ??
        err.response?.data?.username[0] ??
        err.response?.data?.non_field_errors ??
        err.response?.data?.error ??
        err.message;
}