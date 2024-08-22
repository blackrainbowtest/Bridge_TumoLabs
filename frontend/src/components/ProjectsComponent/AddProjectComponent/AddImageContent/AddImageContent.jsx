import { memo } from "react";

const { Skeleton } = require("@mui/material");

function AddImageContent(){
    return(<Skeleton width={400} height={80}>

    </Skeleton>)
}
export default memo(AddImageContent)