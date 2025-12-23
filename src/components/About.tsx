import { Code2, Database, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            Dedicated Python Engineer known for streamlining Python development processes by exploiting 
            open-source web frameworks. I specialize in applying backend frameworks to complex database 
            assets with strong web presences. Comfortable taking over new or ongoing projects, working 
            in a team or independently to develop web applications and applying Machine Learning to enhance them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
              <p className="text-sm text-muted-foreground">
                Expert in Django, FastAPI, and Flask for building robust, scalable APIs and web applications.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Database Management</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in PostgreSQL, MySQL, MongoDB, Redis, and Elasticsearch for data management.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                Apply ML and Deep Learning using NumPy, Pandas, and modern frameworks to enhance applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
