import { profile } from "@/lib/data";
import EmailButton from "./EmailButton";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: profile.socials.instagram, Icon: InstagramIcon },
];

const [emailUser, emailDomain] = profile.email.split("@");

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s talk
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              I&apos;m currently open to new opportunities and collaborations.
              Reach out by email or find me on social media.
            </p>

            <ul className="mt-9 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                      <link.Icon className="h-4 w-4" />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 -z-10 h-28 w-28 opacity-70 [background-image:radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:14px_14px]"
            />
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-accent" />

            <div className="relative flex flex-col gap-6 border border-border bg-card p-8 sm:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Location
                </p>
                <p className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                  {profile.location}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer email? Hit the button below to open a Gmail compose
                window with my address filled in.
              </p>
              <EmailButton
                user={emailUser}
                domain={emailDomain}
                className="mt-2 inline-flex items-center justify-center bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
              >
                Send an Email
              </EmailButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
