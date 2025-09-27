import React from "react";
import { FaBriefcase, FaMicrophone, FaDollarSign } from "react-icons/fa";

const Partnerships = () => {
  const services = [
    {
      icon: <FaBriefcase className="w-8 h-8 text-blue-400" />,
      title: "Personalized Job Search Plans",
      desc: "Get a step-by-step roadmap tailored to your industry, career stage, and goals—built in partnership with Next Big Job.",
    },
    {
      icon: <FaMicrophone className="w-8 h-8 text-green-400" />,
      title: "Interview Practice Sessions",
      desc: "Sharpen your confidence with mock interviews that prepare you for both common and challenging questions.",
    },
    {
      icon: <FaDollarSign className="w-8 h-8 text-yellow-400" />,
      title: "Salary Negotiation Coaching",
      desc: "Master the art of evaluating offers, presenting your value, and negotiating with confidence for better outcomes.",
    },
  ];

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Expanded Career Support Through{" "}
          <span className="text-blue-400">Trusted Partnerships</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
