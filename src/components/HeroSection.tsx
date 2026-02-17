import { motion, useScroll, useTransform } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [0.05, 0]);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 relative border-b border-border overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Animated Gradient Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, -60, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"
        />

        {/* Floating Background Text */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-20 right-0 text-[15rem] md:text-[25rem] font-bold text-white selection:bg-transparent pointer-events-none select-none tracking-tighter leading-none"
        >
          SHIVAM
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:flex-1 z-10 min-w-0"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Introduction
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-8 tracking-tighter">
            Shivam Raval <br />
            <span className="text-muted-foreground font-light">Sr. Android Dev.</span>
          </h2>

          <p className="text-lg lg:text-xl text-foreground max-w-lg mb-10 leading-relaxed font-light">
            Spearheaded the scaling of{" "}
            <span className="text-primary font-medium">Fancall</span> from 10k to{" "}
            <span className="text-primary font-medium">185k+ downloads</span>. I
            specialize in building robust, crash-free (99%) Android applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToWork}
              className="group relative overflow-hidden inline-flex items-center gap-3 border border-border px-8 py-4 uppercase text-xs font-bold tracking-widest text-foreground transition duration-500"
            >
              <span className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500 flex items-center gap-3">
                View Live Projects{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-y-1 transition duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ y: y2 }}
          className="w-full md:w-[350px] lg:w-[480px] xl:w-[550px] shrink-0 relative group"
        >
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 p-2 md:p-3">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={profilePhoto}
                alt="Shivam Raval"
                className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition duration-1000 ease-out scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
            </div>

            {/* Minimal Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-primary z-20" />
          </div>

          {/* Subtle reflection effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-2 scale-y-50 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

