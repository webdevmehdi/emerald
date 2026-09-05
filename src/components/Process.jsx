const STEPS = [
  {
    n: "01",
    title: "Cadrage",
    desc: "On clarifie l'objectif, les contraintes techniques et le périmètre réel du projet.",
  },
  {
    n: "02",
    title: "Conception",
    desc: "Architecture, sécurité et design sont pensés ensemble, pas en silos séparés.",
  },
  {
    n: "03",
    title: "Construction",
    desc: "Livraisons courtes et régulières, testées avant chaque mise en ligne.",
  },
  {
    n: "04",
    title: "Suivi",
    desc: "Monitoring, itérations et support après le lancement.",
  },
];

export default function Process() {
  return (
    <section id="process" className="max-w-[1180px] mx-auto px-8 py-28">
      <div className="max-w-xl mb-16">
        <span className="text-emerald-core text-sm font-medium block mb-3">
          Méthode
        </span>
        <h2 className="font-display text-3xl md:text-[42px]">
          Comment on travaille
        </h2>
        <p className="text-ink-mid mt-3.5">
          Quatre étapes, du premier échange à la mise en production.
        </p>
      </div>

      <div className="flex flex-col md:flex-row border-t border-panel-border">
        {STEPS.map((s, idx) => (
          <div
            key={s.n}
            className={`flex-1 pt-8 px-0 md:px-6 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-panel-border last:border-none ${
              idx !== 0 ? "md:pl-6" : ""
            }`}
          >
            <div
              className="font-display text-3xl"
              style={{ WebkitTextStroke: "1px #10B981", color: "transparent" }}
            >
              {s.n}
            </div>
            <h3 className="font-display font-semibold text-[17px] mt-3.5 mb-2">
              {s.title}
            </h3>
            <p className="text-ink-mid text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
