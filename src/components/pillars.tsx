const disciplines = [
  ["AI Agents", "Building systems that help automate workflows and solve complex tasks."],
  ["Mobile Apps", "Creating useful experiences that fit naturally into everyday life."],
  ["SaaS Products", "Developing focused software products for the cloud."],
  ["Cloud & Software", "Engineering the APIs, services, and infrastructure behind our products."],
  ["Emerging Technology", "Exploring new possibilities through practical experiments."],
];

export function Pillars() {
  return (
    <section id="build" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">What We Build</p><h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">Small ideas.<br />Real possibilities.</h2></div>
          <p className="max-w-sm leading-relaxed text-foreground-muted">A growing family of products, each with its own purpose. Built and supported by SHRIJIS Labs.</p>
        </div>
        <div className="mt-12 border-y border-border-strong">
          <article className="grid gap-8 py-10 sm:py-14 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div><p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">AI Applications / Featured product</p><h3 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl">ChapterCV</h3><p className="mt-3 text-foreground-muted">Your next chapter starts here.</p></div>
            <div><h4 className="text-2xl font-medium tracking-tight">Give your experience a clear story.</h4><p className="mt-4 max-w-lg leading-relaxed text-foreground-muted">Build a professional resume, choose a template, and export a PDF. ChapterCV keeps the process simple, so you can focus on what comes next.</p><ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground-muted"><li>Free to use</li><li>No account required</li><li>Saved in your browser</li></ul><a href="https://chaptercv.shrijislabs.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-8 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-80">Create your resume <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>
          </article>
          <article className="grid gap-5 border-t border-border py-9 md:grid-cols-[1fr_1.4fr] md:gap-16"><div><p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">AI Applications</p><h3 className="mt-3 text-2xl font-medium tracking-tight">Trade Orbit</h3></div><div className="flex flex-wrap items-center justify-between gap-5"><p className="max-w-xs leading-relaxed text-foreground-muted">Explore another product in the SHRIJIS Labs family.</p><a href="https://tradeorbit.shrijislabs.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-4 text-sm font-medium text-accent underline underline-offset-8 hover:opacity-75">Visit Trade Orbit <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div></article>
          <article className="grid gap-5 border-t border-border py-9 md:grid-cols-[1fr_1.4fr] md:gap-16"><div><p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">Sports Technology</p><h3 className="mt-3 text-2xl font-medium tracking-tight">CrickPilot</h3></div><div className="flex flex-wrap items-center justify-between gap-5"><p className="max-w-xs leading-relaxed text-foreground-muted">Build a focused cricket practice plan for your next match.</p><a href="https://www.crickpilot.shrijislabs.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-4 text-sm font-medium text-accent underline underline-offset-8 hover:opacity-75">Visit CrickPilot <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div></article>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16"><h3 className="text-xl font-medium tracking-tight">The foundations<br />behind what we build.</h3><dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{disciplines.map(([title,description])=><div key={title}><dt className="font-medium">{title}</dt><dd className="mt-2 text-sm leading-relaxed text-foreground-muted">{description}</dd></div>)}</dl></div>
      </div>
    </section>
  );
}
