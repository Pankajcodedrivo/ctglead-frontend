import Slider from "react-slick";
import rightArrow from "../assets/images/right-arrow.svg"
import leftArrow from "../assets/images/left-arrow.svg"
import profile from "../assets/images/profile.png"
import AgenciesSlide from "./AgenciesSlide";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <img src={rightArrow} alt="Next" />
    </div>
  );
};
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <img src={leftArrow} alt="Previous" />
    </div>
  );
};
const AgenciesSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 767,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="agencies-slider">
            <Slider {...settings}>
                <div>
                    <AgenciesSlide img={profile} title="Ryan Philips" subtitle="CEO" desc="Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus." />
                </div>
                <div>
                    <AgenciesSlide img={profile} title="Ryan Philips" subtitle="CEO" desc="Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus." />
                </div>
                <div>
                    <AgenciesSlide img={profile} title="Ryan Philips" subtitle="CEO" desc="Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus." />
                </div>
                <div>
                    <AgenciesSlide img={profile} title="Ryan Philips" subtitle="CEO" desc="Lorem ipsum dolor sit amet consectetur. Accumsan sagittis augue sed viverra. Donec in sit risus sagittis faucibus adipiscing. Et malesuada morbi faucibus." />
                </div>
            </Slider>
        </div>
    )
};

export default AgenciesSlider;