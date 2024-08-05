import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import WorkSliderItemComponent from "components/WorkSliderItemComponent";
import { workSliderSettings } from "settings/sliderSettings";
import { useSelector } from "react-redux";

function WorkSliderComponent() {
  const workSlider = useSelector((state) => state?.main?.workSlider);
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
