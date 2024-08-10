import SectionItemContainerComponent from 'components/_shared/SectionItemContainerComponent';
import SectionItemListComponent from 'components/_shared/SectionItemListComponent';
import SectionItemTitleComponent from "components/_shared/SectionItemTitleComponent";
import { memo } from "react";

function ProjectsComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>Projects</SectionItemTitleComponent>
      <SectionItemListComponent linkList={[
        {label: 'project type 1', to: '/project1'},
        {label: 'project type 2', to: '/project2'},
        {label: 'project type 3', to: '/project3'},
        {label: 'project type 4', to: '/project4'},
        {label: 'project type 5', to: '/project5'}
      ]}/>
    </SectionItemContainerComponent>
  );
}

export default memo(ProjectsComponent);


