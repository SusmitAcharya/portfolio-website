import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Database, Brain, Palette, Zap, Award } from "lucide-react";

const expertiseAreas = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and best practices"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems and exploring cutting-edge AI research"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing robust data pipelines and optimizing database architectures"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences"
  },
  {
    icon: Zap,
    title: "Research & Innovation",
    description: "Publishing papers and contributing to technological advancement"
  }
];

const certificates = [
  "AWS Solutions Architect",
  "Google Cloud Professional",
  "Machine Learning Specialization",
  "Advanced React Development",
  "Data Science Certification"
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 animate-slide-up">My Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="wireframe-border hover-lift hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-xl font-medium mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-light">Certificates</h3>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="wireframe-border">
                    <CardContent className="flex items-center justify-center p-8 min-h-[120px]">
                      <p className="text-center font-medium">{cert}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
