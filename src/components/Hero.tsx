import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const resumeLink = "https://drive.google.com/uc?export=download&id=16AlaHrFrlWCEaEyGJiYIATJrROpndBmN";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="text-gradient">Anuj Gupta</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Python Engineer specializing in backend development with Django, FastAPI, and Flask.
          Building scalable web applications with Machine Learning integration.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:anujgupta.4388@gmail.com" className="hover:text-foreground transition-colors">
              anujgupta.4388@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+977-9865004388</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-base px-8">
              Download Resume
            </Button>
          </a>
          <a href="#experience">
            <Button size="lg" variant="outline" className="text-base px-8">
              View My Work
            </Button>
          </a>
        </div>

        <a href="#about" className="inline-flex mt-16 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
