import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-muted py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools & technologies I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
