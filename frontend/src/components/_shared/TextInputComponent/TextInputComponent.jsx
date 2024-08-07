import React, { forwardRef, memo } from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import styled from 'styled-components';

const TextInputComponent = forwardRef(
  (
    {
      value,
      callback = () => {},
      id,
      label = "Text",
      variant = "standard",
      type = "text",
      adornment = "",
      error,
      helperText = "error",
      onBlur,
      ...rest
    },
    ref
  ) => {
    return (
      <TextFieldContainer
        id={id}
        type={type}
        label={label}
        variant={variant}
        value={value}
        onChange={(e) => callback(e.target.value)}
        error={error}
        helperText={error ? helperText : ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>{adornment}</InputAdornment>
          ),
        }}
        ref={ref}
        {...rest}
        onBlur={onBlur}
      />
    );
  }
);

export default memo(TextInputComponent);

const TextFieldContainer = styled(TextField)(({ theme }) => ({
  width: "100%!important",
}));
