import { Link } from "react-router-dom";
import fancallImg from "@/assets/project-fancall.jpg";
import bawabatImg from "@/assets/project-bawabat.jpg";
import challengeImg from "@/assets/project-challenge.jpg";

export const projects = [
  {
    id: "fancall",
    title: "Fancall",
    subtitle: "Creator Platform • 185k+ Downloads",
    description:
      "A creator-brand connection platform. Scaled to 185k+ downloads with 99% stability. Click to view full case study.",
    image: fancallImg,
    featured: true,
    accentColor: "text-blue-accent",
    accentBg: "bg-blue-accent",
    tags: ["Kotlin", "Agora", "Socket.IO", "Firebase"],
    longDescription:
      "Fancall is a revolutionary platform connecting fans with their favorite creators through live video calls. As the Sr. Android Developer, I spearheaded the scaling from 10k to 185k+ downloads while maintaining a 99% crash-free rate. The app features real-time video calling powered by Agora, instant messaging via Socket.IO, and a robust payment system.",
  },
  {
    id: "bawabat",
    title: "Bawabat",
    subtitle: "Service Provider • User Roles",
    description:
      "A comprehensive service provider marketplace with multi-role user management and booking system.",
    image: bawabatImg,
    featured: false,
    accentColor: "text-green-accent",
    accentBg: "bg-green-accent",
    tags: ["Kotlin", "MVVM", "Retrofit", "Room DB"],
    longDescription:
      "Bawabat is a service provider marketplace that connects users with local service professionals. Built with Clean Architecture and MVVM pattern, it features role-based access control, real-time booking management, and an integrated review system.",
  },
  {
    id: "challenge",
    title: "Challenge",
    subtitle: "Social • Gamification",
    description:
      "A social challenge platform with gamification elements, leaderboards, and community engagement features.",
    image: challengeImg,
    featured: false,
    accentColor: "text-red-accent",
    accentBg: "bg-red-accent",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Hilt"],
    longDescription:
      "Challenge is a social gaming platform where users create and participate in fun challenges. Features include real-time leaderboards, social sharing, achievement badges, and community voting powered by Firebase Realtime Database.",
  },
];

const ProjectsSection = () => (
  <section id="work" className="px-6 md:px-16 lg:px-24 py-24 border-b border-border">
    <div className="mb-20">
      <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-[1px] bg-primary" /> Live Projects
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Work</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
      {/* Featured project */}
      {projects
        .filter((p) => p.featured)
        .map((p) => (
          <Link
            key={p.id}
            to={`/project/${p.id}`}
            className="group block md:col-span-2 grid md:grid-cols-2 gap-12 items-center border border-border p-8 bg-card hover:bg-muted transition"
          >
            <div className="hover-img-zoom w-full aspect-video bg-card relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`${p.accentColor} text-xs font-bold uppercase tracking-widest`}>
                  Star Project
                </span>
                <span className={`w-12 h-[1px] ${p.accentBg}`} />
              </div>
              <h3 className="text-4xl text-primary font-bold mb-4">{p.title}</h3>
              <p className="text-foreground text-lg leading-relaxed mb-6">{p.description}</p>
              <span className="text-primary text-sm font-bold uppercase tracking-widest border-b border-primary pb-1">
                View Case Study
              </span>
            </div>
          </Link>
        ))}

      {/* Other projects */}
      {projects
        .filter((p) => !p.featured)
        .map((p) => (
          <Link key={p.id} to={`/project/${p.id}`} className="group block">
            <div className="hover-img-zoom w-full aspect-video bg-card mb-6 overflow-hidden relative">
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition"
              />
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-2xl text-primary font-bold">{p.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{p.subtitle}</p>
            </div>
          </Link>
        ))}
    </div>
  </section>
);

export default ProjectsSection;
