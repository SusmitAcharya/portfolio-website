import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div 
        className="text-center space-y-8 animate-fade-in parallax-slow"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">
          Design that works,
          <br />
          <span className="font-normal">Code that delivers!</span>
        </h1>
        <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="mailto:susmitacharya.official@gmail.com">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        <div className="w-24 h-0.5 bg-primary mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
