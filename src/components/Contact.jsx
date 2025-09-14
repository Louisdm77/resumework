import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-slate-100 px-4 text-center"
    >
      <div className="max-w-xl mx-auto bg-slate-800 border border-slate-700 p-10 rounded-2xl shadow-xl">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-400 mb-6"
        >
          Let’s Get Your Career Moving
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-300 mb-8 leading-relaxed"
        >
          Ready to land more interviews and opportunities? Reach out today and
          let’s create a resume, cover letter, or LinkedIn profile that truly
          represents you.
        </motion.p>

        <div className="space-y-4 text-left text-sm text-slate-300">
          <p>
            <span className="text-slate-400 font-medium">Email:</span>{" "}
            <a
              href="mailto:henry2580@gmail.com"
              className="text-blue-400 hover:underline"
            >
              henry2580@gmail.com
            </a>
          </p>
          <p>
            <span className="text-slate-400 font-medium">Phone:</span>{" "}
            <a
              href="tel:+2348103048060"
              className="text-blue-400 hover:underline"
            >
              +234-902-930-2950
            </a>
          </p>
          <p>
            <span className="text-slate-400 font-medium">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/Henry"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/henry
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
