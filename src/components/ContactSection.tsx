const ContactSection = () => (
  <section id="contact" className="px-6 md:px-16 lg:px-24 py-24">
    <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-12 flex items-center gap-2">
      <span className="w-8 h-[1px] bg-primary" /> Get in Touch
    </p>
    <h2 className="text-5xl md:text-7xl font-bold text-primary mb-12 leading-tight">
      Ready to build? <br />
      <span className="text-muted-foreground">Let's talk.</span>
    </h2>
    <a
      href="mailto:ravalshivam311222000@gmail.com"
      className="text-2xl md:text-3xl text-primary hover:text-foreground transition underline underline-offset-8 decoration-1 decoration-muted"
    >
      ravalshivam311222000@gmail.com
    </a>
    <div className="flex flex-wrap gap-12 mt-20">
      <a
        href="https://linkedin.com/in/theshiv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary uppercase tracking-widest text-xs font-bold"
      >
        LinkedIn
      </a>
      <span className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
        Ahmedabad, India
      </span>
    </div>
  </section>
);

export default ContactSection;
