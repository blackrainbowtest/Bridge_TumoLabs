import { memo } from "react";

function EmptyComponent({ handleClose }) {
  return <div>Empty</div>;
}

export default memo(EmptyComponent);
