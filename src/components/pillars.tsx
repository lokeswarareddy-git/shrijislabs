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

        <div className="mt-16 sm:mt-20">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.04}>
              <div className="group flex flex-col gap-6 border-b border-border py-9 sm:flex-row sm:items-center sm:gap-10 sm:py-11">
                <span className="font-mono text-sm text-foreground-subtle sm:w-10">
                  {pillar.index}
                </span>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border text-foreground-muted transition-colors duration-500 group-hover:border-accent-2/40 group-hover:text-accent-2">
                  <pillar.Icon className="h-7 w-7" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-base text-foreground-muted sm:mt-2">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
