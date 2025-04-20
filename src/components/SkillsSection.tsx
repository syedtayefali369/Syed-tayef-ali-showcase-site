
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Server } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Jest", "Docker", "AWS"]
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I've worked with a variety of technologies across the full stack. Here are the main technologies and tools I'm proficient with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <Layout className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="bg-muted p-2 rounded-md text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <Server className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill} className="bg-muted p-2 rounded-md text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold">Tools & Others</h3>
              </div>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="bg-muted p-2 rounded-md text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
