import { Award, ExternalLink } from "lucide-react";

const certifications = [
  "Computer Engineering License - Nepal Engineering Council",
  "Experience letter - ByteFaucet",
  "Internship Completion Certificate - Subisu",
  "Crash Course on Python - Google",
  "Introduction to Git and GitHub - Google",
  "Python for Beginners to Advance - Udemy",
  "Web Application Technologies and Django - University of Michigan",
  "Building Web Applications in Django - University of Michigan",
  "Microdegree in Machine Learning - Fusemachines",
  "Microdegree in Deep Learning - Fusemachines",
  "Certificate of Python - StudySection",
  "A month-long workshop on Django - PDSC",
  "Power BI Workshop - LIS",
  "Workshop on Basic Hardware - Robotics Club, KEC",
];

const Certifications = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor in Computer Engineering</h3>
                <p className="text-sm text-muted-foreground">Registered by Nepal Engineering Council</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
