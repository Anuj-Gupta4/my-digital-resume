import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Explainable Disease Prediction System",
    description:
      "An application that uses machine learning to predict heart disease and deep learning for prediction of tuberculosis. Built using Cleveland dataset for heart disease and Chest X-Ray images for TB. Employs random forest (95% accuracy) and linear convolutional neural networks (87% accuracy) for prediction.",
    github: "https://github.com/Anuj-Gupta4/ExplainableDiseasePrediction",
    tags: ["Machine Learning", "Deep Learning", "Python", "Random Forest", "CNN"],
  },
  {
    title: "Real Estate WebApp",
    description:
      "Web-based E-commerce platform for Real Estate with user registration, house data management, search functionality, and social features. Includes user profiles, integrated mailing system, security measures, and machine learning application for Nepali housing price prediction with GitHub OAuth integration.",
    github: "https://github.com/Anuj-Gupta4/RealEstateApp",
    tags: ["Django", "PostgreSQL", "Machine Learning", "OAuth", "E-commerce"],
  },
  {
    title: "News Portal (Backend)",
    description:
      "Developed for the Revampathon Competition organized by Leapfrog Technology as part of Student Partnership Program. An open platform web application for freelance news reporters and writers with CRUD functions for news posts along with other useful features.",
    github: "https://github.com/Anuj-Gupta4/open-news-api-backend",
    tags: ["Python", "REST API", "Backend", "CRUD"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-all group overflow-hidden flex flex-col"
            >
              <div className="h-2 bg-gradient-primary" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="outline" size="sm" className="gap-2 w-full">
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
