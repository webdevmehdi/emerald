import { useState } from "react";

const QUOTES = [
  {
    q: "Ils ont repensé notre sécurité et notre acquisition en même temps — deux problèmes traités par une seule équipe, sans friction entre les pôles.",
    a: "Aziz Ben Miled — CTO, Silicon Valley",
  },
  {
    q: "L'app mobile et le site web partagent la même base : plus aucune donnée désynchronisée entre les deux.",
    a: "Aziz Ben Miled — CTO, Silicon Valley",
  },
  {
    q: "Le modèle IA qu'ils ont branché sur notre support a divisé le temps de réponse par trois dès la première semaine.",
    a: "Aziz Ben Miled — CTO, Silicon Valley",
  },
];

export default function Temoignages() {
  const [i, setI] = useState(0);

  return (
    <section id="testimonials" className="max-w-[1180px] mx-auto px-8 py-28">
      <div className="bg-panel border border-panel-border rounded-md p-9 md:p-14">
        <blockquote className="font-display font-medium text-xl md:text-3xl max-w-3xl leading-snug">
          « {QUOTES[i].q} »
        </blockquote>

        <div className="flex items-center gap-3 mt-7 text-ink-mid text-sm">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-core to-emerald-deep" />
          {QUOTES[i].a}
        </div>

        <div className="flex gap-2 mt-9">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === i ? "bg-emerald-bright" : "bg-panel-border"
              }`}
              aria-label={`Témoignage ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
