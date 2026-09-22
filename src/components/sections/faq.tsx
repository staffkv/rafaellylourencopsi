import { questions } from "@/lib/site-content";
import { Icon } from "../ui/icon";
import { SectionHeading } from "../ui/section-heading";

export function Faq() {
  return (
    <section id="duvidas" className="section faq">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="ANTES DO PRIMEIRO PASSO"
          description="É natural ter perguntas. Aqui estão algumas respostas para ajudar você a começar."
        >
          Podemos esclarecer
          <br />
          <em>algumas dúvidas.</em>
        </SectionHeading>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.question} name="perguntas" className="faq-item">
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{item.question}</span>
                <Icon name="plus" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
