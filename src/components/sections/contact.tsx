import { professional } from "@/lib/site-content";
import { ContactLink } from "../ui/contact-link";
import { Icon } from "../ui/icon";

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-inner">
        <Icon name="heart" className="contact-heart" />
        <span className="eyebrow">UM CONVITE PARA OLHAR PARA VOCÊ</span>
        <h2>
          Todo novo caminho começa
          <br />
          <em>com um primeiro passo.</em>
        </h2>
        <p>
          Você não precisa saber por onde começar.
          <br />
          Podemos descobrir juntos.
        </p>
        <ContactLink variant="light">
          WhatsApp para adultos e adolescentes
        </ContactLink>
        <ContactLink variant="light" href={professional.youthWhatsappUrl}>
          WhatsApp para crianças e adolescentes
        </ContactLink>
        <span className="contact-caption">
          Com acolhimento, respeito e cuidado.
        </span>
      </div>
    </section>
  );
}
