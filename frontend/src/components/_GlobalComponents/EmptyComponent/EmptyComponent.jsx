import { memo } from "react";

function EmptyComponent({ handleClose, ...props }) {
  return <div {...props}>Empty</div>;
}

export default memo(EmptyComponent);
