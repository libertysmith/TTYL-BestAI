
import type { ReactNode } from "react";

interface LegalIntroProps {
  title: string;
  lede?: ReactNode;
}

export function LegalIntro({ title, lede }: LegalIntroProps) {
  return (
    <header className="doc-header">
      <p className="eyebrow">Ttyl BestAI</p>
      <h1>{title}</h1>
      {lede ? <p className="doc-lede">{lede}</p> : null}
    </header>
  );
}