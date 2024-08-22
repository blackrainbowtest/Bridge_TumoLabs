import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react"
import { useFormContext } from "react-hook-form";

function DescriptionContent(){
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
      return (
        <TextInputComponent
          label='Project Description'
          {...register("description", {
            required: "Description name is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message || ""}
        />
      );
}
export default memo(DescriptionContent)