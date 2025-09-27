import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";

const testimonials = [
  {
    name: "Brian H.",
    role: "Finance Associate",
    text: `"ProTouch Careers is a genius at framing your work history in the absolute best light. Whether you need a resume reworked or a cover letter template that'll catch eyes, they are the one you'll want to hire."`,
  },
  {
    name: "Rico B.",
    role: "Technology Executive",
    text: `"Recently, I decided to make a career change and realized updating my resume was the first step. ProTouch Careers was incredibly patient throughout this process. Highly recommended for a complete overhaul."`,
  },
  {
    name: "Diana N.",
    role: "Senior HR Executive",
    text: `"I hadn’t updated my resume in 12 years. ProTouch Careers helped me highlight my accomplishments and skills quickly. Feedback was turned around so fast. I’d definitely hire them again."`,
  },
  {
    name: "Shawn B.",
    role: "Director of Marketing",
    text: `"Ready to catapult your career? ProTouch Careers is your career turbocharger. With them, you won’t just land a job—you’ll make an entrance."`,
  },
  {
    name: "Linda K.",
    role: "Healthcare Professional",
    text: `"They understood my industry jargon and translated it into a compelling resume that finally got me interviews."`,
  },
  {
    name: "James W.",
    role: "Software Engineer",
    text: `"I’ve always struggled to explain my skills. ProTouch Careers showcased my projects in a way recruiters loved."`,
  },
  {
    name: "Amira F.",
    role: "Project Manager",
    text: `"The LinkedIn optimization service made recruiters start reaching out to me instead of the other way around."`,
  },
  {
    name: "Michael R.",
    role: "Veteran Transitioning to Civilian Career",
    text: `"They knew exactly how to translate my military experience into business language. I now have a job in tech."`,
  },
  {
    name: "Sophia L.",
    role: "Marketing Specialist",
    text: `"My resume went from bland to brilliant. I landed a new job within weeks."`,
  },
  {
    name: "David P.",
    role: "Executive Assistant",
    text: `"The cover letter service gave me confidence. Hiring managers actually responded for the first time."`,
  },
  {
    name: "Olivia S.",
    role: "Financial Analyst",
    text: `"My documents were ATS-optimized and easy to read. I got three interviews in the first month."`,
  },
  {
    name: "Ethan J.",
    role: "Mechanical Engineer",
    text: `"I was laid off and didn’t know where to start. ProTouch Careers guided me with a plan and a killer resume."`,
  },
  {
    name: "Rachel C.",
    role: "Teacher",
    text: `"Transitioning into corporate training felt impossible until they reframed my experience. I landed my first role."`,
  },
  {
    name: "Kevin B.",
    role: "Operations Manager",
    text: `"The process was smooth, transparent, and collaborative. My resume finally reflects my leadership."`,
  },
  {
    name: "Hannah T.",
    role: "Student",
    text: `"As a fresh graduate, I had nothing but coursework. They made it shine. I got my first internship quickly."`,
  },
  {
    name: "Chris M.",
    role: "Sales Professional",
    text: `"My resume went from ignored to noticed. I had recruiters calling me within a week."`,
  },
  {
    name: "Isabella G.",
    role: "Human Resources Coordinator",
    text: `"ProTouch Careers taught me how to present myself better. My resume and LinkedIn now align perfectly."`,
  },
  {
    name: "Leo A.",
    role: "Data Analyst",
    text: `"The way they highlighted my achievements with numbers was brilliant. My interviews doubled."`,
  },
  {
    name: "Victoria Z.",
    role: "C-Suite Executive",
    text: `"At this level, I needed a resume that spoke to boards and investors. They delivered flawlessly."`,
  },
  {
    name: "Daniel K.",
    role: "Entrepreneur",
    text: `"Even as a business owner, I needed help. They wrote a professional bio that won me consulting gigs."`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <Header />
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Trusted by Thousands of Job Seekers
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Success stories from professionals who partnered with{" "}
          <span className="font-semibold">ProTouch Careers</span> and landed
          their dream jobs.
        </p>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="break-inside-avoid p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">{t.text}</p>
              <div className="font-semibold text-indigo-600">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Testimonials;
