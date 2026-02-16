const experiences = [
  {
    role: "Sr. Android Developer",
    period: "02/2024 – Present",
    company: "Fancall",
    desc: "Growing user base from 10k to 185k+. Increased crash-free user ratio to 99%.",
    current: true,
  },
  {
    role: "Android Developer",
    period: "01/2022 – 01/2024",
    company: "Hyperlink Info System",
    desc: "Delivered scalable Android solutions for international clients.",
    current: false,
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 border-b border-border bg-card">
    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-12 flex items-center gap-2">
      <span className="w-8 h-[1px] bg-primary" /> Career History
    </p>
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.period}
          className="flex flex-col md:flex-row gap-4 md:gap-16 border-l border-border pl-8 relative group"
        >
          <div
            className={`absolute w-3 h-3 rounded-full -left-[6.5px] top-2 transition ${
              exp.current
                ? "bg-primary group-hover:scale-125"
                : "bg-muted-foreground group-hover:bg-primary"
            }`}
          />
          <div className="w-full md:w-1/3">
            <h4 className="text-primary text-xl font-bold">{exp.role}</h4>
            <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
          </div>
          <div className="w-full md:w-2/3">
            <h5 className="text-primary font-medium mb-2">{exp.company}</h5>
            <p className="text-foreground text-sm leading-relaxed max-w-xl">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
