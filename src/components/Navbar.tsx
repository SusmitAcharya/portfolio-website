import { Home, Lightbulb, FolderOpen, FileText, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm wireframe-border border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="p-2 hover:bg-accent/10 rounded transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="p-2 hover:bg-accent/10 rounded transition-colors"
              aria-label="My Expertise"
            >
              <Lightbulb className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="p-2 hover:bg-accent/10 rounded transition-colors"
              aria-label="My Projects"
            >
              <FolderOpen className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="p-2 hover:bg-accent/10 rounded transition-colors"
              aria-label="Case Studies"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="p-2 hover:bg-accent/10 rounded transition-colors"
              aria-label="Testimonials"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
          <Button
            onClick={() => scrollToSection("connect")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-subtle"
          >
            <Mail className="w-4 h-4 mr-2" />
            Connect With Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
