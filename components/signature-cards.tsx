import { signatureCards } from "@/data/site";

export function SignatureCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {signatureCards.map((card, index) => (
        <article
          key={card.title}
          className="signature-card surface group p-5 sm:p-6"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <div className="signature-card-orb" aria-hidden="true" />
          <div className="relative flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">{card.eyebrow}</p>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
              </div>
              <span className="signature-card-index font-display text-4xl font-semibold text-white/10">
                0{index + 1}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300">{card.description}</p>

            <div className="mt-6 rounded-[1.1rem] border border-white/10 bg-white/[0.045] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Signal</p>
              <p className="mt-1 text-sm font-medium text-white">{card.metric}</p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
