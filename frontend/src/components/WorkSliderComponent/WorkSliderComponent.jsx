import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import WorkSliderItemComponent from "components/WorkSliderItemComponent";
import { useSelector } from "react-redux";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  draggable: true,
  arrows: false,
  swipeToSlide: true,
};

function WorkSliderComponent() {
  const workSlider = useSelector((state) => state?.main?.workSlider);
  return (
    <SliderContainer {...settings}>
      {workSlider.map((slide) => {
        return <WorkSliderItemComponent key={slide.id} slide={slide} />;
      })}
    </SliderContainer>
  );
}

export default memo(WorkSliderComponent);

const SliderContainer = styled(Slider)(({ _ }) => ({
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
