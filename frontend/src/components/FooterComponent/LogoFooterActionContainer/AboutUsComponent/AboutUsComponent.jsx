import SectionItemContainerComponent from "components/_shared/SectionItemContainerComponent";
import SectionItemListComponent from 'components/_shared/SectionItemListComponent';
import SectionItemTitleComponent from "components/_shared/SectionItemTitleComponent";
import { memo } from "react";

function AboutUsComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>About us</SectionItemTitleComponent>
      <SectionItemListComponent linkList={[
        {label: 'Some info about us 1', to: '/aboutUs1'},
        {label: 'Some info about us 2', to: '/aboutUs2'},
      ]}/>
    </SectionItemContainerComponent>
  );
}

export default memo(AboutUsComponent);
