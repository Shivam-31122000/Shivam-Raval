import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "// Home", href: "/#home" },
  { label: "// Skills", href: "/#expertise" },
  { label: "// Projects", href: "/#work" },
  { label: "// Experience", href: "/#experience" },
  { label: "// Contact", href: "/#contact" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      window.location.href = href;
      return;
    }
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:opacity-80 transition"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <aside
        className={`${
          mobileOpen
            ? "fixed inset-0 z-40 flex"
            : "hidden lg:flex"
        } w-full lg:w-80 h-screen lg:fixed top-0 left-0 bg-secondary p-10 flex-col justify-between border-r border-border transition-all duration-300`}
      >
        <div>
          <Link to="/" className="block">
            <h1 className="text-4xl font-bold text-primary mb-1 tracking-tighter leading-none">
              SHIVAM<br />RAVAL
            </h1>
          </Link>
          <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mt-3">
            Sr. Android Developer
          </p>
        </div>

        <nav className="space-y-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="group flex items-center gap-3 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="text-xs text-muted-foreground">
          &copy; 2026 Shivam Raval. <br />Ahmedabad, India.
          <div className="flex gap-5 mt-6 text-lg">
            <a
              href="https://linkedin.com/in/theshiv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="mailto:ravalshivam311222000@gmail.com"
              className="hover:text-primary transition transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
