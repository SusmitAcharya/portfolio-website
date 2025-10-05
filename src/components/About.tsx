const About = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-12 animate-slide-up">About Me</h2>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
          <p className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            I am a student, developer, and researcher interested in building technology that solves problems. 
            I love coding, exploring AI, and working on research projects that push boundaries. My focus is on 
            building things that are both practical and creative.
          </p>
          <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Outside of work, I enjoy experimenting with new tools, collaborating with peers, and constantly learning. 
            People who have worked with me say I'm driven, curious, and fun to team up with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
