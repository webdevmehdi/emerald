import { useEffect, useState } from "react";

const SPECIALITES = [
  "Intelligence Artificielle",
  "Cybersécurité",
  "Marketing digital",
  "Développement web",
  "Développement mobile",
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % SPECIALITES.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-[1180px] mx-auto px-8 min-h-[88vh] flex flex-col justify-center py-24">
      <div className="inline-flex items-center gap-2.5 border border-panel-border bg-panel px-4 py-2 rounded-full text-sm text-ink-mid w-fit mb-7">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-bright shadow-[0_0_8px_#3DFFB0] animate-pulse" />
        Spécialité du moment :
        <span className="text-emerald-bright font-medium min-w-[170px] inline-block">
          {SPECIALITES[i]}
        </span>
      </div>

      <h1 className="font-display text-[38px] md:text-6xl lg:text-[74px] leading-[1.08] max-w-3xl">
        Une seule équipe.
        <br />
        Cinq expertises <span className="text-emerald-bright">connectées</span>.
      </h1>

      <p className="max-w-lg text-ink-mid text-[17px] mt-6">
        IA, cybersécurité, marketing, développement web et mobile — pilotés
        depuis une seule infrastructure, pour des produits qui tiennent la route
        dans la durée.
      </p>

      <div className="flex gap-4 mt-9 flex-wrap">
        <a
          href="#contact"
          className="bg-emerald-core text-void font-semibold px-7 py-3.5 rounded-sm hover:bg-emerald-bright hover:shadow-[0_0_24px_rgba(61,255,176,.35)] transition-all"
        >
          Discuter de votre projet
        </a>
        <a
          href="#services"
          className="border border-panel-border px-6.5 py-3.5 rounded-sm hover:border-emerald-core transition-colors"
        >
          Voir les expertises
        </a>
      </div>

      <div className="flex gap-12 mt-16 flex-wrap">
        {[
          ["120+", "projets livrés"],
          ["5", "expertises intégrées"],
          ["98%", "clients qui reviennent"],
        ].map(([num, label]) => (
          <div key={label}>
            <b className="font-display text-2xl text-emerald-bright block">
              {num}
            </b>
            <span className="text-xs text-ink-dim">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
