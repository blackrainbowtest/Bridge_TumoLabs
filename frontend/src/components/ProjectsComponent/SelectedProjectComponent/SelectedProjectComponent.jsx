import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { memo } from "react";

function SelectedProjectComponent() {
  return (
    <MainContainerColumn>
      <BreadcrumbNavigationComponent />
      555
    </MainContainerColumn>
  );
}

export default memo(SelectedProjectComponent);
