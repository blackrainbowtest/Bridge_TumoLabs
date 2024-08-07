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
      {...register("firstName", {
        required: "FirstName is required",
      })}
      error={!!errors.firstName}
      helperText={errors.firstName?.message || ""}
    />
  );
}

export default memo(FirstNameContent);
