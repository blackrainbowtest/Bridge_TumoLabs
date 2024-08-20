import SectionItemContainerComponent from 'components/_shared/SectionItemContainerComponent';
import SectionItemListComponent from 'components/_shared/SectionItemListComponent';
import SectionItemTitleComponent from "components/_shared/SectionItemTitleComponent";
import { memo } from "react";

function ProjectsComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>Projects</SectionItemTitleComponent>
      <SectionItemListComponent columns={2} linkList={[
        {label: 'All Projects', to: '/all-projects'},
        {label: 'Featured Projects', to: '/featured-projects'},
        {label: 'Project Categories', to: '/project-categories'},
        {label: 'Add New Project', to: '/add-new-project'},
        {label: 'Project Success Stories', to: '/project-success-stories'},
        {label: 'Project Guidelines', to: '/project-guidelines'}

      ]}/>
    </SectionItemContainerComponent>
  );
}

export default memo(ProjectsComponent);


