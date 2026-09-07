import { Reveal } from "@/components/reveal";
import {
  AiAgentsIcon,
  AiApplicationsIcon,
  CloudSoftwareIcon,
  EmergingTechIcon,
  MobileAppsIcon,
  SaasProductsIcon,
} from "@/components/icons";

const PILLARS = [
  {
    index: "01",
    title: "AI Applications",
    description: "Intelligent applications powered by modern AI.",
    Icon: AiApplicationsIcon,
    apps: [{ name: "Trade Orbit", href: "https://tradeorbit.shrijislabs.com" }],
  },
  {
    index: "02",
    title: "AI Agents",
    description:
      "AI agents that automate workflows and solve complex tasks.",
    Icon: AiAgentsIcon,
  },
  {
    index: "03",
    title: "Mobile Apps",
    description: "Beautiful and useful mobile experiences.",
    Icon: MobileAppsIcon,
  },
  {
    index: "04",
    title: "SaaS Products",
    description: "Scalable software products built for the cloud.",
    Icon: SaasProductsIcon,
  },
  {
    index: "05",
    title: "Cloud & Software",
    description:
      "Modern APIs, platforms, microservices, and cloud infrastructure.",
    Icon: CloudSoftwareIcon,
  },
  {
    index: "06",
    title: "Emerging Technology",
    description: "Exploring and building what's next.",
    Icon: EmergingTechIcon,
  },
] as const;

export function Pillars() {
  return (
    <section id="build" className="relative border-t border-border py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-foreground-subtle">
            What We Build
          </span>
          <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Six disciplines. One standard of craft.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 0.05}>
              <div className="group">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <pillar.Icon className="h-7 w-7" />
                  </div>
                  <span className="font-mono text-xs text-foreground-subtle">
                    {pillar.index}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-sm text-base leading-relaxed text-foreground-muted">
                  {pillar.description}
                </p>
                {"apps" in pillar && pillar.apps && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pillar.apps.map((app) => (
                      <a
                        key={app.href}
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-accent transition-colors hover:border-accent/60 hover:bg-accent-soft"
                      >
                        {app.name}
                        <span aria-hidden>&#8599;</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
