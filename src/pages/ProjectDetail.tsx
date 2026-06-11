import { useParams, Navigate, useNavigate } from "react-router-dom";
import { projects } from "@/components/ProjectsSection";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // @ts-ignore
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="cursor-none bg-background min-h-screen">
      <CustomCursor />

      {/* 
        Removed Sidebar component completely here to give full 100% screen access
        Changed lg:ml-80 to completely full width w-full 
      */}
      <main className="w-full overflow-hidden">
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

        <section className="px-6 md:px-16 lg:px-24 py-12 border-b border-border">
          {/* Header Area with App Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12"
          >
            <div className="w-24 h-24 md:w-36 md:h-36 shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={project.image}
                alt={`${project.title} logo`}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`${project.accentColor} text-xs font-bold uppercase tracking-widest`}>
                  App Store Release
                </span>
                <span className={`w-12 h-[1px] ${project.accentBg}`} />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-tight drop-shadow-sm">{project.title}</h1>
              <p className="text-foreground/80 text-xl font-medium mb-6">{project.subtitle}</p>

              {/* @ts-ignore */}
              {project.storeUrl && (
                <a
                  href={/* @ts-ignore */ project.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 shadow-md transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 2v20l18-10L3 2zm2 3.8l11.4 6.2L6.8 17.6 5 19.3V5.8z" /></svg>
                  Get on Google Play
                </a>
              )}
            </div>
          </motion.div>

          {/* Horizontal Scrollable Screenshots Carousel at the TOP */}
          {/* @ts-ignore - screenshots injected locally */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mb-16 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 relative"
            >
              <div className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide">
                {/* @ts-ignore */}
                {project.screenshots.map((imgUrl: string, idx: number) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="shrink-0 snap-center rounded-2xl overflow-hidden border border-border/30 bg-card/50 shadow-xl"
                    style={{ height: "65vh", minHeight: "400px" }}
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border/60 bg-muted/30 px-5 py-2 hover:bg-muted/60 transition-colors rounded-full text-xs uppercase tracking-widest text-foreground font-semibold"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Description Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl text-primary font-bold mb-8 flex items-center gap-4">
              <span className={`w-8 h-[1px] ${project.accentBg}`} /> Overview
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed font-light whitespace-pre-wrap">
                {project.longDescription}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 md:px-16 lg:px-24 py-24 bg-card/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tighter">
              Interested in similar technical excellence?
            </h2>
            <a
              href="mailto:ravalshivam311222000@gmail.com"
              className="group relative inline-flex items-center gap-3 border border-border px-10 py-5 uppercase text-xs font-bold tracking-[0.2em] text-foreground overflow-hidden rounded-md"
            >
              <span className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                Start a Conversation
              </span>
            </a>
          </motion.div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default ProjectDetail;
