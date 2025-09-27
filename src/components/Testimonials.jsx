import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Brian H.",
    role: "Finance Associate",
    feedback:
      "Pro Career is a genius at framing your work history in the absolute best light. Whether you need a resume reworked or are looking for a cover letter template that'll catch eyes, they are the one you'll want to hire.",
  },
  {
    name: "Rico B.",
    role: "Technology Executive",
    feedback:
      "Recently, I decided to make a career change and realized updating my resume was the first step. Pro Career was incredibly patient throughout this process. I highly recommend them to anyone needing a resume refresh or complete overhaul.",
  },
  {
    name: "Diana N.",
    role: "Senior HR Executive",
    feedback:
      "Pro Career was great! I hadn’t updated my resume in 12 years and they helped me highlight my accomplishments and skills. Feedback was quickly implemented. I’d definitely work with them again.",
  },
  {
    name: "Shawn B.",
    role: "Director of Marketing",
    feedback:
      "Ready to catapult your career to dizzying heights? Pro Career is your ticket to the big leagues. They are not just professional; they are your personal career turbocharger. With them, your future isn’t just bright—it's blinding.",
  },
  {
    name: "Elena G.",
    role: "Healthcare Specialist",
    feedback:
      "I felt stuck in my job search, but Pro Career completely transformed my resume and LinkedIn profile. Within weeks, I was landing interviews at companies I never thought possible.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headings */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Trusted by Thousands of Job Seekers Who Got Hired with{" "}
          <span className="text-blue-600">Pro Career</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Success Stories from Real Clients
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx}>
              <div className="bg-gray-50 rounded-2xl shadow-lg px-8 py-12 max-w-3xl mx-auto">
                <FaQuoteLeft className="text-blue-500 text-3xl mx-auto mb-4" />
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                  "{t.feedback}"
                </p>
                <h4 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
