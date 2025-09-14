import { motion } from "framer-motion";
import img from "../assets/img/fr.jpg";

const text =
  "Crafting powerful, keyword-optimized resumes and LinkedIn profiles that help professionals stand out, land interviews, and secure their dream jobs.";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-24 md:py-32"
      id="hero"
    >
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="https://thumbs.dreamstime.com/b/african-businessman-looking-camera-handsome-folded-hands-43192684.jpg"
            alt="Francis Inaku - Resume Writer"
            className="w-30 h-30 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-600 shadow-xl"
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-yellow-100"
        >
          Hi, I’m Henry Akwaji
        </motion.h2>

        {/* Typewriter Subtext */}
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-yellow-200"
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }} // appears after typing finishes
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
            className="px-6 py-3 bg-amber-600 text-white font-medium rounded-xl shadow-lg hover:bg-amber-700 transition"
          >
            Work With Me
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
            className="px-6 py-3 bg-white text-stone-800 font-medium rounded-xl shadow-lg hover:bg-yellow-100 transition"
          >
            See My Work
          </motion.a>
        </motion.div>

        <motion.div className="mt-6">
          <motion.a
            href="https://calendly.com/henry2580/free-discovery-call"
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
            className="px-6 py-3 bg-white text-stone-800 font-medium rounded-xl shadow-lg hover:bg-yellow-100 transition"
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
