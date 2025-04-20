
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-muted/50 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Tayef Ali</p>
            <p className="text-sm text-muted-foreground">Web Developer</p>
          </div>
          
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-primary" />
            </button>
            <p className="text-sm text-muted-foreground">Back to top</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tayef Ali. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
