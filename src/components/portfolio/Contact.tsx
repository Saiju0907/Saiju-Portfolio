import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <AnimatedSection id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <Phone className="h-4 w-4 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:saijum.design@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-4 w-4 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm">saijum.design@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/saijum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <Linkedin className="h-4 w-4 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm">linkedin.com/in/saijum</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-sm text-muted-foreground">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="mt-1.5"
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="mt-1.5"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="mt-1.5 min-h-[120px]"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saiju M. All rights reserved.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
