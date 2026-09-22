const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558391814951"
).replace(/\D/g, "");

export const professional = {
  name: "Rafaelly Lourenço",
  crp: process.env.NEXT_PUBLIC_CRP || "13/13489",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, Rafaelly! Gostaria de saber mais sobre o atendimento psicológico.")}`,
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Ansiedade", href: "#ansiedade" },
  { label: "Terapia para Adolescentes", href: "#adolescentes" },
  { label: "Terapia para Casais", href: "#casais" },
];

export const concerns = [
  {
    number: "01",
    title: "Ansiedade generalizada",
    subtitle: "Quando a mente parece não descansar.",
    description:
      "Preocupação constante, inquietação, dificuldade para dormir e tensão no corpo.",
    focus:
      "Compreender seus pensamentos e desenvolver mais flexibilidade diante das preocupações.",
    icon: "mind",
  },
  {
    number: "02",
    title: "Ansiedade social",
    subtitle: "Quando estar com o outro é um desafio.",
    description:
      "Medo de julgamentos, insegurança nas interações e vontade de evitar situações sociais.",
    focus:
      "Construir confiança, respeitando seu ritmo, para se sentir mais à vontade nas relações.",
    icon: "people",
  },
  {
    number: "03",
    title: "Fobias e medos",
    subtitle: "Quando o medo limita suas escolhas.",
    description:
      "Medo intenso de situações específicas, como voar, estar em locais fechados ou perto de animais.",
    focus:
      "Construir um caminho gradual e cuidadoso para lidar com os medos e ampliar sua autonomia.",
    icon: "shield",
  },
  {
    number: "04",
    title: "Depressão",
    subtitle: "Quando os dias perdem a cor.",
    description:
      "Desânimo, cansaço frequente, perda de interesse e dificuldade para enxergar possibilidades.",
    focus:
      "Trabalhar a ativação comportamental, os pensamentos e a retomada de atividades significativas.",
    icon: "sun",
  },
  {
    number: "05",
    title: "Estresse e burnout",
    subtitle: "Quando tudo parece demais.",
    description:
      "Esgotamento físico e mental, irritabilidade e a sensação de nunca conseguir desacelerar.",
    focus:
      "Desenvolver limites, regular o estresse e construir uma rotina mais sustentável.",
    icon: "balance",
  },
] as const;

export const qualifications = [
  "Graduação em Psicologia pela UNIESP.",
  "Capacitação em Terapia Cognitivo-Comportamental (TCC).",
  "Formação na Prática em TCC com Gabriela Affonso, psicóloga e mestre pela USP.",
  "Curso em Terapias Cognitivas na ARTMED em andamento.",
  "Pós-graduação em Terapias Cognitivas e Contextuais para Casais na PUCPR em andamento.",
];

export const questions = [
  {
    question: "Preciso saber o que dizer na primeira sessão?",
    answer:
      "Você não precisa chegar com tudo organizado. O primeiro encontro é um espaço para se apresentar, falar sobre o que motivou a busca por terapia e tirar dúvidas sobre o acompanhamento. A conversa acontece no seu ritmo.",
  },
  {
    question: "Como funciona a Terapia Cognitivo-Comportamental?",
    answer:
      "No acompanhamento, vamos olhar para as relações entre pensamentos, emoções e comportamentos, considerando a sua história e os desafios do presente. Os objetivos do trabalho são construídos em conjunto.",
  },
  {
    question: "Qual é a duração e a frequência das sessões?",
    answer:
      "A duração e a frequência são combinadas no início do acompanhamento, de acordo com as necessidades de cada pessoa. Você pode conversar com a Rafaelly sobre esses detalhes antes de agendar.",
  },
  {
    question: "Como funciona o atendimento para adolescentes?",
    answer:
      "O acompanhamento oferece espaço para conversar sobre emoções, mudanças e relações. A participação dos responsáveis e os combinados do atendimento são conversados no início, considerando cada situação.",
  },
  {
    question: "A terapia de casal é só para momentos de crise?",
    answer:
      "A proposta também pode envolver compreender a relação, conversar sobre dificuldades e construir objetivos compartilhados. No contato inicial, vocês podem apresentar o que os motivou a buscar acompanhamento.",
  },
  {
    question: "Como posso agendar e consultar valores?",
    answer:
      "Entre em contato pelo WhatsApp para conversar sobre disponibilidade, valores e modalidades de atendimento. Os detalhes são combinados diretamente com a profissional.",
  },
];
