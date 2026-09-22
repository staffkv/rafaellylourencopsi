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

export default function Home() {
  return (
    <>
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
