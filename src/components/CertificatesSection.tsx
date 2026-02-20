import { ExternalLink } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer?: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    id: "01",
    title: "Introduction to Data Science in Python",
    issuer: "University of Michigan",
    link: "https://coursera.org/share/dbea0b2205e7f475823bbdbfa3e61979",
  },
  {
    id: "02",
    title: "Software Development Processes and Methodologies",
    issuer: "University of Minnesota",
    link: "https://coursera.org/share/21052a6ca1f63baa9fda9e5997de284e",
  },
  {
    id: "03",
    title: "Algorithmic Toolbox",
    issuer: "University of California San Diego",
    link: "https://coursera.org/share/ac0a675a87dda454ec6754a0008e1a1b",
  },
  {
    id: "04",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    link: "https://coursera.org/share/aee258c4e6d7b1b53d7751e4c660a1e8",
  },
  {
    id: "05",
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    link: "https://coursera.org/share/a6e04699af2ea4308861341403360eb9",
  },
  {
    id: "06",
    title: "Be10x Ai workshop 2026",
    link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997944097",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="px-6 md:px-16 lg:px-24 py-24 border-b border-border">
      <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-16 flex items-center gap-2">
        <span className="w-8 h-[1px] bg-primary" /> Professional Certifications
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 bg-secondary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-muted text-sm font-mono">{cert.id}</span>
              <ExternalLink size={18} className="text-muted group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            {cert.issuer && (
              <p className="text-foreground/70 text-sm font-medium">
                {cert.issuer}
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
