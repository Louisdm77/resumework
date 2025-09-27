import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NumbersSpeak from "../components/numbers";
import Services from "../components/services";
import ResumeProcess from "../components/resumeProcess";
import Partnerships from "../components/partnerships";
import Testimonials from "../components/Testimonials";
import ResumeCarousel from "../components/Projects";
import CallToAction from "../components/callToAction";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NumbersSpeak />
      <Services />
      <ResumeProcess />
      <Partnerships />
      <Testimonials />
      <CallToAction />
      <ResumeCarousel />
      <Contact />
    </div>
  );
};

export default Home;
