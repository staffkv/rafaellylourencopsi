import Image from "next/image";
import { ContactLink } from "../ui/contact-link";
import { Icon } from "../ui/icon";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            UM ESPAÇO DE ESCUTA E ACOLHIMENTO
          </span>
          <h1>
            A saúde mental também precisa de sua atenção e cuidado!
          </h1>
          <p>
            Um espaço para acolher o que você sente, compreender a sua história
            e construir novos caminhos. No seu tempo, com cuidado e presença.
          </p>
          <div className="hero-actions">
            <ContactLink>Quero cuidar de mim</ContactLink>
            <a className="text-link" href="#sobre">
              Conheça a Rafaelly <Icon name="down" />
            </a>
          </div>
          <div className="hero-note">
            <Icon name="shield" />
            <span>Escuta acolhedora. Cuidado individualizado.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/images/optimized/rafaelly-hero.webp"
              alt="Psicóloga Rafaelly Lourenço em seu consultório"
              fill
              sizes="(max-width: 760px) 90vw, 46vw"
              preload
            />
          </div>
          <div className="portrait-caption">
            <span>Rafaelly Lourenço</span>
            <span>PSICÓLOGA CLÍNICA</span>
          </div>
          <div className="hero-stamp">
            <Icon name="heart" />
            <span>Você tem colocado o cuidado psicológico em último plano?</span>
          </div>
          <span className="photo-side-note">
            CADA HISTÓRIA MERECE SER OUVIDA
          </span>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>PSICOLOGIA COM SENSIBILIDADE E PROPÓSITO</span>
        <a href="#acolhimento">
          Seu primeiro passo começa aqui <Icon name="down" />
        </a>
      </div>
    </section>
  );
}

export function WelcomeStrip() {
  return (
    <section id="acolhimento" className="welcome-strip">
      <div className="container welcome-inner">
        <Icon name="heart" />
        <h2>Há espaço para o que você sente.</h2>
        <p>
          Não é preciso esperar que tudo fique difícil.
          <br />
          Olhar para si também é uma forma de cuidado.
        </p>
      </div>
    </section>
  );
}
