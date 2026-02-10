import AnimatedSection from "./AnimatedSection";
import { Award } from "lucide-react";

const certs = [
  "Digital Marketing — Google",
  "TCS iON Career Edge",
  "Chips Software Systems",
  "Entrepreneurship",
  "Industry Expectation",
  "Data Science",
  "UI/UX Design Beginner",
];

const Certifications = () => (
  <AnimatedSection id="certifications" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Certifications</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-12" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert} delay={i * 0.08}>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 group">
              <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors shrink-0">
                <Award className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground">{cert}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Certifications;
