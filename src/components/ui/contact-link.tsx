import type { ReactNode } from "react";
import { professional } from "@/lib/site-content";
import { Icon } from "./icon";

export function ContactLink({
  children = "Vamos conversar?",
  variant = "primary",
  className = "",
  href = professional.whatsappUrl,
  onClick,
}: {
  children?: ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <Icon name="chat" />
      <span>{children}</span>
      <Icon name="arrow" className="button-arrow" />
    </a>
  );
}
