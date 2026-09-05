import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Méthode" },
    { href: "#testimonials", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-void/60 border-b border-panel-border">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-8 py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-display font-bold text-xl tracking-wide"
        >
          <svg viewBox="0 0 26 26" fill="none" className="w-6 h-6">
            <path
              d="M2 18C6 10 10 6 13 13C16 20 20 16 24 8"
              stroke="#3DFFB0"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          EMERALD
        </a>

        <div className="hidden md:flex gap-9 text-sm text-ink-mid">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-emerald-bright transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block border border-emerald-core text-emerald-bright text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-emerald-core hover:text-void transition-colors"
        >
          Démarrer un projet
        </a>

        <button
          className="md:hidden text-ink-hi"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-8 pb-6 border-t border-panel-border">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-ink-mid border-b border-panel-border last:border-none"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 text-center border border-emerald-core text-emerald-bright py-3 rounded-sm"
          >
            Démarrer un projet
          </a>
        </div>
      )}
    </header>
  );
}
