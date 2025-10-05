import { Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="connect" className="py-24 px-6 border-t wireframe-border">
      <div className="container mx-auto max-w-4xl text-center space-y-12">
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-light">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's build something amazing together. Whether you have a project in mind, 
            want to collaborate on research, or just want to say hi—click below to reach out.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="wireframe-border hover:border-primary/50 hover:bg-accent/10 transition-all"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="wireframe-border hover:border-primary/50 hover:bg-accent/10 transition-all"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
        </div>
        
        <div className="pt-12 text-sm text-muted-foreground space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p>Designed & developed with precision and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
