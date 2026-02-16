const skills = [
  {
    num: "01",
    title: "Core Android",
    desc: "Kotlin, Java, Android SDK, Jetpack Compose, XML Layouts, Custom Views.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "MVVM, Clean Architecture, Dagger/Hilt, Coroutines, Room DB, Retrofit.",
  },
  {
    num: "03",
    title: "Integrations",
    desc: "Agora (Video/Voice), Socket.IO (Real-time), Meta Integration, Firebase.",
  },
];

const SkillsSection = () => (
  <section id="expertise" className="px-6 md:px-16 lg:px-24 py-24 border-b border-border">
    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-16 flex items-center gap-2">
      <span className="w-8 h-[1px] bg-primary" /> Technical Arsenal
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {skills.map((s) => (
        <div key={s.num} className="group">
          <div className="text-muted text-5xl mb-6 font-light group-hover:text-primary transition">
            {s.num}
          </div>
          <h3 className="text-2xl text-primary font-bold mb-4">{s.title}</h3>
          <p className="text-foreground leading-relaxed font-light">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
