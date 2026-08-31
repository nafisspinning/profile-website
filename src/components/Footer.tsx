import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
