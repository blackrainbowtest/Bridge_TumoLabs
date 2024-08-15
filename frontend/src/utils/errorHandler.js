export function handleError(err) {
    console.log(err.response?.data?.email)
    return err.response?.data?.username[0] ??
        err.response?.data?.non_field_errors ??
        err.response?.data?.error ??
        err.message;
}