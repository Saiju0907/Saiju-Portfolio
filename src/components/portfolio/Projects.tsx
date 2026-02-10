import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingCart, Shield } from "lucide-react";

const projects = [
  {
    title: "Online Furniture Application",
    description:
      "A full-featured eCommerce web application for browsing and purchasing furniture online, featuring product catalogs, cart functionality, and a seamless checkout experience.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    icon: ShoppingCart,
  },
  {
    title: "Ransomware in Cyber Security",
    description:
      "A defensive cybersecurity strategy leveraging RanGAN and Hash Conceal techniques to detect and mitigate ransomware threats, with an informative web-based dashboard.",
    tech: ["HTML", "CSS", "Bootstrap"],
    icon: Shield,
  },
];

const Projects = () => (
  <AnimatedSection id="projects" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-12" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <Card className="group h-full border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                    <p.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Projects;
