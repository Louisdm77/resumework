import React from "react";

const NumbersSpeak = () => {
  const stats = [
    { label: "Resumes Written", value: "4,000+" },
    { label: "Clients Served", value: "2,500+" },
    { label: "5-Star Reviews", value: "2,000+" },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Numbers Speak
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <p className="text-3xl font-extrabold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSpeak;
