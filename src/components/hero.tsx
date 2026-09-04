import { HeroVisual } from "@/components/hero-visual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 sm:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mask-fade-b"
      >
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-float-slow" />
        <div className="absolute right-[8%] top-[30%] h-[40vh] w-[40vh] rounded-full bg-accent-2/15 blur-[110px] animate-float-slower" />
        <HeroVisual />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse-dot" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-foreground-subtle">
              SHRIJIS Labs
            </span>
          </div>

          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Building{" "}
            <span className="text-gradient">Intelligent Technology</span> for
            What&rsquo;s Next.
          </h1>

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-foreground-muted sm:text-xl">
            AI applications, mobile experiences, SaaS products, and cloud
            platforms &mdash; designed and engineered with precision.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#build"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Explore What We Build
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent-2/60 hover:text-accent-2"
            >
              Let&rsquo;s Build
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="h-9 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />
      </div>
    </section>
  );
}
