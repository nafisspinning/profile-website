import { profile } from "@/lib/data";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 bg-primary/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-accent" />
            Available for new opportunities
          </p>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}
            <br />
            <span className="text-primary">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.tagline} {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-lg bg-accent" />
            <div className="flex h-56 w-56 items-center justify-center rounded-lg border border-border bg-primary sm:h-72 sm:w-72">
              <span className="font-heading text-6xl font-bold text-primary-foreground sm:text-7xl">
                {initials}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
