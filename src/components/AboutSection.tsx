
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I'm a passionate web developer with expertise in building modern web applications.
            Here's a brief overview of my journey and what drives me in the world of web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground">
                I started my development journey in 2018 and have since worked on various projects, 
                ranging from small business websites to complex web applications. With each project, 
                I've refined my skills and expanded my knowledge of modern web technologies.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code that solves real problems. 
                I focus on creating intuitive user experiences while ensuring performance and accessibility. 
                I'm constantly learning and adapting to the ever-changing landscape of web development.
              </p>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between">
                  <span>BS in Computer Science</span>
                  <span className="text-primary">2018 - 2022</span>
                </li>
                <li className="flex justify-between">
                  <span>Frontend Developer at Tech Solutions</span>
                  <span className="text-primary">2022 - Present</span>
                </li>
                <li className="flex justify-between">
                  <span>Web Development Intern at Digital Innovations</span>
                  <span className="text-primary">2021 - 2022</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
