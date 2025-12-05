import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen ${isLoading ? "overflow-hidden" : ""}`}>
        {!isLoading && <Navbar />}
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <CaseStudies />
        <Testimonials />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
