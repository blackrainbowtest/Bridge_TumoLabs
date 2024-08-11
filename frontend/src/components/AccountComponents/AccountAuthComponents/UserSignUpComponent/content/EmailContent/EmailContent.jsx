import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext } from "react-hook-form";

function EmailContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInputComponent
      label='Email'
      type='email'
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Invalid email address",
        },
      })}
      error={!!errors.email}
      helperText={errors.email?.message || ""}
    />
  );
}

export default memo(EmailContent);
