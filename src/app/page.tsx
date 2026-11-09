import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Approach } from "@/components/sections/approach";
import { Concerns } from "@/components/sections/concerns";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero, WelcomeStrip } from "@/components/sections/hero";
import { Presentation } from "@/components/sections/presentation";
import { Services } from "@/components/sections/services";
import { professional } from "@/lib/site-content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://rafaellylourencopsi.vercel.app/#rafaelly-lourenco",
  name: professional.name,
  jobTitle: "Psicóloga clínica",
  identifier: `CRP ${professional.crp}`,
  url: "https://rafaellylourencopsi.vercel.app/",
  description:
    "Psicóloga clínica com atendimento presencial em João Pessoa, Paraíba, e atuação em psicoterapia para jovens, adultos, crianças, adolescentes e casais.",
  knowsAbout: [
    "Psicologia clínica",
    "Terapia Cognitivo-Comportamental",
    "Psicoterapia para jovens e adultos",
    "Psicoterapia para crianças e adolescentes",
    "Terapia para casais",
  ],
  sameAs: [professional.instagramUrl, professional.childInstagramUrl],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <WelcomeStrip />
        <Concerns />
        <About />
        <Approach />
        <Services />
        <Presentation />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
