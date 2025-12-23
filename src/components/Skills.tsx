const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "FastAPI", "Flask"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQLite"],
  },
  {
    title: "Data Science & ML",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Machine Learning", "Deep Learning"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "GitHub Actions", "Celery", "Celery Beat", "Cron Jobs"],
  },
  {
    title: "GIS & Mapping",
    skills: ["QGIS", "QField", "ODK", "PostGIS"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4 text-gradient inline-block">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border/30 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
