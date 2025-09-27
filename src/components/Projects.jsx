import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import resume1 from "../assets/img/resume1.webp";
import resume2 from "../assets/img/resume2.webp";
import resume3 from "../assets/img/resume3.webp";
import resume4 from "../assets/img/resume4.webp";
import resume5 from "../assets/img/resume5.webp";
const ResumeCarousel = () => {
  const images = [resume1, resume2, resume3, resume4, resume5];

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 -translate-y-1/2 top-1/2"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 -translate-y-1/2 top-1/2"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className=" py-12 px-4 bg-zinc-300">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Resume Samples We’ve Created
        </h2>
        <p className="text-gray-600 mt-2">
          Browse through some of our professional resume samples designed to get
          you noticed.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-4">
              <img
                src={src}
                alt={`Resume sample ${index + 1}`}
                className="rounded-xl shadow-lg mx-auto border border-gray-200"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResumeCarousel;
