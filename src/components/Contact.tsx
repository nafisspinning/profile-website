import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something great together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m currently open to new opportunities and collaborations.
          Whether you have a question or just want to say hi, my inbox is
          always open.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
          >
            Say Hello — {profile.email}
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
