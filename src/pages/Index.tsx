import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
