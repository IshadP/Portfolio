import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-label-lg-mono text-text-disabled w-full max-w-[1024px]">
      {children}
    </p>
  );
}

export function BodyText({ children }: { children: ReactNode }) {
  return (
    <p className="font-body-sm text-text-secondary w-full max-w-[1024px]">
      {children}
    </p>
  );
}

export function Heading({ children }: { children: ReactNode }) {
  return (
    <p className="font-h2 text-text-primary w-full max-w-[1024px]">
      {children}
    </p>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <p className="font-h3 text-text-primary w-full max-w-[1024px]">
      {children}
    </p>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <p className="font-h2 px-6 text-text-primary w-full max-w-[1024px]">
      {children}
    </p>
  );
}

export function Divider() {
  return <div className="border-x border-border-default h-8 w-full" />;
}
