import type { ReactNode } from "react";

/** Marks text that must be replaced with confirmed information before launch. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="placeholder">[{children}]</span>;
}
