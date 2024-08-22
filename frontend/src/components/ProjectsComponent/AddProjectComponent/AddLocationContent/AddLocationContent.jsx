import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext } from "react-hook-form";

function AddLocationContent() {
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
      return (
        <TextInputComponent
          {...register("location", {
            required: "Location name is required",
          })}
          error={!!errors.location}
          helperText={errors.location?.message || ""}   
        />
      );

}
export default memo(AddLocationContent)