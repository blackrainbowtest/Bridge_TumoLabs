import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react"
import { useFormContext } from "react-hook-form";

function BudgetContent(){
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
      return (
        <TextInputComponent
        label=''
        adornment='AMD'
          {...register("budget", {
            required: "Budget field must be required",
          })}
          error={!!errors.budget}
          helperText={errors.budget?.message || ""}   
        />
      );
}
export default memo(BudgetContent)