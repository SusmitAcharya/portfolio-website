import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Database, Brain, Palette, Zap, Award } from "lucide-react";
import certPython from "@/assets/cert-python.jpg";
import certWebDev from "@/assets/cert-webdev.jpg";
import certJava from "@/assets/cert-java.jpg";
import certBerkeleyStartup from "@/assets/cert-berkeleystartup.jpg";
import certYIICInternship from "@/assets/cert-yiicinternship.png";
import certIJIRTPublishedAIBI from "@/assets/cert-ijirtpublishedaibi.jpg";

const expertiseAreas = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Building scalable web applications with modern frameworks and best practices"
  },
  {
    icon: Code,
    title: "Python",
    description: "Developing intelligent systems using Python and exploring cutting-edge AI tools"
  },
  {
    icon: Code,
    title: "Java",
    description: "Building robust applications with the help of Java"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences"
  },
  {
    icon: Zap,
    title: "Research & Innovation",
    description: "Published Researcher in the field of Computer Science and AI, contributing to technological advancement"
  }
];

const certificates = [
  { name: "100 Days of Code: Python Bootcamp", image: certPython },
  { name: "The Complete Full Stack Web Development Bootcamp", image: certWebDev },
  { name: "Android Java Masterclass", image: certJava },
  { name: "Entrepreneurship for All by BerekeleyX", image: certBerkeleyStartup },
  { name: "YIIC 4.0 Internship at Scaler School of Technology", image: certYIICInternship },
  { name: "Published AI-BI Research Manuscript in the IJIRT Volume 12 (October 2025)", image: certIJIRTPublishedAIBI }
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
                  <Card className="wireframe-border overflow-hidden">
                    <CardContent className="p-3">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-auto border border-border rounded-sm mb-3"
                      />
                      <p className="text-center font-medium text-sm">{cert.name}</p>
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
