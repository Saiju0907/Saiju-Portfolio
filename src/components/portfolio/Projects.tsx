import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Project 1",
    image: "/projects/project-1.jpg",
    figmaUrl: "https://www.figma.com/design/project1",
  },
  {
    title: "Project 2",
    image: "/projects/project-2.jpg",
    figmaUrl: "https://www.figma.com/design/project2",
  },
  {
    title: "Project 3",
    image: "/projects/project-3.jpg",
    figmaUrl: "https://www.figma.com/design/project3",
  },
  {
    title: "Project 4",
    image: "/projects/project-4.jpg",
    figmaUrl: "https://www.figma.com/design/project4",
  },
  {
    title: "Project 5",
    image: "/projects/project-5.jpg",
    figmaUrl: "https://www.figma.com/design/project5",
  },
  {
    title: "Project 6",
    image: "/projects/project-6.jpg",
    figmaUrl: "https://www.figma.com/design/project6",
  },
];

const Projects = () => (
  <AnimatedSection id="projects" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <a href={p.figmaUrl} target="_blank" rel="noopener noreferrer">
              <Card className="group h-full border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                <CardContent className="p-6 flex flex-col h-full">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-foreground text-center">{p.title}</h3>
                </CardContent>
              </Card>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Projects;
