
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block gradient-text mt-2">Tayef Ali</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              I build modern, responsive web applications with a focus on user experience and clean code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="glass hover-card" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="glass hover-card" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="glass p-2 rounded-full hover-card">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="glass p-2 rounded-full hover-card">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:example@email.com" 
                className="glass p-2 rounded-full hover-card">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/lovable-uploads/de2db2fd-4c3e-403a-b4a3-5713f215e52f.png"
                alt="Tayef Ali"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 hover-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
