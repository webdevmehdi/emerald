const SERVICES = [
  {
    num: "01",
    title: "Intelligence Artificielle",
    desc: "Agents et modèles sur-mesure branchés sur vos outils existants, pour automatiser sans complexifier.",
  },
  {
    num: "02",
    title: "Cybersécurité",
    desc: "Audit, durcissement et surveillance continue — la sécurité pensée dès la conception, pas ajoutée après coup.",
  },
  {
    num: "03",
    title: "Marketing digital",
    desc: "Stratégie d'acquisition, contenu et données réunis pour transformer l'audience en clients mesurables.",
  },
  {
    num: "04",
    title: "Développement web",
    desc: "Sites et plateformes rapides, accessibles et maintenables, construits pour évoluer avec votre activité.",
  },
  {
    num: "05",
    title: "Développement mobile",
    desc: "Applications iOS et Android natives ou cross-platform, connectées à la même base technique.",
  },
];

function ServiceCard({ s }) {
  return (
    <div className="bg-panel border border-panel-border rounded backdrop-blur-md px-7 py-6 hover:border-emerald-core hover:-translate-y-0.5 transition-all">
      <span className="font-display text-ink-dim text-sm">{s.num}</span>
      <h3 className="text-lg font-display font-semibold mt-2 mb-2">
        {s.title}
      </h3>
      <p className="text-ink-mid text-[14.5px]">{s.desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="max-w-[1180px] mx-auto px-8 py-28">
      <div className="max-w-xl mb-16">
        <span className="text-emerald-core text-sm font-medium block mb-3">
          Expertises
        </span>
        <h2 className="font-display text-3xl md:text-[42px]">
          Cinq métiers, une seule ligne
        </h2>
        <p className="text-ink-mid mt-3.5">
          Chaque service s'appuie sur la même base : les données, la sécurité et
          les outils circulent d'un pôle à l'autre sans rupture.
        </p>
      </div>

      <div className="relative">
        {/* spine */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-core to-transparent opacity-55" />

        <div className="flex flex-col gap-6 md:gap-1.5">
          {SERVICES.map((s, idx) => (
            <div
              key={s.num}
              className="md:grid md:grid-cols-[1fr_60px_1fr] md:items-center relative"
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="md:col-start-1">
                    <ServiceCard s={s} />
                  </div>
                  <div className="hidden md:flex md:col-start-2 justify-self-center w-3.5 h-3.5 rounded-full bg-void border-2 border-emerald-bright shadow-[0_0_12px_rgba(61,255,176,.5)] z-10" />
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" />
                  <div className="hidden md:flex md:col-start-2 justify-self-center w-3.5 h-3.5 rounded-full bg-void border-2 border-emerald-bright shadow-[0_0_12px_rgba(61,255,176,.5)] z-10" />
                  <div className="md:col-start-3">
                    <ServiceCard s={s} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
