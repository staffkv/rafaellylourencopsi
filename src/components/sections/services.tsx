import Image from "next/image";
import {
  professional,
  teenTherapyStages,
  youthConcerns,
} from "@/lib/site-content";
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
  contactHref,
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
  contactHref?: string;
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
        <ContactLink href={contactHref}>
          Conversar sobre o atendimento
        </ContactLink>
      </div>
    </article>
  );
}

function YouthTherapy() {
  return (
    <div className="youth-therapy">
      <div className="youth-overview">
        <SectionHeading
          eyebrow="PSICOTERAPIA INFANTOJUVENIL"
          description="Um espaço para compreender emoções, acolher dificuldades e construir novas possibilidades."
        >
          Como a psicoterapia infantojuvenil pode ajudar seu filho(a)?
        </SectionHeading>
        <div className="youth-copy">
          <p>
            Crescer envolve descobertas, mudanças e desafios que nem sempre são
            fáceis de compreender ou expressar. Às vezes, o sofrimento aparece
            em forma de medo, irritabilidade, isolamento, dificuldades nos
            relacionamentos ou comportamentos que parecem difíceis de manejar.
          </p>
          <p>
            Na psicoterapia infantojuvenil, crianças e adolescentes são
            acolhidos em sua singularidade. O trabalho busca compreender o que
            está por trás de suas emoções e comportamentos, considerando sua
            história, suas relações e o ambiente em que estão inseridos.
          </p>
          <p>
            Ao longo do acompanhamento, são desenvolvidos recursos para
            reconhecer e expressar sentimentos, lidar com frustrações,
            fortalecer a autoestima, construir relações mais saudáveis e
            enfrentar os desafios próprios de cada fase da vida.
          </p>
          <p>
            A família também pode fazer parte desse processo. Quando necessário,
            pais e responsáveis são orientados a compreender melhor as
            necessidades emocionais dos filhos e a construir formas mais
            saudáveis de comunicação e convivência.
          </p>
          <p>
            Mais do que olhar para uma dificuldade isolada, o objetivo é
            compreender a criança ou o adolescente como um todo, respeitando seu
            tempo, suas potencialidades e suas necessidades.
          </p>
        </div>
      </div>
      <div className="youth-topics-heading">
        <h3>Demandas que podem ser trabalhadas</h3>
        <p>
          Cada acompanhamento é pensado a partir da história e das necessidades
          de cada criança ou adolescente.
        </p>
      </div>
      <div className="youth-topics-grid">
        {youthConcerns.map((concern) => (
          <article className="youth-topic-card" key={concern.title}>
            <Icon name={concern.icon} />
            <h4>{concern.title}</h4>
            <p>{concern.description}</p>
          </article>
        ))}
      </div>
      <p className="youth-closing">
        Cada história merece ser escutada com cuidado. Cada criança e
        adolescente merece encontrar espaço para se desenvolver, construir
        recursos emocionais e descobrir novas maneiras de lidar com o mundo.
      </p>
    </div>
  );
}

function YouthGallery() {
  const images = [
    {
      src: "/images/optimized/sala-infantojuvenil.webp",
      alt: "Sala de atendimento com quadros infantis, planta e poltronas",
      caption: "Sala de atendimento",
    },
    {
      src: "/images/optimized/ambiente-infantojuvenil.webp",
      alt: "Ambiente de atendimento com estante, livros e porta de consultório",
      caption: "Espaço de acolhimento",
    },
  ];

  return (
    <section className="youth-gallery" aria-label="Espaço de atendimento">
      <div className="youth-gallery-heading">
        <span className="eyebrow">CONHEÇA O ESPAÇO</span>
        <h3>Um ambiente para acolher cada história.</h3>
      </div>
      <div className="youth-gallery-grid">
        {images.map((image) => (
          <figure className="youth-gallery-photo" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 760px) 90vw, 42vw"
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function TeenTherapyProcess() {
  return (
    <section className="teen-process" aria-labelledby="teen-process-title">
      <div className="teen-process-intro">
        <div>
          <span className="eyebrow">ACOMPANHAMENTO INDIVIDUALIZADO</span>
          <h3 id="teen-process-title">
            Como funciona a psicoterapia para adolescentes?
          </h3>
        </div>
        <p>
          As sessões têm duração de 50 minutos e são conduzidas de acordo com as
          necessidades individuais de cada adolescente, respeitando seu
          desenvolvimento, suas particularidades e suas demandas emocionais,
          comportamentais e sociais.
        </p>
      </div>
      <ol className="teen-process-grid">
        {teenTherapyStages.map((stage, index) => (
          <li className="teen-process-card" key={stage.title}>
            <span className="teen-process-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="teen-process-subtitle">{stage.subtitle}</span>
            <h4>{stage.title}</h4>
            <p>{stage.description}</p>
            {stage.points.length > 0 && (
              <ul>
                {stage.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      <p className="teen-process-closing">
        O objetivo é oferecer um espaço seguro, acolhedor e ético, favorecendo o
        desenvolvimento emocional, social e comportamental do adolescente,
        ampliando seus recursos para lidar com desafios, fortalecer suas
        relações interpessoais e desenvolver maior autonomia e qualidade de
        vida. A psicoterapia é um processo que exige tempo, participação e
        compromisso, respeitando as necessidades e o ritmo de desenvolvimento de
        cada adolescente.
      </p>
    </section>
  );
}

export function Services() {
  return (
    <section className="services">
      <div className="youth-area">
        <div className="container">
          <ServicePanel
            id="adolescentes"
            eyebrow="PSICOTERAPIA INFANTOJUVENIL"
            title="Cuidado para crianças"
            emphasis="e adolescentes."
            description="Um espaço para compreender emoções, acolher dificuldades e construir novas possibilidades."
            image="/images/optimized/rafaelly-infantojuvenil.webp"
            imageAlt="Rafaelly Lourenço, psicóloga responsável pelo acompanhamento de crianças e adolescentes"
            items={[
              "Ansiedade, medos e inseguranças",
              "Emoções, autoestima e relacionamentos",
              "Família, rotina e desafios escolares",
            ]}
            icon="sun"
            contactHref={professional.youthWhatsappUrl}
          />
          <YouthGallery />
          <YouthTherapy />
          <TeenTherapyProcess />
          <aside
            className="adolescent-reel"
            aria-label="Vídeo sobre adolescentes"
          >
            <div className="adolescent-reel-copy">
              <span className="eyebrow">UM CONTEÚDO PARA ESTA FASE</span>
              <h3>Uma conversa sobre adolescência.</h3>
              <p>
                Assista ao vídeo e explore este conteúdo junto com a proposta de
                escuta e acolhimento para adolescentes.
              </p>
            </div>
            <iframe
              src="https://www.instagram.com/reel/DezFzU7gZ-T/embed"
              title="Vídeo do Instagram sobre adolescentes"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </aside>
        </div>
      </div>
      <div className="container couple-area">
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
