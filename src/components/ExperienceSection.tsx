import { ExternalLink, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    period: "10/2025 – 12/2025",
    company: "Ivy Mobility",
    location: "Chennai, India",
    link: "https://www.ivymobility.com",
    desc: "In a fast-paced 2-month engagement at Ivy Mobility, a B2B SaaS company, I applied my Android development skills to a sophisticated enterprise application. This role provided me with hands-on experience in refining a mission-critical platform used daily by a global workforce, focusing on performance enhancements and UI polish.",
    current: true,
  },
  {
    role: "Sr. Android Developer",
    period: "02/2024 – 10/2025",
    company: "Fancall private limited",
    location: "Ahmedabad",
    link: "https://fancall.in",
    desc: "Led the complete technical development of the Fancall app, independently driving its growth to 195,000+ downloads and increasing app stability by 45%. Drove key integrations and features that defined the user experience and platform scalability.\n\n• Architected Agora-based 1:1 video/voice calls and a custom chat with in-app payments.\n• Developed a first-of-its-kind Reel feature with swipe navigation and rich media controls.\n• Integrated Meta (FB/IG) login, Socket.IO for real-time chat, and Firebase (FCM, Analytics).\n• Implemented a custom event logging system to support targeted marketing campaigns.\n• Boosted crash-free users from 55% to 99% through performance optimization and lifecycle management.",
    current: false,
  },
  {
    role: "Android Developer",
    period: "01/2022 – 01/2024",
    company: "Hyperlink Infosystem",
    location: "Ahmedabad, India",
    link: "https://www.hyperlinkinfosystem.com",
    desc: "• Worked on multiple client-facing projects focusing on scalable and robust Android solutions.\n• Collaborated within cross-functional teams to deliver high-quality applications.\n• Managed client communication and ensured timely delivery.",
    current: false,
  },
  {
    role: "PHP Web Intern",
    period: "2020 – 2021",
    company: "Creart Solutions",
    location: "Ahmedabad, India",
    link: "https://www.creartsolutions.com/",
    desc: "• Worked on PHP-based backend projects and conducted trending tech research.",
    current: false,
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 border-b border-border bg-card/50">
    <div className="flex items-center gap-3 mb-12">
      <Briefcase className="text-primary" size={20} />
      <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-2">
        <span className="w-8 h-[1px] bg-primary" /> Professional Experience
      </p>
    </div>

    <div className="space-y-16">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 md:gap-16 border-l border-border pl-8 relative group"
        >
          <div
            className={`absolute w-3 h-3 rounded-full -left-[6.5px] top-2 transition ${exp.current
              ? "bg-primary group-hover:scale-125"
              : "bg-muted-foreground group-hover:bg-primary"
              }`}
          />
          <div className="w-full md:w-1/3">
            <h4 className="text-primary text-xl font-bold">{exp.role}</h4>
            <div className="flex items-center gap-2 mt-2">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                {exp.company}
                <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              {exp.period} | {exp.location}
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="text-foreground/80 text-sm leading-relaxed max-w-2xl whitespace-pre-line font-light">
              {exp.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
