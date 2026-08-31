import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-muted py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve been
          </h2>
        </div>

        <ol className="relative border-l-2 border-border pl-8 sm:pl-10">
          {experience.map((item) => (
            <li key={item.role + item.org} className="mb-12 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 border-2 border-background bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                {item.period}
              </p>
              <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                {item.org}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
