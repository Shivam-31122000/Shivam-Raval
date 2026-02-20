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

            {/* Case Study Gallery */}
            {project.gallery && (
              <div className="mt-20">
                <h2 className="text-2xl text-primary font-bold mb-12 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-primary" /> Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="space-y-4 group">
                      <div className="hover-img-zoom w-full aspect-[4/3] bg-card overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors">
                        <img
                          src={img.url}
                          alt={img.title}
                          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div>
                        <h4 className="text-primary font-bold text-lg">{img.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{img.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 md:px-16 lg:px-24 py-24 bg-card/30">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tighter">
            Interested in similar technical excellence?
          </h2>
          <a
            href="mailto:ravalshivam311222000@gmail.com"
            className="group relative inline-flex items-center gap-3 border border-border px-10 py-5 uppercase text-xs font-bold tracking-[0.2em] text-foreground overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
              Start a Conversation
            </span>
          </a>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
