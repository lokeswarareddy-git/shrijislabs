import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-foreground-subtle">
              About
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.2]">
              SHRIJIS Labs is a technology company focused on building
              useful software, intelligent applications, and innovative
              digital products.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
