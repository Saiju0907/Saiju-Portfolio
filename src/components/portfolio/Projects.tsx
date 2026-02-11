import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "FOOD DELIVERY APP",
    image: "/Saiju-Portfolio/assets/Food Delivery.png",
    figmaUrl: "https://www.figma.com/proto/QrgfTc9DDhJZvBqfImXacR/Untitled?page-id=0%3A1&node-id=1-14&viewport=538%2C233%2C0.22&t=JRIgC3YJ638yRTGD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A14",
  },
  {
    title: "DONUT SITE",
    image: "/Saiju-Portfolio/assets/Donut.jpg",
    figmaUrl: "https://www.figma.com/proto/hZqUoKxFTaWCD5vY2JHqBs/Untitled?page-id=0%3A1&node-id=1-4&starting-point-node-id=1%3A4&t=yGI3K1H6YkvPR9Gg-1",
  },
  {
    title: "DRINKS SITE",
    image: "/Saiju-Portfolio/assets/Drinks.jpeg",
    figmaUrl: "https://www.figma.com/proto/6zy1kRdRiHzOhSPn4zRyjI/Untitled?page-id=0%3A1&node-id=9-3&t=eXruXG5rSdd6lufJ-1",
  },
  {
    title: "BMW CAR SITE",
    image: "/Saiju-Portfolio/assets/BMW.jpeg",
    figmaUrl: "https://www.figma.com/proto/tJx4U8CHTcRZeMsGdWac88/Untitled?page-id=0%3A1&node-id=16-2&starting-point-node-id=16%3A2&t=UoiZQ8hB0fbznTfN-1",
  },
  {
    title: "SPOTIFY REDESIGN",
    image: "/Saiju-Portfolio/assets/Spotify.jpg",
    figmaUrl: "https://www.figma.com/proto/Yj6kGARyLYgvO9Rc9oQLHu/project-1?page-id=0%3A1&node-id=6-2&viewport=311%2C371%2C0.29&t=rThpceRzRzNL6CVW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A2&show-proto-sidebar=1",
  },
  {
    title: "AGRICULTURE APP",
    image: "/Saiju-Portfolio/assets/Agriculture.jpeg",
    figmaUrl: "https://www.figma.com/proto/uxbziEfHUfq561WEAKCecH/Untitled?node-id=2002-2&t=Mbwpe5ntwOWYxoa2-1",
  },
  {
    title: "GPAY REDESIGN",
    image: "/Saiju-Portfolio/assets/Gpay.jpg",
    figmaUrl: "https://www.figma.com/proto/QCAZkJDz1ASMfWBMFsaJgm/Untitled?node-id=0-1&t=2PDQQVPELhFjc4kE-1",
  },
  {
    title: "SNAPCHAT REDESIGN",
    image: "/Saiju-Portfolio/assets/Snapchat.png",
    figmaUrl: "https://www.figma.com/proto/Tv4zbsiNlHUvuYeklUzsV7/snapchat?page-id=0%3A1&node-id=1-3&viewport=54%2C412%2C0.17&t=R514hkrGMnmBjJ1v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3",
  },
];

const Projects = () => (
  <AnimatedSection id="projects" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
