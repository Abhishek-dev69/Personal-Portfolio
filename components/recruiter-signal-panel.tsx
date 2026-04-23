type RecruiterSignalPanelProps = {
  proofPoints: string[];
};

const signalMetrics = [
  { label: "Published apps", value: "App Store + Play Store" },
  { label: "Live launches", value: "Mobile + Web" },
  { label: "Core backend", value: "Supabase + APIs" },
];

export function RecruiterSignalPanel({ proofPoints }: RecruiterSignalPanelProps) {
  return (
    <div className="recruiter-panel surface relative overflow-hidden p-5 sm:p-7 lg:p-8">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="scanner-sweep absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative space-y-5">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Recruiter Scan
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                Mobile + Web Product Builder
              </h2>
            </div>
            <span className="pulse-badge rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
              Available
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {signalMetrics.map((metric) => (
              <div
                key={metric.label}
                className="signal-row rounded-2xl border border-white/8 bg-white/[0.035] p-3"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="text-sm font-medium text-white">{metric.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[230px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
          <div className="absolute left-6 top-6 h-32 w-24 rounded-[1.8rem] border border-white/15 bg-slate-950/70 p-2 shadow-soft device-float">
            <div className="mx-auto h-1.5 w-8 rounded-full bg-white/20" />
            <div className="mt-4 space-y-2">
              <div className="h-3 rounded-full bg-accent/70" />
              <div className="h-3 w-4/5 rounded-full bg-white/20" />
              <div className="h-12 rounded-2xl border border-white/10 bg-white/10" />
            </div>
          </div>

          <div className="absolute right-5 top-14 w-44 rounded-[1.35rem] border border-white/15 bg-slate-950/70 p-4 shadow-soft device-float-delayed">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-300/70" />
              <span className="h-2 w-2 rounded-full bg-amber-300/70" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-white/25" />
              <div className="h-2 w-3/4 rounded-full bg-white/15" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-xl bg-accent/20" />
                <div className="h-10 rounded-xl bg-white/10" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
            {["iOS", "Android", "Web"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-center text-xs font-medium text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {proofPoints.slice(0, 3).map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent" />
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
