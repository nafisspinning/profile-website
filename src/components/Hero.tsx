import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 bg-primary/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
            </span>
            Available for new opportunities
          </p>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.displayName}
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
          <div className="relative w-64 sm:w-80">
            {/* dot-grid accent, sits behind everything */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 opacity-70 [background-image:radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:14px_14px]"
            />

            {/* offset block behind the photo frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-accent" />

            {/* photo frame */}
            <div className="relative border border-border bg-card p-2.5 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 640px) 320px, 256px"
                  className="object-cover object-top grayscale-[15%]"
                />
              </div>
            </div>

            {/* rotated role chip */}
            <div className="absolute -right-5 -top-5 flex h-14 w-14 rotate-6 items-center justify-center border border-border bg-primary font-heading text-lg font-bold text-primary-foreground shadow-lg">
              {"</>"}
            </div>

            {/* floating status card */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 border border-border bg-card px-4 py-3 shadow-lg">
              <span className="flex h-9 w-9 flex-none items-center justify-center bg-accent-subtle text-accent-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-sm font-bold leading-tight text-foreground">
                  Open to Work
                </p>
                <p className="text-xs text-muted-foreground">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
