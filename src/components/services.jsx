import React from "react";
import { FaFileAlt, FaEnvelopeOpenText, FaLinkedin } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Resume Writing",
      description:
        "ATS-optimized resumes crafted for your industry and career goals. Designed to get past filters and into interviews.",
      icon: <FaFileAlt size={28} className="text-blue-600" />,
    },
    {
      title: "Cover Letters",
      description:
        "Let us craft a compelling, personalized cover letter that supports your resume and enhances your application.",
      icon: <FaEnvelopeOpenText size={28} className="text-green-600" />,
    },
    {
      title: "LinkedIn Profile",
      description:
        "Enhance your digital presence with an optimized LinkedIn profile that helps recruiters find you with ease.",
      icon: <FaLinkedin size={28} className="text-blue-500" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Every job seeker deserves to stand out. Our professional resume
          writing services are designed to help you move forward with
          confidence—whether you’re re-entering the job market, changing careers,
          or pursuing your next big opportunity. To see the industries we work
          with, click here.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
