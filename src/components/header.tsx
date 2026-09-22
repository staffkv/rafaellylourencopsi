"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/site-content";
import { ContactLink } from "./ui/contact-link";
import { Icon } from "./ui/icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="Rafaelly Lourenço — início"
        >
          <Image
            src="/images/optimized/logo.webp"
            alt="Rafaelly Lourenço, psicóloga clínica"
            width={230}
            height={76}
            preload
          />
        </a>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <ContactLink onClick={() => setOpen(false)}>
            Falar no WhatsApp
          </ContactLink>
        </nav>
      </div>
    </header>
  );
}
