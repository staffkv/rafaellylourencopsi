import { concerns, therapyBenefits } from "@/lib/site-content";
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
      <details className="concern-details">
        <summary>
          Ver situações que podem ser trabalhadas <Icon name="plus" />
        </summary>
        <ul>
          {concern.situations.map((situation) => (
            <li key={situation}>{situation}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}

export function Concerns() {
  return (
    <section id="ansiedade" className="section concerns">
      <div className="container">
        <div className="section-intro">
          <SectionHeading eyebrow="PSICOTERAPIA PARA ADULTOS">
            Em quais situações a
            <br />
            <em>psicoterapia pode ajudar?</em>
          </SectionHeading>
          <p>
            A psicoterapia é um espaço de acolhimento, escuta e autoconhecimento,
            que possibilita compreender emoções, pensamentos e comportamentos,
            desenvolver novas estratégias de enfrentamento e lidar de maneira
            mais saudável com os desafios da vida. O acompanhamento pode ajudar
            em diferentes momentos e situações, como:
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
        <div className="therapy-followup">
          <div className="therapy-benefits">
            <h3>A psicoterapia também pode ajudar você a:</h3>
            <ul>
              {therapyBenefits.map((benefit) => (
                <li key={benefit}>
                  <Icon name="check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            Você não precisa esperar que o sofrimento se torne insuportável para
            buscar acompanhamento psicológico. O cuidado também pode começar
            pelo desejo de se conhecer melhor, desenvolver recursos emocionais
            e construir uma vida mais alinhada aos seus valores.
          </p>
          <p>
            O acompanhamento é individualizado e considera a história, as
            necessidades e os objetivos de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
