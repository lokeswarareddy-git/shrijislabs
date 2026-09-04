import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-32 sm:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Have an idea?
            <br />
            Let&rsquo;s build it.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
