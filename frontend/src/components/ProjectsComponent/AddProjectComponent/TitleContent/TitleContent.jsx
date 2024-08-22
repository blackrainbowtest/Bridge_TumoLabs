import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext } from "react-hook-form";

function TitleContent(){
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
      return (
        <TextInputComponent
          label='Project Name'
          {...register("title", {
            required: "Project name name is required",
          })}
          error={!!errors.title}
          helperText={errors.title?.message || ""}
        />
      );
}
export default memo(TitleContent)