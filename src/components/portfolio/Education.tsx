import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2022 – 2024",
    school: "SNS College of Technology, Coimbatore",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2019 – 2021",
    school: "Kalasalingam Academy of Research & Education, Krishnankovil",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    period: "2018 – 2019",
    school: "MKVK Matric Hr. Sec. School, Tenkasi",
  },
];

const Education = () => (
  <AnimatedSection id="education" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Education</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-12" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.degree} delay={i * 0.12} className="relative pl-12 md:pl-16">
              <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <span className="text-xs font-semibold text-accent tracking-wider uppercase">{item.period}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1">{item.degree}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.school}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default Education;
