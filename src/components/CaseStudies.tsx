import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Scaling AI Infrastructure for 1M+ Users",
    problem: "A rapidly growing AI startup needed to scale their inference pipeline to handle 1M+ daily requests while maintaining sub-second response times.",
    process: "Implemented a distributed microservices architecture with load balancing, caching layers, and optimized model serving using TensorFlow Serving and Kubernetes.",
    execution: "Deployed across multiple regions with auto-scaling, monitoring, and A/B testing infrastructure. Reduced infrastructure costs by 40% through efficient resource allocation.",
    impact: "Achieved 99.9% uptime, reduced average response time from 2.3s to 0.4s, and scaled to support 2M+ daily requests. System handles 5x traffic spikes automatically.",
    link: "#"
  },
  {
    title: "Research Paper: Novel Attention Mechanism",
    problem: "Traditional attention mechanisms in transformers struggle with long sequences, limiting their application in document-level tasks.",
    process: "Developed a sparse attention pattern that reduces computational complexity from O(n²) to O(n√n) while maintaining model performance.",
    execution: "Conducted extensive experiments across 5 benchmark datasets, comparing against BERT, GPT-2, and Longformer baselines. Collaborated with 3 research labs for peer review.",
    impact: "Paper accepted at NeurIPS 2024. Method now adopted by 2 major NLP frameworks. Achieved 15% performance improvement on long-document tasks with 3x faster training.",
    link: "#"
  },
  {
    title: "Open-Source Developer Tool",
    problem: "Developers spent significant time debugging asynchronous code without proper visibility into execution flow and timing.",
    process: "Created a lightweight profiling tool that visualizes async operations, execution timelines, and performance bottlenecks in real-time.",
    execution: "Built with TypeScript and Electron, designed an intuitive UI/UX, and implemented zero-overhead instrumentation. Released under MIT license with comprehensive documentation.",
    impact: "10K+ GitHub stars, 50K+ weekly npm downloads, adopted by companies like Vercel and Supabase. Reduced debugging time by an average of 60% according to user surveys.",
    link: "#"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 animate-slide-up">Case Studies</h2>
        
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="wireframe-border hover-lift hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-light">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Problem
                  </h4>
                  <p className="text-muted-foreground leading-relaxed ml-4">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Thought Process
                  </h4>
                  <p className="text-muted-foreground leading-relaxed ml-4">{study.process}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Execution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed ml-4">{study.execution}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Impact
                  </h4>
                  <p className="text-muted-foreground leading-relaxed ml-4">{study.impact}</p>
                </div>
                
                <a 
                  href={study.link}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all pt-4"
                >
                  View Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
