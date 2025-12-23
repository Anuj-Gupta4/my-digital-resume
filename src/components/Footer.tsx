import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              <span className="text-gradient">Anuj Gupta</span>
            </h3>
            <p className="text-sm text-muted-foreground">Python Engineer & Backend Developer</p>
          </div>

          <div className="flex items-center gap-2">
            <a href="mailto:anujgupta.4388@gmail.com">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
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
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Anuj Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
