import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/1.png";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "lightgray",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        textAlign: "center",
        lineHeight: "30px",
      }}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "lightgray",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        textAlign: "center",
        lineHeight: "30px",
      }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
};

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for large devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [img1, img2, img3];

  return (
    <section className="w-full h-[60vh] flex justify-center items-center">
      <div className="container mx-auto w-[80%] ">
        <h3 className="text-center font-semibold text-xl lg:text-3xl text-red-600 mb-2">
          Our Clients
        </h3>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-40 mx-auto h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
