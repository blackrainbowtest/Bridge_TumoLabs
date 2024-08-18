import SectionItemContainerComponent from "components/_shared/SectionItemContainerComponent";
import SectionItemListComponent from 'components/_shared/SectionItemListComponent';
import SectionItemTitleComponent from "components/_shared/SectionItemTitleComponent";
import { memo } from "react";

function AboutUsComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>About us</SectionItemTitleComponent>
      <SectionItemListComponent linkList={[
        {label: 'Our Team', to: '/our-team'},
        {label: 'Our Goal', to: '/our-goal'},
        {label: 'Our Roadmap', to: '/our-roadmap'},

      ]}/>
    </SectionItemContainerComponent>
  );
}

export default memo(AboutUsComponent);
