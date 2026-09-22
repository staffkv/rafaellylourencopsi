import { Icon } from "../ui/icon";
import { SectionHeading } from "../ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Acolher a sua história",
    text: "Um primeiro espaço de escuta para conhecer você, suas vivências e o que trouxe você até aqui.",
  },
  {
    number: "02",
    title: "Compreender os caminhos",
    text: "Olhar juntos para pensamentos, emoções e comportamentos, construindo objetivos que façam sentido para você.",
  },
  {
    number: "03",
    title: "Construir novas possibilidades",
    text: "Desenvolver recursos para o cotidiano e acompanhar o processo com respeito ao seu tempo e à sua individualidade.",
  },
];

export function Approach() {
  return (
    <section id="abordagem" className="section approach">
      <div className="container">
        <div className="approach-intro">
          <SectionHeading eyebrow="O CUIDADO, NA PRÁTICA">
            Um processo construído
            <br />
            <em>com você.</em>
          </SectionHeading>
          <div>
            <p>
              Meu trabalho tem como base a Terapia Cognitivo-Comportamental
              (TCC), com atenção às relações entre o que você pensa, sente e
              faz.
            </p>
            <span className="approach-tag">
              <Icon name="heart" /> Técnica e sensibilidade, lado a lado.
            </span>
          </div>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
