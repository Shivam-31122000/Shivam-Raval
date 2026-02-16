import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative border-b border-border"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="w-full md:w-3/5 z-10">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" /> Introduction
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-8">
            Shivam Raval <br />
            <span className="text-muted-foreground">Sr. Android Dev.</span>
          </h2>
          <p className="text-xl text-foreground max-w-lg mb-10 leading-relaxed font-light">
            Spearheaded the scaling of{" "}
            <span className="text-primary font-medium">Fancall</span> from 10k to{" "}
            <span className="text-primary font-medium">185k+ downloads</span>. I
            specialize in building robust, crash-free (99%) Android applications.
          </p>
          <button
            onClick={scrollToWork}
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 uppercase text-xs font-bold tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            View Live Projects{" "}
            <svg
              className="w-4 h-4 group-hover:translate-y-1 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        <div className="w-full md:w-2/5 relative group">
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-card">
            <img
              src={profilePhoto}
              alt="Shivam Raval"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-1000 ease-out"
            />
            <div className="absolute inset-0 border border-border pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
