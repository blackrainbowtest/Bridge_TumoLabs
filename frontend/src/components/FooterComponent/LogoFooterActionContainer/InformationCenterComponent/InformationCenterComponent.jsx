import SectionItemContainerComponent from 'components/_shared/SectionItemContainerComponent';
import SectionItemListComponent from 'components/_shared/SectionItemListComponent';
import SectionItemTitleComponent from 'components/_shared/SectionItemTitleComponent';
import { memo } from "react";

function InformationCenterComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>Information center</SectionItemTitleComponent>
      <SectionItemListComponent linkList={[
        {label: 'Latest Updates', to: '/latest-updates'},
        {label: 'Press Releases', to: '/press-releases'},
        {label: 'Events', to: '/events'},
        {label: 'Blog', to: '/blog'},

      ]}/>
    </SectionItemContainerComponent>
  );
}

export default memo(InformationCenterComponent);
