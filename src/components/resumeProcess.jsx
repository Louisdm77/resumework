import React from "react";
import { FaShoppingCart, FaWpforms, FaPenNib } from "react-icons/fa";

const ResumeProcess = () => {
  const steps = [
    {
      title: "Purchase Package",
      description:
        "Select your experience level to choose a package that fits your needs and career goals.",
      icon: <FaShoppingCart size={30} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Submit Questionnaire",
      description:
        "Share your background, goals, and any supporting documents.",
      icon: <FaWpforms size={30} />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Writing Begins",
      description:
        "You get matched with a certified resume writer to begin crafting your new resume.",
      icon: <FaPenNib size={30} />,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#3b82f6,_transparent_40%),radial-gradient(circle_at_bottom_right,_#9333ea,_transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Headline */}
        <div className="bg-slate-600 text-white w-full bg-opacity-25 my-10 p-6 backdrop-blur-md rounded-b-full">
          <h2 className="text-4xl font-extrabold  mb-4">
            Constantly Applying But Not Getting Interviews?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            Let’s fix that. We write resumes that get noticed and help you land
            more interviews, faster.
          </p>

          {/* CTA */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
            Choose My Package
          </button>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold text-gray-800 mt-16 mb-3">
          Less Complexity. More Interviews.
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our 3-Step Resume Writing Process
        </p>
        <p className="text-gray-500 max-w-4xl mx-auto mb-12">
          No fluff, no confusion – just results. Our process is designed to save
          you time, reduce stress, and help you move your job search forward.
          Whether you’re changing careers, starting fresh, or pursuing
          leadership, we keep it simple so you can focus on what matters:
          landing interviews.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 transition transform"
            >
              {/* Step Circle */}
              <div
                className={`mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white text-xl font-bold shadow-lg mb-6`}
              >
                {idx + 1}
              </div>
              {/* Icon */}
              <div
                className={`mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white shadow-md`}
              >
                {step.icon}
              </div>
              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16">
          <button className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
            Start Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeProcess;
