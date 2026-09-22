import { concerns } from "@/lib/site-content";
import { ContactLink } from "../ui/contact-link";
import { Icon } from "../ui/icon";
import { SectionHeading } from "../ui/section-heading";

function ConcernCard({ concern }: { concern: (typeof concerns)[number] }) {
  return (
    <article className="concern-card">
      <div className="card-top">
        <span className="icon-box">
          <Icon name={concern.icon} />
        </span>
        <span className="card-number">{concern.number}</span>
      </div>
      <h3>{concern.title}</h3>
      <p className="card-subtitle">{concern.subtitle}</p>
      <p>{concern.description}</p>
      <div className="card-focus">
        <span>COMO PODEMOS TRABALHAR</span>
        <p>{concern.focus}</p>
      </div>
    </article>
  );
}

export function Concerns() {
  return (
    <section id="ansiedade" className="section concerns">
      <div className="container">
        <div className="section-intro">
          <SectionHeading eyebrow="UM OLHAR PARA O QUE VOCÊ VIVE">
            O que tem pesado
            <br />
            <em>por aí?</em>
          </SectionHeading>
          <p>
            Às vezes, é difícil colocar em palavras. A terapia é um espaço para
            compreender o que acontece dentro de você e encontrar formas de
            lidar com isso.
          </p>
        </div>
        <div className="concerns-grid">
          {concerns.map((concern) => (
            <ConcernCard key={concern.number} concern={concern} />
          ))}
          <article className="concern-invitation">
            <Icon name="chat" />
            <h3>
              Não precisa ter
              <br />
              todas as respostas.
            </h3>
            <p>
              Podemos começar com uma conversa e entender, juntos, o que faz
              sentido para você.
            </p>
            <ContactLink variant="light">Dar o primeiro passo</ContactLink>
          </article>
        </div>
      </div>
    </section>
  );
}
