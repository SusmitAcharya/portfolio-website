import { Home, Lightbulb, FolderOpen, FileText, MessageSquare, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "expertise", label: "Expertise", icon: Lightbulb },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "case-studies", label: "Case Studies", icon: FileText },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm wireframe-border border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {isMobile ? (
            <>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button
                onClick={() => scrollToSection("connect")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-subtle"
                size="sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Connect With Me
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm font-medium"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
              <Button
                onClick={() => scrollToSection("connect")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-subtle"
              >
                <Mail className="w-4 h-4 mr-2" />
                Connect With Me
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
