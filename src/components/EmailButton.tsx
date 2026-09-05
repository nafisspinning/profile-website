"use client";

import type { ReactNode } from "react";

export default function EmailButton({
  user,
  domain,
  className,
  children,
}: {
  user: string;
  domain: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        const to = encodeURIComponent(`${user}@${domain}`);
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`,
          "_blank",
          "noopener,noreferrer"
        );
      }}
      className={className}
    >
      {children}
    </button>
  );
}
