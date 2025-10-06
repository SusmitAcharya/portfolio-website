import aboutPhoto from "@/assets/susmit-headshot-bw-yellowbg.png";

const About = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light mb-12 animate-slide-up">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              I’m Susmit, a front-end developer and UI/UX designer focused on creating clean, efficient, and meaningful digital products. 
              My main skills are in modern web design, responsive development, and making intuitive user experiences. My thought process is straightforward: 
              every design should have a purpose, every pixel should have logic, and every line of code should promote clarity. I don’t just create what looks good; 
              I create what works.
            </p>
            <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Over the past few years, I’ve built interfaces, prototypes, and full-scale web projects that combine usability, performance, and design sensibility. 
              I primarily work with HTML, CSS, JavaScript, and modern front-end frameworks. Beyond the screen, I’ve led projects that connect AI tools with 
              real-world applications, such as education apps and business automation, turning ideas into structured, functional systems. My clients and 
              collaborators trust me because I listen, iterate quickly, and deliver polished results. My approach is clear, based on data, and focused on building 
              long-term reliability.
            </p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <img 
              src={aboutPhoto} 
              alt="About me"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
