import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Skills from "./components/ServicesSkillsSection";
import Toolkit from "./components/Toolkit";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import NumbersSpeak from "./components/numbers";
import Services from "./components/services";
import ResumeProcess from "./components/resumeProcess";
import Partnerships from "./components/partnerships";
import router from "../routes";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <RouterProvider router={router} />
    // <div className="bg-gray-50 text-gray-800">
    //   <Header />
    //   <main className="pt-16 overflow-x-hidden">
    //     <Hero />
    //     <NumbersSpeak />
    //     <Services />
    //     <ResumeProcess />
    //     <Partnerships />
    //     <About />
    //     <ExperienceSection />
    //     <Skills />
    //     <Projects />
    //     {/* <Toolkit /> */}
    //     <Testimonials />
    //     <Contact />
    //   </main>
    // </div>
  );
}
