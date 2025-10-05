const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">
          Hello, welcome to
          <br />
          <span className="font-normal">my portfolio.</span>
        </h1>
        <div className="w-24 h-0.5 bg-primary mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
