import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import AIBIDashboardHome from "@/assets/casestudy-aibidashboardhome.jpg";
import AIBISalesForecastGraph from "@/assets/casestudy-aibisalesforecastgarph.jpg";
import DFDashboardHome from "@/assets/casestudy-dfdashboardhome.jpg";
import DFHeatMap from "@/assets/casestudy-dfheatmap.jpg";

const caseStudies = [
  {
    title: "Research Paper: Framework for Leveraging A.I. for Strategic Growth in Small-Scale Enterprises (DOI: )",
    problem: "Despite the potential of Artificial Intelligence to streamline business processes, small scale enterprises in Kolkata struggle to access and implement low-cost, easy-to-implement AI tools to automate tasks. The tools and frameworks that currently exist (like TOE framework or TAM framework) are often unaffordable, overly complex, or require other technologies available together to give accurate results. These frameworks lack adequate local feasibility study especially in cost-sensitive and low-experience enterprises. This leads to reliance on instinct-based or manual decision-making.",
    process: "- To identify practical, cost-effective AI strategies that address common pain points in workflows of these small-scale enterprises. <br>- To design and prototype an open-source AI business intelligence dashboard that is tailored specifically to the needs of these and similar enterprises. <br>- To evaluate business performance improvements in quickly-measureable areas like sales forecast accuracy, customer-segmentation to prioritize the customers bringing in the highest revenue, and customer satisfaction.",
    execution: "This study follows a prototype-oriented design using simulated data and user interactions to model the functionality of an AI-driven business intelligence platform for small scale enterprises. The approach used was: <br>- A dashboard was designed using ReactJS and Typescript via Vite to showcase business intelligence data (sales forecast, customer segmentation, and churn analysis). <br>- Mock datasets were created to feed into machine learning models. <br>- 3 machine learning models were created using python libraries. <br>- The models were deployed via a Fast API backend.",
    impact: "The research effectively built and tested a lightweight, module-based AI dashboard with synthetic business data, including forecasting, segmenting, and predicting churn modules that yielded usable outputs. The prototype illustrates low-cost AI applicability among small scale enterprises, even without large datasets, and acts as a model for wider implementation. <br>Success seen from the testing of these models shows the need for government- or incubator-sponsored deployment of similar structures in resource-limited areas. <br>Integration with accounting software like Tally or POS systems would add further versatility. From a research standpoint, future research must study AI preparedness matrices among small scale enterprises in Tier-II cities, monitor long-term behavioral changes after adoption, and transfer the prototype into mobile-based dashboards for real-time information delivery.",
    link: "https://ijirt.org/article?manuscript=185126",
    image1: AIBIDashboardHome,
    image2: AIBISalesForecastGraph
  },
  {
    title: "Research Paper: Prototype for Deepfake Detection and Content Authenticity for Small Digital Creators (DOI: )",
    problem: "Deepfake detection techniques have made great progress, but real-world implementation is still mostly feasible within organizational and corporate premises. Detection methodologies are predominantly computationally demanding, involving deep convolutional networks (such as XceptionNet, EfficientNet) or multimodal transformer structures that cannot practically use personal devices. Their applications, thus, remain restricted for small content producers who usually use regular laptops or inexpensive cloud platforms. Lack of authenticity tools that serve creators, poses the risk of manipulated content in mainstream content, and if they remain unchecked and their credibility gets diluted, independent producers remain exposed to face-impersonation or slander.",
    process: "- To develop a lightweight, AI-driven authenticity verification framework optimized for small digital media creators.<br>- To integrate spatial, temporal, and multimodal deepfake detection methods into a resource-efficient model architecture (e.g. MesoNet).<br>- To evaluate detection accuracy, latency, and robustness under real-world conditions including compression, noise, and variable lighting.<br>- To design an intuitive interface producing authenticity scores, visual tamper alerts, and digital verification certificates.",
    execution: "This research adopts a prototype-driven, empirical approach aimed at creating an effective deepfake detection and authenticity verification system for small digital content producers. The general methodology incorporates both theoretical and applied facets of AI-driven digital forensics. This starts with dataset construction from open-source and creator-provided video content, which is then followed by the construction of a lightweight neural network designed for consumer-grade hardware. The approach focuses on three major priorities namely efficiency, precision, and usability making sure that the resulting model has high detection accuracy without relying on massive-scale computational resources. After training and verification, the system will be deployed as a web application.",
    impact: "This work introduces a feasible system for deepfake detection and content authenticity verification for small digital media producers. Through the incorporation of lightweight neural network designs, open-source datasets, and low-resource design techniques, the system bridges the gap between research forensics and actual usability. The model's compatibility with consumer-grade hardware positions the system as an accessible low-cost remedy for ensuring content integrity in a fast-changing digital world. Though dataset dependency and dynamically changing manipulation methods remain as limitations, the work lays a foundation for democratized fact-checking of content. This study adds to the advancements in increasing dataset diversity, enhancing cross-model generalization, and fusing proactive watermark-based authenticity preservation, thus, aiding the robustness of digital trust, empowering independent creators, and maintaining the credibility of online visual media.",
    link: "#",
    image1: DFDashboardHome,
    image2: DFHeatMap
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                  <img 
                    src={study.image1} 
                    alt="Case study preview"
                    className="w-full h-auto rounded border border-border"
                  />
                  <img 
                    src={study.image2} 
                    alt="Case study preview"
                    className="w-full h-auto rounded border border-border"
                  />
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
