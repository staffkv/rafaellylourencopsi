import Image from "next/image";
import { professional, qualifications } from "@/lib/site-content";
import { Icon } from "../ui/icon";
import { SectionHeading } from "../ui/section-heading";

export function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-photo">
            <Image
              src="/images/optimized/rafaelly-sobre.webp"
              alt="Rafaelly Lourenço sentada à mesa de seu consultório"
              fill
              sizes="(max-width: 760px) 90vw, 40vw"
            />
          </div>
          <div className="about-quote">
            <span aria-hidden="true">“</span>
            <p>
              Antes de qualquer técnica,
              <br />
              existe uma história que
              <br />
              merece ser acolhida.
            </p>
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="PRAZER, SUA PSICÓLOGA">
            Sou Rafaelly
            <br />
            <em>Lourenço.</em>
          </SectionHeading>
          <p>
            Sou formada em Psicologia pela UNIESP e acredito em um cuidado que
            une escuta, conhecimento e respeito à singularidade de cada pessoa.
          </p>
          <p>
            Além da clínica, atuo como psicóloga na Alta Complexidade da
            Prefeitura de João Pessoa–PB, em contato com diferentes histórias e
            contextos de vida.
          </p>
          {professional.crp && (
            <p className="registration">CRP {professional.crp}</p>
          )}
          <div className="qualifications">
            <span className="eyebrow">FORMAÇÃO E APERFEIÇOAMENTO</span>
            <ul>
              {qualifications.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
