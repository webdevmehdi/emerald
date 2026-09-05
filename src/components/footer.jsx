export default function Footer() {
  return (
    <footer className="border-t border-panel-border pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="font-display font-bold text-xl mb-3.5">EMERALD</div>
            <p className="text-sm text-ink-mid max-w-[260px]">
              Studio digital multi-services : IA, cybersécurité, marketing et
              développement, réunis sous une seule équipe.
            </p>
          </div>

          <div>
            <h4 className="text-ink-hi font-semibold text-sm mb-4">
              Expertises
            </h4>
            {[
              "Intelligence Artificielle",
              "Cybersécurité",
              "Marketing digital",
            ].map((l) => (
              <a
                key={l}
                href="#services"
                className="block text-sm text-ink-mid mb-2.5 hover:text-emerald-bright transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-ink-hi font-semibold text-sm mb-4">Studio</h4>
            <a
              href="#process"
              className="block text-sm text-ink-mid mb-2.5 hover:text-emerald-bright transition-colors"
            >
              Méthode
            </a>
            <a
              href="#testimonials"
              className="block text-sm text-ink-mid mb-2.5 hover:text-emerald-bright transition-colors"
            >
              Clients
            </a>
            <a
              href="#contact"
              className="block text-sm text-ink-mid mb-2.5 hover:text-emerald-bright transition-colors"
            >
              Contact
            </a>
          </div>

          <div>
            <h4 className="text-ink-hi font-semibold text-sm mb-4">Contact</h4>
            <a
              href="mailto:contact@signalis.io"
              className="block text-sm text-ink-mid mb-2.5 hover:text-emerald-bright transition-colors"
            >
              contact@emerald
            </a>
            <a
              href="tel:+21600000000"
              className="block text-sm text-ink-mid mb-2.5 hover:text-emerald-bright transition-colors"
            >
              +216 xx xxx xxx
            </a>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-3 pt-6 border-t border-panel-border text-xs text-ink-dim">
          <span>© 2026 SIGNALIS. Tous droits réservés.</span>
          <span>Tunis, Tunisie</span>
        </div>
      </div>
    </footer>
  );
}
