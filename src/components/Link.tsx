import type { AnchorHTMLAttributes, ReactNode } from "react";
import { toHref } from "../routes";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Site route path, for example "/opt-in/". */
  to: string;
  children: ReactNode;
}

/**
 * A plain anchor that resolves site routes against the repository subpath.
 * Each route is its own static HTML file, so navigation is a normal page load.
 */
export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={toHref(to)} {...rest}>
      {children}
    </a>
  );
}
