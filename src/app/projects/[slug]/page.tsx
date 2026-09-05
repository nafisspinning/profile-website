import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Muhammad Nafis Hibatullah`,
    description: project.description,
  };
}

const metaItems = (project: (typeof projects)[number]) => [
  { label: "Category", value: project.category },
  { label: "Year", value: project.year },
  { label: "Role", value: project.role },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Link
              href="/#projects"
              className="text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              ← Back to Projects
            </Link>

            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
              {project.category}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.overview}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border border-border bg-card p-6 sm:p-8">
              {metaItems(project).map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-heading text-base font-semibold text-foreground sm:text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={project.demoUrl}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
              >
                Live Demo
              </a>
              <a
                href={project.repoUrl}
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Source Code
              </a>
              {project.backendRepoUrl && (
                <a
                  href={project.backendRepoUrl}
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Backend Repo
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-6 sm:px-8 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                The Challenge
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                The Solution
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Process
            </h2>
            <ol className="mt-6 space-y-5">
              {project.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center border border-border bg-card text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-base leading-relaxed text-muted-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Gallery
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-[16/10] overflow-hidden border border-border"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  Result
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.result}
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  Technology & Tools
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-8">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group border border-border p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                ← Previous Project
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                {prevProject.title}
              </p>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group border border-border p-6 text-right transition-colors hover:border-primary"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Next Project →
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                {nextProject.title}
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
