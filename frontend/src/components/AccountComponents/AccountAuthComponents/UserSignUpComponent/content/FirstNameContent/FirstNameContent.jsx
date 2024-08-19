import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext } from "react-hook-form";

function FirstNameContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInputComponent
      label='First name'
      {...register("first_name", {
        required: "First name is required",
      })}
      error={!!errors.first_name}
      helperText={errors.first_name?.message || ""}
    />
  );
}

export default memo(FirstNameContent);
