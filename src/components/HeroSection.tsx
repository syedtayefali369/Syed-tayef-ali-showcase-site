
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm Tayef Ali</span>
              <span className="block text-primary mt-2">Web Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              I build modern, responsive web applications with a focus on user experience and clean code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:example@email.com" className="text-foreground/80 hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-background flex items-center justify-center text-7xl font-bold">
                TA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
