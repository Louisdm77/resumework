import { motion } from "framer-motion";
import research from "../assets/img/research.png";
import calendar from "../assets/img/calendar.png";

const projects = [
  {
    title: "Resume Optimization & Keyword Strategy",
    subtitle: "Project 01",
    description:
      "Crafted ATS-friendly resumes tailored to specific industries. Optimized structure, keywords, and formatting to improve hiring chances by over 60%.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQEPH_1Ln4mv3w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725807471603?e=2147483647&v=beta&t=Vhl8-ibpiRHFL4mm_EyiN9zg67j4EVeHkuypwmi_Mdg",
  },
  {
    title: "LinkedIn Profile Revamp",
    subtitle: "Project 02",
    description:
      "Redesigned LinkedIn profiles with engaging headlines, summaries, and achievements that attracted recruiters and boosted profile visibility.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYv4ExLMEteRoldKJKd6xfM8H7TeoML3Yug&s",
  },
  {
    title: "Cover Letters & Career Branding",
    subtitle: "Project 03",
    description:
      "Developed personalized cover letters and professional branding materials that helped clients stand out and land interviews with top companies.",
    image:
      "https://cdn-blog.novoresume.com/articles/how-to-write-a-cover-letter-guide/How-to-Write-a-Cover-Letter.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-400 text-center mb-12"
        >
          Projects
        </motion.h3>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-1">
                  {proj.title}
                </h4>
                <h5 className="text-sm font-medium text-slate-400 mb-4">
                  {proj.subtitle}
                </h5>
                <p className="text-sm text-slate-300">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
