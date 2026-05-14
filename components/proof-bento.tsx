import { proofPoints, stats } from "@/data/site";

const stackSignals = ["Swift", "React Native", "Next.js", "Supabase"];

export function ProofBento() {
  return (
    <div className="grid gap-4 lg:grid-cols-4 lg:auto-rows-[minmax(180px,auto)]">
      <article className="trend-bento-card surface p-6 sm:p-7 lg:col-span-2 lg:row-span-2">
        <div className="relative flex h-full flex-col justify-between gap-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">Recruiter Signal</p>
            <h3 className="max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Proof-first portfolio for mobile and web product work.
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              The experience now leads with outcomes, shipped products, and clear capability
              instead of decorative noise.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.slice(0, 4).map((point) => (
              <div
                key={point}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4"
              >
                <span className="mb-3 block h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm leading-6 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="trend-bento-card surface p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Published</p>
        <p className="mt-5 font-display text-5xl font-semibold text-white">{stats[0].value}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{stats[0].label}</p>
      </article>

      <article className="trend-bento-card surface p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Live Work</p>
        <p className="mt-5 font-display text-5xl font-semibold text-white">{stats[2].value}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{stats[2].label}</p>
      </article>

      <article className="trend-bento-card surface p-6 lg:col-span-2">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Core Stack</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stackSignals.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-300">
          A focused stack for native apps, cross-platform delivery, fast frontend builds, and
          realtime backend workflows.
        </p>
      </article>

      <article className="trend-bento-card surface p-6 lg:col-span-2">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Case Study Flow</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Context", "Build", "Outcome"].map((item, index) => (
            <div
              key={item}
              className="rounded-[1.15rem] border border-white/10 bg-white/[0.045] p-4"
            >
              <p className="font-display text-3xl font-semibold text-white">0{index + 1}</p>
              <p className="mt-2 text-sm text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
