import { motion } from "framer-motion";

const experiences = [
  {
    title: "Professional Resume Writer",
    company: "Freelance / Independent",
    duration: "Jan 2023 – Present",
    responsibilities: [
      "Developed 200+ customized resumes for professionals across industries",
      "Created keyword-optimized CVs that improved ATS compatibility by 70%",
      "Designed compelling cover letters tailored to specific job applications",
      "Collaborated with clients to highlight achievements and career growth",
    ],
  },
  {
    title: "Career Services Consultant",
    company: "CareerBoost Solutions",
    duration: "Aug 2021 – Dec 2022",
    responsibilities: [
      "Guided clients on LinkedIn profile optimization for stronger branding",
      "Provided one-on-one career coaching and interview preparation",
      "Researched market trends to align resumes with industry expectations",
      "Delivered workshops on job search strategies and professional branding",
    ],
  },
  {
    title: "Resume Writing Intern",
    company: "BrightPath Career Services",
    duration: "Jan 2021 – Jul 2021",
    responsibilities: [
      "Assisted senior writers in editing and formatting resumes",
      "Researched keywords for specific roles to improve ATS results",
      "Developed drafts of entry-level resumes and cover letters",
      "Supported clients with mock interviews and feedback sessions",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6"
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-white mb-20"
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-slate-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              {/* Dot */}
              <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg" />

              {/* Card */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-slate-700 hover:border-blue-400 hover:shadow-blue-500/20 transition">
                <h3 className="text-xl font-semibold text-blue-400">
                  {exp.title}
                </h3>
                <p className="text-slate-400 text-sm">{exp.company}</p>
                <span className="text-xs text-slate-500 block mb-4">
                  {exp.duration}
                </span>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
