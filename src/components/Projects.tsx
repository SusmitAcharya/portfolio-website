import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    type: "Web Application",
    description: "A comprehensive analytics dashboard leveraging machine learning for predictive insights and data visualization.",
    tech: "React, Python, TensorFlow, PostgreSQL",
    link: "#",
    github: "#"
  },
  {
    title: "Distributed Systems Research",
    type: "Research Paper",
    description: "Published research on optimizing consensus algorithms in distributed networks for improved fault tolerance.",
    tech: "Go, Raft Protocol, Kubernetes",
    link: "#",
    github: "#"
  },
  {
    title: "Mobile Health Monitoring App",
    type: "Mobile Application",
    description: "Cross-platform health tracking application with real-time biometric monitoring and personalized recommendations.",
    tech: "React Native, Firebase, ML Kit",
    link: "#",
    github: "#"
  },
  {
    title: "Blockchain Voting System",
    type: "Open Source Project",
    description: "Secure and transparent voting system built on blockchain technology ensuring anonymity and verifiability.",
    tech: "Solidity, Ethereum, Web3.js",
    link: "#",
    github: "#"
  },
  {
    title: "Natural Language Processing Pipeline",
    type: "Research Project",
    description: "Advanced NLP pipeline for multilingual sentiment analysis and entity recognition with state-of-the-art accuracy.",
    tech: "Python, BERT, spaCy, Docker",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 animate-slide-up">My Projects</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {projects.map((project, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="wireframe-border rounded-lg px-6 bg-background hover:border-primary/50 transition-colors"
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
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                    <a 
                      href={project.github} 
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
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
