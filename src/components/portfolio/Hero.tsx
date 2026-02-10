import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
      backgroundSize: "40px 40px",
    }} />
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
      >
        UI/UX Designer &amp; Digital Artist
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight leading-none mb-6"
      >
        SAIJU M
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Crafting intuitive digital experiences through thoughtful design, creative problem-solving, and a deep passion for user-centered innovation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          size="lg"
          className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90"
          onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Me
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
