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
        <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Expertise</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>Case Studies</span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Testimonials</span>
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
