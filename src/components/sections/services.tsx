import Image from "next/image";
import { ContactLink } from "../ui/contact-link";
import { Icon, type IconName } from "../ui/icon";
import { SectionHeading } from "../ui/section-heading";

function ServicePanel({
  id,
  title,
  emphasis,
  eyebrow,
  description,
  image,
  imageAlt,
  items,
  icon,
  reverse = false,
}: {
  id: string;
  title: string;
  emphasis: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
  icon: IconName;
  reverse?: boolean;
}) {
  return (
    <article id={id} className={`service-panel${reverse ? " reversed" : ""}`}>
      <div className="service-photo">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 760px) 90vw, 42vw"
        />
        <span className="service-photo-label">
          <Icon name={icon} />
          {eyebrow}
        </span>
      </div>
      <div className="service-copy">
        <SectionHeading eyebrow={eyebrow}>
          {title}
          <br />
          <em>{emphasis}</em>
        </SectionHeading>
        <p>{description}</p>
        <ul className="service-list">
          {items.map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>
        <ContactLink>Conversar sobre o atendimento</ContactLink>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section className="section services">
      <div className="container">
        <ServicePanel
          id="adolescentes"
          eyebrow="TERAPIA PARA ADOLESCENTES"
          title="Crescer também é"
          emphasis="aprender a sentir."
          description="Entre tantas mudanças, ter um espaço de escuta faz diferença. Um acompanhamento que respeita a individualidade do adolescente e acolhe as questões dessa fase."
          image="/images/optimized/rafaelly-adolescentes.webp"
          imageAlt="Rafaelly Lourenço, psicóloga responsável pelo acompanhamento de adolescentes"
          items={[
            "Emoções, identidade e autoconhecimento",
            "Relações familiares, amizades e vida escolar",
            "Acolhimento das inseguranças e mudanças",
          ]}
          icon="sun"
        />
        <ServicePanel
          id="casais"
          eyebrow="TERAPIA PARA CASAIS"
          title="Um espaço para ouvir."
          emphasis="E se ouvir."
          description="Cada relação tem sua história. A terapia de casal é um convite para olhar para ela com cuidado, abrir espaço para o diálogo e compreender as necessidades de cada um."
          image="/images/optimized/rafaelly-casais.webp"
          imageAlt="Rafaelly Lourenço em seu espaço de trabalho"
          items={[
            "Comunicação e escuta na relação",
            "Compreensão de conflitos e expectativas",
            "Construção conjunta de novos caminhos",
          ]}
          icon="heart"
          reverse
        />
      </div>
    </section>
  );
}
