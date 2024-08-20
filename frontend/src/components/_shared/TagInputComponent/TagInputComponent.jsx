import React, { memo } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

function TagInputComponent({
  field = { value: [], onChange: () => {}, onBlur: () => {} },
  fieldState = {},
  label = "Tags",
  variant = "standard",
  canEdit = true,
  ...props
}) {
  const { value, onChange, onBlur } = field;
  const { error } = fieldState;

  const handleAddTag = (_, tagToAdd) => {
    if (!canEdit) return;

    if (typeof tagToAdd === "string") {
      if (tagToAdd.trim() && !value.includes(tagToAdd.trim())) {
        onChange([...value, tagToAdd.trim()]);
      }
    } else if (tagToAdd && tagToAdd.length > value.length) {
      onChange(tagToAdd);
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    if (!canEdit) return;
    onChange(value.filter((tag) => tag !== tagToDelete));
  };

  return (
    <AutocompleteContainer
      multiple
      options={[]}
      value={value}
      freeSolo={canEdit}
      onChange={handleAddTag}
      onBlur={onBlur}
      renderTags={(value) =>
        value.map((option, index) => (
          <CustomChip
            key={index}
            variant='outlined'
            label={option}
            onDelete={canEdit ? () => handleDeleteTag(option) : null}
            deleteIcon={<CloseIcon className='custom-delete-icon' />}
          />
        ))
      }
      renderInput={(params) => (
        <TextFieldContainer
          {...params}
          label={label}
          variant={variant}
          error={!!error}
          helperText={error ? error.message : ""}
          InputProps={{
            ...params.InputProps,
            endAdornment: canEdit ? params.InputProps.endAdornment : null,
          }}
          InputLabelProps={{
            ...params.InputLabelProps,
            shrink: true,
          }}
        />
      )}
      {...props}
    />
  );
}

export default memo(TagInputComponent);

const AutocompleteContainer = styled(Autocomplete)(() => ({
  minWidth: "220px!important",
  maxWidth: "100%!important",
  minHeight: "48px!important",
  maxHeight: "170px!important",
  overflowY: "auto!important",
  overflowX: "hidden!important",
}));

const TextFieldContainer = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    maxHeight: "32px",
    overflow: "hidden",
  },
}));

const CustomChip = styled(Chip)(({ theme }) => ({
  maxHeight: `31px!important`,
  borderRadius: "5px!important",
  marginRight: "5px!important",

  //   FIXME: add styles
  //   backgroundColor: `${theme.palette.background.button}!important`,
  //   color: `${theme.palette.common.white}!important`,
  //   "& .MuiChip-deleteIcon": {
  //     color: `${theme.palette.error.text}!important`,
  //     maxHeight: "60%",
  //   },
  //   "& .MuiChip-deleteIcon:hover": {
  //     color: `${theme.palette.error.hover}!important`,
  //   },
  //   "&:hover": {
  //     backgroundColor: theme.palette.background.buttonTransparent,
  //   },
}));
