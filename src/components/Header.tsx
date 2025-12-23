import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const resumeLink = "https://drive.google.com/uc?export=download&id=16AlaHrFrlWCEaEyGJiYIATJrROpndBmN";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-xl font-bold text-foreground">
          <span className="text-gradient">AG</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="https://github.com/Anuj-Gupta4/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/anuj-gupta4/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
