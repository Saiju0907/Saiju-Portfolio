import AnimatedSection from "./AnimatedSection";
import { MapPin, Languages } from "lucide-react";

const About = () => (
  <AnimatedSection id="about" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">About Me</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-8" />

      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Dedicated MCA graduate seeking to leverage my skills in UI/UX design, app development,
        and digital art to contribute to a dynamic and growing organization. I am passionate
        about crafting beautiful, user-centric digital experiences that bridge the gap between
        technology and people.
      </p>

      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" />
          <span>Tenkasi, Tamil Nadu</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Languages className="h-4 w-4 text-accent" />
          <span>Tamil, English, Malayalam, Hindi</span>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default About;
