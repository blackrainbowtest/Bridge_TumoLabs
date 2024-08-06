import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import WorkSliderItemComponent from "components/WorkSliderItemComponent";
import { workSliderSettings } from "settings/sliderSettings";
import bgImage1 from "static/images/noImages/ttw1.jpg"
import bgImage2 from "static/images/noImages/ttw2.jpg"
import bgImage3 from "static/images/noImages/ttw3.jpg"
import bgImage4 from "static/images/noImages/ttw4.jpg"

function WorkSliderComponent() {
  const workSlider = [
    {
      id: "WS001",
      bgImage: bgImage1,
      title: "LLP title",
      description: "LLP description",
      url: null,
    },
    {
      id: "WS002",
      bgImage: bgImage2,
      title: "LBD title",
      description: "LBD description",
      url: null,
    },
    {
      id: "WS003",
      bgImage: bgImage3,
      title: "LBT title",
      description:"LBT description",
      url: null,
    },
    {
      id: "WS003",
      bgImage: bgImage4,
      title: "PPL title",
      description:"PPL description",
      url: null,
    },
  ];

  return (
    <SliderContainer {...workSliderSettings}>
      {workSlider.map((slide) => {
        return <WorkSliderItemComponent key={slide.id} slide={slide} />;
      })}
    </SliderContainer>
  );
}

export default memo(WorkSliderComponent);

const SliderContainer = styled(Slider)(({ theme }) => ({
  minWidth: "100%",
  minHeight: "600px",
  userSelect: "none",
  "& .slick-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .slick-list": {
    width: "100%",
    height: "100%",
  },
  "& .slick-track": {
    width: "100%",
    height: "100%",
  },
  "& .slick-slide > div": {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
