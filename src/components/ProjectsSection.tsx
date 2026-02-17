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
    id: "challenge",
    title: "Challenge APP",
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
  {
    id: "postalott",
    title: "Postalott",
    subtitle: "Social Media • Post Sharing",
    description:
      "A unique social media platform focused on localized post sharing and community bulletins.",
    image: "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-yellow-accent",
    accentBg: "bg-yellow-accent",
    tags: ["Java", "Firebase", "Google Maps API", "Glide"],
    longDescription: "Postalott allows users to pin 'posts' to physical locations on a map, creating a hyper-local social network. It features real-time notifications, location-based discovery, and deep integration with mapping services.",
  },
  {
    id: "hooked",
    title: "Hooked",
    subtitle: "Video Streaming • Social",
    description:
      "A high-performance video streaming app with social networking features and real-time interactions.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-purple-accent",
    accentBg: "bg-purple-accent",
    tags: ["Kotlin", "ExoPlayer", "WebRTC", "Mvvm"],
    longDescription: "Hooked is a short-form video platform built for speed and engagement. It uses ExoPlayer for seamless video playback and WebRTC for low-latency live streaming sessions.",
  },
  {
    id: "7clue",
    title: "7 Clue",
    subtitle: "Puzzle • Strategy Game",
    description:
      "An engaging puzzle game that challenges users to solve mysteries using seven distinct clues.",
    image: "https://images.unsplash.com/photo-1585620385456-4759f702c9ad?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-emerald-accent",
    accentBg: "bg-emerald-accent",
    tags: ["Unity", "C#", "Firebase Analytics", "AdMob"],
    longDescription: "7 Clue is a brain-teaser game where players piece together evidence to solve complex cases. Features include daily challenges, worldwide leaderboards, and procedurally generated mystery levels.",
  },
  {
    id: "fliptalk",
    title: "Flip talk",
    subtitle: "Communication • Language Learning",
    description:
      "A language learning platform that uses flip-card mechanics and real-time chat with native speakers.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-pink-accent",
    accentBg: "bg-pink-accent",
    tags: ["React Native", "Node.js", "MongoDB", "Socket.IO"],
    longDescription: "Flip talk revolutionizes language learning by connecting students with mentors in an interactive, card-based interface. It includes speech-to-text validation and gamified progress tracking.",
  },
  {
    id: "chatalott",
    title: "Chatalott",
    subtitle: "Messenging • Enterprise",
    description:
      "A robust enterprise messaging solution with end-to-end encryption and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-cyan-accent",
    accentBg: "bg-cyan-accent",
    tags: ["Kotlin", "XMPP", "SQLDelight", "Coroutines"],
    longDescription: "Chatalott is designed for high-security environments, providing encrypted messaging, file sharing, and video conferencing. It supports large-scale group management and administrative controls.",
  },
  {
    id: "flirtpen",
    title: "Flirt pen",
    subtitle: "Dating • Social Networking",
    description:
      "A modern dating app focusing on handwritten notes and creative expression to connect people.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-rose-accent",
    accentBg: "bg-rose-accent",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Functions"],
    longDescription: "Flirt pen brings a personal touch back to digital dating. Users can send digital 'handwritten' notes, sketches, and doodles to express their interest in a more creative way.",
  },
  {
    id: "ollama-ai",
    title: "Ollama AI",
    subtitle: "AI Assistant • LLM Integration",
    description:
      "A mobile interface for interacting with local Large Language Models for private and efficient AI tasks.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-indigo-accent",
    accentBg: "bg-indigo-accent",
    tags: ["Kotlin", "Python", "ONNX Runtime", "Vector DB"],
    longDescription: "Ollama AI provides a seamless mobile experience for running LLMs locally. It features document summarization, code generation, and personalized chat, all while keeping data on-device.",
  },
  {
    id: "dance-anim",
    title: "Dance Anim",
    subtitle: "Entertainment • Motion Tracking",
    description:
      "An AI-powered app that tracks dance moves and creates stylized 3D animations in real-time.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-amber-accent",
    accentBg: "bg-amber-accent",
    tags: ["Kotlin", "MediaPipe", "OpenGL ES", "ARCore"],
    longDescription: "Dance Anim uses advanced pose estimation to turn your physical dance moves into digital art. Users can record sessions, apply different character skins, and share their animated dances on social media.",
  },
  {
    id: "mental-healing",
    title: "Mental healing",
    subtitle: "Health • Wellness",
    description:
      "A comprehensive wellness app offering guided meditation, mood tracking, and professional support.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-teal-accent",
    accentBg: "bg-teal-accent",
    tags: ["Swift", "HealthKit", "Combine", "CoreData"],
    longDescription: "Mental healing provides a suite of tools for emotional well-being. It includes an AI-powered mood journal, sleep sounds, and a directory of certified therapists for online consultations.",
  },
  {
    id: "restaurent-app",
    title: "Restaurent App",
    subtitle: "Lifestyle • Food Delivery",
    description:
      "A full-stack food delivery and table reservation system with real-time order tracking.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "text-orange-accent",
    accentBg: "bg-orange-accent",
    tags: ["Kotlin", "Ktor", "PostgreSQL", "Stripe"],
    longDescription: "Restaurent App simplifies the dining experience from both ends. Customers can browse menus, order food, or book tables, while restaurant owners manage their kitchen and staff through a dedicated dashboard.",
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
