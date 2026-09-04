import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <span className="text-sm font-semibold tracking-[0.14em] text-foreground-muted">
          SHRIJIS&nbsp;LABS
        </span>

        <nav className="flex items-center gap-6 text-sm text-foreground-subtle">
          <a href="#build" className="transition-colors hover:text-foreground">
            What We Build
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <span className="text-sm text-foreground-subtle">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
