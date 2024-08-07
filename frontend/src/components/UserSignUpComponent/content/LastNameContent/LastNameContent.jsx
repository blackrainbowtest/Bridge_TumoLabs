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
      {...register("lastName", {
        required: "LastName is required",
      })}
      error={!!errors.lastName}
      helperText={errors.lastName?.message || ""}
    />
  );
}

export default memo(LastNameContent);
