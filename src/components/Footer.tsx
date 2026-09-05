import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 font-semibold text-foreground/80 transition-colors hover:text-primary"
        >
          Back to top
          <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
