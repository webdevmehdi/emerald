export default function CTA() {
  return (
    <section id="contact" className="max-w-[1180px] mx-auto px-8 py-28">
      <div className="bg-gradient-to-br from-emerald-core/10 to-void/40 border border-panel-border rounded-md px-9 py-16 md:px-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <h2 className="font-display text-2xl md:text-4xl max-w-lg">
          Un projet en tête ? Parlons-en.
        </h2>
        <a
          href="mailto:contact@signalis.io"
          className="bg-emerald-core text-void font-semibold px-7 py-3.5 rounded-sm hover:bg-emerald-bright hover:shadow-[0_0_24px_rgba(61,255,176,.35)] transition-all whitespace-nowrap"
        >
          Réserver un appel découverte
        </a>
      </div>
    </section>
  );
}
