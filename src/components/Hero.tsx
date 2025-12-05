import { useEffect, useState } from "react";

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
          Presenting to you
          <br />
          <b><span className="font-normal">Susmit Acharya</span></b>
        </h1>
        <div className="w-24 h-0.5 bg-primary mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
