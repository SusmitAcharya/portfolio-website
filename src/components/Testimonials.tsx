import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Research Advisor, MIT",
    quote: "One of the most dedicated and innovative researchers I've worked with. Their ability to translate complex theoretical concepts into practical solutions is exceptional.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, TechStart Inc.",
    quote: "Their technical expertise and problem-solving skills significantly accelerated our product development. A pleasure to collaborate with on challenging projects.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Senior Developer, CloudScale",
    quote: "Amazing team player with deep knowledge across the stack. Always brings creative solutions to the table and mentors others generously.",
    rating: 5
  },
  {
    name: "Prof. James Lin",
    role: "Computer Science Department Head",
    quote: "Demonstrates exceptional curiosity and drive. Their research contributions have been noteworthy, and they're always pushing boundaries.",
    rating: 5
  },
  {
    name: "Aisha Patel",
    role: "Product Manager, DataFlow",
    quote: "Incredibly reliable and communicative. Takes ownership of complex features and delivers high-quality work consistently. Fun to work with too!",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Founder, InnovateLabs",
    quote: "Their combination of technical skill and creative thinking is rare. Built our core platform from scratch and exceeded all expectations.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 animate-slide-up">Testimonials</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="wireframe-border hover-lift hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
