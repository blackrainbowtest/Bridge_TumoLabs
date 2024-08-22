import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react"
import { useFormContext } from "react-hook-form";

function ProblemChallengeContent(){
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
      return (
        <TextInputComponent
          label='Project Problem Challenge'
          {...register("description", {
            required: "problem challenge name is required",
          })}
          error={!!errors.problem_challenge}
          helperText={errors.problem_challenge?.message || ""}
        />
      );
}
export default memo(ProblemChallengeContent)