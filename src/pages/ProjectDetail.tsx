import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { projects } from "@/components/ProjectsSection";
import CustomCursor from "@/components/CustomCursor";
import Sidebar from "@/components/Sidebar";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="cursor-none">
      <CustomCursor />
      <Sidebar />
      <main className="lg:ml-80 w-full">
        {/* Back link */}
        <div className="px-6 md:px-16 lg:px-24 pt-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-foreground hover:text-primary text-sm uppercase tracking-widest font-bold transition group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>

        {/* Hero image */}
        <section className="px-6 md:px-16 lg:px-24 py-12 border-b border-border">
          <div className="flex items-center gap-3 mb-6">
            <span className={`${project.accentColor} text-xs font-bold uppercase tracking-widest`}>
              Case Study
            </span>
            <span className={`w-12 h-[1px] ${project.accentBg}`} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">{project.title}</h1>
          <p className="text-foreground text-xl mb-8">{project.subtitle}</p>

          <div className="hover-img-zoom w-full aspect-video bg-card overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-4 py-2 text-xs uppercase tracking-widest text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <h2 className="text-2xl text-primary font-bold mb-6">Overview</h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">{project.longDescription}</p>

            <h2 className="text-2xl text-primary font-bold mb-6">Key Features</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full ${project.accentBg} mt-2 shrink-0`} />
                Scalable architecture handling thousands of concurrent users
              </li>
              <li className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full ${project.accentBg} mt-2 shrink-0`} />
                Real-time features with low-latency communication
              </li>
              <li className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full ${project.accentBg} mt-2 shrink-0`} />
                99% crash-free rate with comprehensive error handling
              </li>
              <li className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full ${project.accentBg} mt-2 shrink-0`} />
                Optimized performance with efficient memory management
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 md:px-16 lg:px-24 py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Interested in similar work?
          </h2>
          <a
            href="mailto:ravalshivam311222000@gmail.com"
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 uppercase text-xs font-bold tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
