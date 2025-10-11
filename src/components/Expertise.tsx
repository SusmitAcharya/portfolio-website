import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Database, Brain, Palette, Zap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import certPython from "@/assets/cert-python.jpg";
import certWebDev from "@/assets/cert-webdev.jpg";
import certJava from "@/assets/cert-java.jpg";
import certBerkeleyStartup from "@/assets/cert-berkeleystartup.jpg";
import certYIICInternship from "@/assets/cert-yiicinternship.png";
import certIJIRTPublishedAIBI from "@/assets/cert-ijirtpublisedaibi.jpg";
import certMUNStudentCoordinator from "@/assets/cert-munstudentcoordinator.jpg";
import certMUNDirector from "@/assets/cert-mundirector.jpg";
import certJU2025 from "@/assets/cert-ju2025.jpg";
import certJU2024 from "@/assets/cert-ju2024.jpg";
import certBoscoCodenza2025 from "@/assets/cert-boscocodenza2025.png";
import certBoscoShoot from "@/assets/cert-boscoshoot.jpg";
import certAuxiCyberhive from "@/assets/cert-auxicyberhive.jpg";
import certBoscoCodenza2024 from "@/assets/cert-boscocodenza2024.jpg";
import certTechElanza2024 from "@/assets/cert-techelanza2024.jpg";
import certTechElanza2023 from "@/assets/cert-techelanza2023.jpg";
import certSilverzoneiiO2023 from "@/assets/cert-silverzoneiio2023.png";
import cert31OpenShotoCup2023 from "@/assets/cert-31openshotocup2023.jpg";
import certBoscoBandW from "@/assets/cert-boscobandw.jpg";

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
  { name: "Published AI-BI Research Manuscript in the IJIRT Volume 12 (October 2025)", image: certIJIRTPublishedAIBI },
  { name: "2023 Silverzone iiO", image: certSilverzoneiiO2023 },
  { name: "2025 Bosco Codenza", image: certBoscoCodenza2025 },
  { name: "2024 Bosco Codenza", image: certBoscoCodenza2024 },
  { name: "2024 Auxi-Cyberhive", image: certAuxiCyberhive },
  { name: "2024 Auxi Tech Elanza (Auxi-Robotica)", image: certTechElanza2024 },
  { name: "2023 Auxi Tech Elanza (Auxi-Robotica)", image: certTechElanza2023 },
  { name: "2025 AUXIB-MUN Student Coordinator", image: ccertMUNStudentCoordinator },
  { name: "2024 AUXIB-MUN Director of Lok Sabha", image: certMUNDirector },
  { name: "2025 JUMUN", image: certJU2025 },
  { name: "2024 JUMUN", image: certJU2024 },
  { name: "31st Open Shoto Cup 2023", image: cert31OpenShotoCup2023 },
  { name: "2025 Bosco Shoot", image: certBoscoShoot },
  { name: "2022 Bosco Black and White", image: certBoscoBandW }
];

const Expertise = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation();

  return (
    <section id="expertise" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-light mb-16 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          My Expertise
        </h2>
        
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className={`wireframe-border hover-lift hover:border-primary/50 transition-all scroll-fade-in ${cardsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: cardsVisible ? `${index * 0.1}s` : '0s' }}
              >
                <CardContent className="p-6">
                  <Icon className="w-10 h-10 mb-4 text-primary transition-transform hover:scale-110" />
                  <h3 className="text-xl font-medium mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div 
          ref={certsRef}
          className={`space-y-8 scroll-fade-in ${certsVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-light">Certificates</h3>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="wireframe-border overflow-hidden hover-lift">
                    <CardContent className="p-3">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-auto border border-border rounded-sm mb-3 hover-scale"
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
