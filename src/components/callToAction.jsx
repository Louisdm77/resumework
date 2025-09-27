// CallToAction.jsx
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            The Path to Success Starts Today!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Ready to start landing more interviews with less applications? Join
            the{" "}
            <span className="font-bold text-indigo-400">
              4,000+ professionals
            </span>{" "}
            who have partnered with{" "}
            <span className="font-bold text-indigo-400">ProTouch Careers</span>{" "}
            for expert resume writing services, cover letters, LinkedIn profile
            optimization, and more.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Experience the difference today.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-lg px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            I'm Ready
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Career success"
            className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
