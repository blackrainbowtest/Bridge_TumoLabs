import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext } from "react-hook-form";

function UserNameContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInputComponent
      label='Username'
      {...register("username", {
        required: "UserName is required",
      })}
      error={!!errors.username}
      helperText={errors.username?.message || ""}
    />
  );
}

export default memo(UserNameContent);
