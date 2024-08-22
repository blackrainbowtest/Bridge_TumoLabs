import { Skeleton } from "@mui/material";
import { memo } from "react";

function DurationContent(){
return(
    <Skeleton width={600} height={400}>

    </Skeleton>
)
}
export default memo(DurationContent)