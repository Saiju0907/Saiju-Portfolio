import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Globe, Video, Smartphone, Palette, Figma, Users, MessageCircle, FolderKanban, Lightbulb, Shuffle } from "lucide-react";

const technicalSkills = [
  { name: "HTML", icon: Code },
  { name: "C++", icon: Cpu },
  { name: "Video Editing", icon: Video },
  { name: "App Development", icon: Smartphone },
  { name: "Digital Art", icon: Palette },
  { name: "UI/UX Designing", icon: Figma },
];

const softSkills = [
  { name: "Teamwork", icon: Users },
  { name: "Communication", icon: MessageCircle },
  { name: "Project Management", icon: FolderKanban },
  { name: "Creativity", icon: Lightbulb },
  { name: "Adaptability", icon: Shuffle },
];

const Skills = () => (
  <AnimatedSection id="skills" className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Skills</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-12" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            {technicalSkills.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <s.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            {softSkills.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <s.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default Skills;
