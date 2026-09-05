import { profile } from "@/lib/data";

const highlights = [
  { label: "Status", value: "Fresh Graduate" },
  { label: "Focus", value: "Fullstack Web & Mobile" },
  { label: "Looking for", value: "New Opportunities" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Turning ideas into working software
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profile.about}
          </p>

          <div className="flex flex-col gap-6 self-start divide-y divide-border border border-border bg-card p-8 sm:gap-7">
            {highlights.map((item) => (
              <div key={item.label} className="pt-6 first:pt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1.5 font-heading text-lg font-semibold text-foreground sm:text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
