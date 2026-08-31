import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group border border-border bg-card transition-colors hover:border-primary"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[3/2] overflow-hidden border-b border-border"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <span>{project.category}</span>
                  <span aria-hidden className="h-1 w-1 bg-border" />
                  <span>{project.year}</span>
                </div>

                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-primary"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-primary"
                  >
                    View Case Study →
                  </Link>
                  <a
                    href={project.repoUrl}
                    className="text-sm font-semibold text-muted-foreground hover:text-primary"
                  >
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
