import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "AI Powered Business Intelligence Dashboard",
    type: "Research Paper",
    description: "I built a low-cost AI-powered Business Intelligence Dashboard for local MSMEs in India (specifically the Greater Kolkata Region) who lack expertise and resources for implementing existing global AI systems, as a part of my 'Framework for Leveraging A.I. for Strategic Growth in Small-Scale Enterprises' research project, published in IJIRT Volume 12 (October 2025). Covered in depth below in Case Studies",
    tech: "Python, Vite, ReactJS, NodeJS, PostgresSQL",
    link: "https://ijirt.org/article?manuscript=185126",
    github: "https://github.com/SusmitAcharya/nivritti_ai"
  }
];

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-light mb-16 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          My Projects
        </h2>
        
        <Accordion 
          ref={accordionRef}
          type="single" 
          collapsible 
          className={`space-y-4 scroll-fade-in ${accordionVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="wireframe-border rounded-lg px-6 bg-background hover:border-primary/50 transition-all hover-lift"
              style={{ transitionDelay: accordionVisible ? `${index * 0.1}s` : '0s' }}
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.type}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div>
                    <span className="text-sm font-medium">Technologies: </span>
                    <span className="text-sm text-muted-foreground">{project.tech}</span>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-all hover:gap-3 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                    <a 
                      href={project.github} 
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-all hover:gap-3 group"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Source Code
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Projects;
