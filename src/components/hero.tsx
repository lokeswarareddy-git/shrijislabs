import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Independent ideas. Shared ambition.</p>
        <h1 className="mt-7 text-[clamp(2.8rem,6vw,4.8rem)] font-medium leading-[1.04] tracking-[-0.055em]">Useful products.<br />Built with care.</h1>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-foreground-muted">SHRIJIS Labs builds intelligent applications and digital products that turn everyday challenges into simpler experiences.</p>
        <a href="#build" className="mt-9 inline-flex min-h-12 items-center gap-8 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85">Explore our products <span aria-hidden="true">↗</span></a>
        <p className="mt-7 text-sm text-foreground-muted">AI applications · Software · Emerging technology</p>
      </div>
      <div className="overflow-hidden rounded-2xl bg-[#e5e7eb]">
        <Image src="/brand-sculpture.webp" alt="Interlocking aluminium frames and a cobalt glass plane, an abstract study in building things together" width={1000} height={1000} priority sizes="(max-width: 1023px) 100vw, 480px" className="aspect-square w-full object-cover" />
      </div>
    </section>
  );
}
