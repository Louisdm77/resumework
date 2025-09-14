import { motion } from "framer-motion";

const services = [
  {
    label: "Resume Writing",
    icon: "📝",
    desc: "Crafting tailored resumes that highlight your strengths, skills, and achievements.",
  },
  {
    label: "Cover Letters",
    icon: "📄",
    desc: "Writing persuasive cover letters that capture attention and showcase your value.",
  },
  {
    label: "LinkedIn Optimization",
    icon: "💼",
    desc: "Transforming LinkedIn profiles into powerful personal branding tools.",
  },
  {
    label: "Job Search Strategy",
    icon: "🎯",
    desc: "Guiding clients with effective strategies to secure interviews faster.",
  },
  {
    label: "Interview Preparation",
    icon: "🎤",
    desc: "Coaching clients to confidently communicate their skills and experience.",
  },
  {
    label: "Career Consulting",
    icon: "🌟",
    desc: "Providing clarity, direction, and guidance for professional growth.",
  },
];

// Strong, visible motion on small screens
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.15 },
  }),
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-slate-100"
    >
      {/* Subtle background glow (same palette, very low opacity) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <motion.h3
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-white"
          >
            How I Can Help Your Career
          </motion.h3>

          {/* Drawn underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="h-1 w-28 origin-left rounded-full bg-blue-500/80 mb-6"
          />

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg text-slate-300 leading-relaxed mb-4"
          >
            I specialize in creating{" "}
            <span className="text-blue-400 font-semibold">
              professional, results-driven resumes
            </span>{" "}
            that help you stand out in today’s competitive job market.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate-300 leading-relaxed"
          >
            From resumes and cover letters to LinkedIn profiles and interview
            prep, I bring{" "}
            <span className="italic text-blue-300">
              clarity, confidence, and strategy
            </span>{" "}
            to your career journey.
          </motion.p>
        </motion.div>

        {/* Right: Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={gridContainer}
        >
          {services.map(({ label, icon, desc }, i) => (
            <motion.div
              key={label}
              variants={card}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1.2, -1.2, 0],
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition rounded-2xl p-6 shadow-lg"
              aria-label={label}
            >
              {/* Icon pop-in (visible & fun on mobile) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -12, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: i * 0.05,
                }}
                className="text-4xl mb-3"
              >
                {icon}
              </motion.div>

              <h4 className="text-lg font-semibold text-white mb-2">{label}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>

              {/* Bottom accent line animates in for extra visibility */}
              <motion.div
                initial={{ width: 0, opacity: 0.4 }}
                whileInView={{ width: "40%", opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="mt-4 h-0.5 rounded bg-blue-500/70"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional CTA row to make the section feel complete */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 md:px-10 mt-14"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
          <p className="text-slate-300">
            Ready to land more interviews and opportunities?
            <span className="text-white font-semibold">
              {" "}
              Let’s work together.
            </span>
          </p>
          <a
            href="#contact"
            className="inline-block rounded-xl bg-blue-600 hover:bg-blue-500 transition px-5 py-3 text-white font-medium text-center"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </section>
  );
}
