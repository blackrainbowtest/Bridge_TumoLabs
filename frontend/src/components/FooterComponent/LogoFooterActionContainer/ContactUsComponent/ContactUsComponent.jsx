import SectionItemContainerComponent from "components/_shared/SectionItemContainerComponent";
import SectionItemListComponent from "components/_shared/SectionItemListComponent";
import SectionItemTitleComponent from "components/_shared/SectionItemTitleComponent";
import { memo } from "react";

function ContactUsComponent() {
  return (
    <SectionItemContainerComponent>
      <SectionItemTitleComponent>Contact us</SectionItemTitleComponent>
      <SectionItemListComponent columns={2}
        linkList={[
          { label: "Student Support", to: "/student-support" },
          { label: "Business Inquiries", to: "/business-inquiries" },
          { label: "Internship Opportunities", to: "/internship-opportunities" },
          { label: "Collaboration Requests", to: "/collaboration-requests" },
          { label: "Technical Support", to: "/technical-support" },
          { label: "Feedback", to: "/feedback" },
          { label: "Media Inquiries", to: "/media-inquiries" },
          { label: "Career", to: "/career" },

        ]}
      />
    </SectionItemContainerComponent>
  );
}

export default memo(ContactUsComponent);
