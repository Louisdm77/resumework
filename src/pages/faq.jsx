import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";

const faqs = [
  {
    question: "What exactly is an ATS and why should I care?",
    answer:
      "ATS stands for Applicant Tracking System. It's software employers use to filter resumes before a human ever sees them. If your resume isn’t formatted correctly or doesn’t have the right keywords, it may never make it to a recruiter’s desk.",
  },
  {
    question: "Are your resumes optimized for ATS?",
    answer:
      "Yes! Every resume we create is ATS-friendly. We use clean formatting, strategic keywords, and layouts designed to pass through scanning systems effectively.",
  },
  {
    question: "Which industries and job levels do you support?",
    answer:
      "We’ve helped professionals in IT, healthcare, finance, sales, HR, education, federal jobs, and more—ranging from entry-level to senior executives.",
  },
  {
    question: "How does a resume differ from a CV?",
    answer:
      "A resume is concise—usually 1–2 pages—highlighting relevant skills and experience. A CV (Curriculum Vitae) is more comprehensive, often including research, publications, honors, and with no strict length limit.",
  },
  {
    question: "Can you log into my LinkedIn profile and update it?",
    answer:
      "No, for security reasons we don’t log into client accounts. Instead, we provide you with a polished draft that you can easily copy and paste into LinkedIn yourself.",
  },
  {
    question: "Do you write resumes completely from scratch?",
    answer:
      "Yes! While some clients have an existing resume for us to improve, we also create brand-new resumes from scratch using our detailed intake process.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <Header />{" "}
      <div className="max-w-5xl mx-auto text-center mb-12 mt-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          We’ve answered some of the most common questions below. If you don’t
          see yours, feel free to get in touch—we’re just a click away!
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
};

export default FAQ;
