import Image from "next/image";
import { professional } from "@/lib/site-content";
import { Icon } from "./ui/icon";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a href="#inicio" aria-label="Voltar ao início">
              <Image
                src="/images/optimized/logo.webp"
                alt="Rafaelly Lourenço — Psicóloga clínica"
                width={230}
                height={76}
              />
            </a>
            <p>
              Um espaço para ser você.
              <br />
              Um cuidado para a sua história.
            </p>
            <nav aria-label="Navegação do rodapé">
              <a href="#sobre">Sobre mim</a>
              <a href="#abordagem">Minha abordagem</a>
              <a href="#duvidas">Dúvidas frequentes</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {professional.name}. Todos os
              direitos reservados.
            </span>
            <span>
              Psicóloga clínica
              {professional.crp ? ` · CRP ${professional.crp}` : ""}
            </span>
          </div>
        </div>
      </footer>
      <a
        className="floating-contact"
        href={professional.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Rafaelly no WhatsApp"
      >
        <Icon name="chat" />
      </a>
    </>
  );
}
