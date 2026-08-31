import { profile } from "@/lib/data";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "10+" },
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

          <div className="grid grid-cols-3 gap-6 self-start border border-border bg-card p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
