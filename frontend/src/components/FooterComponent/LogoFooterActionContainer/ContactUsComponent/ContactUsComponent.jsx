import SectionItemContainerComponent from "components/_shared/SectionItemContainerComponent";
import SectionItemListComponent from "components/_shared/SectionItemListComponent";
import SectionItemTitleComponent from "components/_shared/SectionItemTitleComponent";
import { memo } from "react";

function ContactUsComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>Contact us</SectionItemTitleComponent>
      <SectionItemListComponent
        linkList={[
          { label: "Out contact type 1", to: "/contact1" },
          { label: "Out contact type 2", to: "/contact2" },
          { label: "Out contact type 3", to: "/contact3" },
          { label: "Out contact type 4", to: "/contact4" },
          { label: "Out contact type 5", to: "/contact5" },
        ]}
      />
    </SectionItemContainerComponent>
  );
}

export default memo(ContactUsComponent);
