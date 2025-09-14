import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Henry completely transformed my resume. After using his service, I landed three interviews within two weeks.",
      name: "Olivia Martins",
    },

    {
      quote:
        "The resume and LinkedIn optimization Henry did for me were top-notch. Recruiters started reaching out almost immediately.",
      name: "Daniel Okoro",
    },
    {
      quote:
        "Henry tailored my CV for a competitive role, and I got the job! His attention to detail is second to none.",
      name: "Sophia Johnson",
    },
    {
      quote:
        "I struggled for months with job applications, but after Henry rewrote my resume, I finally secured a role in my dream company.",
      name: "Michael Adeyemi",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-900 py-24 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Testimonials
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2  gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow hover:shadow-lg text-left"
            >
              <p className="text-slate-100 text-lg leading-relaxed mb-4">
                “{t.quote}”
              </p>
              <p className="text-slate-400 font-medium text-sm">– {t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
