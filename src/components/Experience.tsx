import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Naxa Pvt. Ltd.",
    role: "Mid Level Backend Developer",
    type: "Onsite",
    period: "Apr 2024 - Present",
    responsibilities: [
      "Led the full development team for the open-source 'Field Mapping Tasking Manager' project under HOTOSM as the primary backend developer. Oversaw full development cycles, designed and implemented new features, managed production releases, and mentored junior developers.",
      "Refactored critical modules for performance and scalability, improved error handling, logging, and migrations. Fixed 80% of production issues and raised test coverage to 66% through TDD.",
      "Led, architected, developed, and documented the backend for the 'Greenway' bike-sharing mobile app with RESTful APIs for ride tracking, authentication, subscription, inventory, fare calculation, and payment processing.",
      "Migrated critical APIs from Flask/SQLAlchemy to FastAPI/raw PostgreSQL with async capabilities for 'Tasking Manager', significantly improving response times.",
      "Developed a dynamic weather alert system with real-time hazardous weather detection, notification generation, and automated report generation using Elasticsearch.",
      "Integrated historical financial data into the existing MIS (Development Finance Information Management System) for the Ministry of Finance, Nepal.",
    ],
    techStack: "Python, FastAPI, Django, PostgreSQL, PostGIS, MongoDB, pytest, Sentry, async psycopg3",
  },
  {
    company: "Bytefaucet Technology Pvt. Ltd.",
    role: "Jr. Backend Developer",
    type: "Remote",
    period: "Apr 2023 - Apr 2024",
    responsibilities: [
      "Collaborated with a development team to create a climate analysis automation web-application for the Department of Hydrology and Meteorology (DOHM), Nepal.",
      "Implemented authentication and authorization with module-based user permissions.",
      "Data synchronization from existing PostgreSQL database using automated scripts with Celery and Celery Beat.",
      "Automation of data manipulation, analysis, processing, visualization, and report generation.",
      "Improved efficacy of the application significantly using open-source solutions such as NumPy, Pandas, and more.",
    ],
    techStack: "Python, Django, PostgreSQL, Celery, Celery Beat, NumPy, Pandas",
  },
  {
    company: "Subisu Cablenet Pvt. Ltd.",
    role: "Network Operation Intern",
    type: "Onsite",
    period: "Jan 2023 - Mar 2023",
    responsibilities: [
      "Developed a device log entry and management system with team and member assignment system for better tracking and accountability.",
      "Created a dashboard to visualize data and provide insights to the team and management.",
      "Integrated an automated asynchronous mailing system to notify team members of new log entries and updates.",
      "Dockerized the web application for deployment.",
    ],
    techStack: "Python, Django, Docker, Async Mailing",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-all">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-primary font-medium mb-4 flex items-center gap-2 justify-start md:justify-end">
                      <Briefcase className="h-4 w-4" />
                      {exp.role}
                    </p>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="leading-relaxed">• {resp}</li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className={`text-xs text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="font-medium text-foreground">Tech:</span> {exp.techStack}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
