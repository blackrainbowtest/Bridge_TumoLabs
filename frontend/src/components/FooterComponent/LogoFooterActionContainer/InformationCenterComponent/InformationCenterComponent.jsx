import SectionItemContainerComponent from 'components/_shared/SectionItemContainerComponent';
import SectionItemListComponent from 'components/_shared/SectionItemListComponent';
import SectionItemTitleComponent from 'components/_shared/SectionItemTitleComponent';
import { memo } from "react";

function InformationCenterComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>Information center</SectionItemTitleComponent>
      <SectionItemListComponent linkList={[
        {label: 'Info link 1', to: '/info1'},
        {label: 'Info link 2', to: '/info2'},
        {label: 'Info link 3', to: '/info3'},
      ]}/>
    </SectionItemContainerComponent>
  );
}

export default memo(InformationCenterComponent);
