import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext } from "react-hook-form";

function LastNameContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInputComponent
      label='Last name'
      {...register("last_name", {
        required: "Last name is required",
      })}
      error={!!errors.last_name}
      helperText={errors.last_name?.message || ""}
    />
  );
}

export default memo(LastNameContent);
