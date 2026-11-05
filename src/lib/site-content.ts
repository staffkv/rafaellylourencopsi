const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5583986949995"
).replace(/\D/g, "");
const phoneParts = whatsappNumber.match(/^55(\d{2})(\d{5})(\d{4})$/);

export const professional = {
  name: "Rafaelly Lourenço",
  crp: process.env.NEXT_PUBLIC_CRP || "13/13489",
  phone: whatsappNumber,
  phoneDisplay: phoneParts
    ? `(${phoneParts[1]}) ${phoneParts[2]}-${phoneParts[3]}`
    : whatsappNumber,
  instagramUrl: "https://www.instagram.com/psirafaellylourenco/",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, Rafaelly! Gostaria de saber mais sobre o atendimento psicológico.")}`,
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Ansiedade", href: "#ansiedade" },
  { label: "Terapia Infantojuvenil", href: "#adolescentes" },
  { label: "Terapia para Casais", href: "#casais" },
];

export const concerns = [
  {
    number: "01",
    title: "Ansiedade e preocupações excessivas",
    subtitle:
      "Pensamentos acelerados, insegurança, medos e dificuldade para relaxar.",
    situations: [
      "Preocupação constante com o futuro",
      "Pensamentos acelerados e dificuldade para relaxar",
      "Medo de falhar, errar ou perder o controle",
      "Insegurança e necessidade excessiva de controle",
      "Crises de ansiedade e dificuldade para lidar com situações estressantes",
    ],
    icon: "mind",
  },
  {
    number: "02",
    title: "Autoestima, autoconhecimento e emoções",
    subtitle:
      "Autocrítica, insegurança, necessidade de aprovação e compreensão das próprias emoções.",
    situations: [
      "Insegurança e autocrítica excessiva",
      "Dificuldade em reconhecer e expressar sentimentos",
      "Dificuldade para estabelecer limites e dizer não",
      "Necessidade de aprovação e medo de desagradar",
      "Dificuldade para lidar com frustrações",
    ],
    icon: "people",
  },
  {
    number: "03",
    title: "Relacionamentos e vida afetiva",
    subtitle: "Conflitos, comunicação, confiança e limites nas relações.",
    situations: [
      "Conflitos recorrentes nos relacionamentos",
      "Dificuldades de comunicação",
      "Dependência emocional e medo de abandono",
      "Ciúmes, insegurança e dificuldades de confiança",
      "Dificuldade para estabelecer limites saudáveis",
      "Sofrimento diante de términos e mudanças na vida afetiva",
    ],
    icon: "heart",
  },
  {
    number: "04",
    title: "Estresse, sobrecarga e esgotamento emocional",
    subtitle:
      "Excesso de responsabilidades, irritabilidade e dificuldade para equilibrar as demandas da vida.",
    situations: [
      "Sensação de estar sempre sobrecarregado(a)",
      "Dificuldade para conciliar vida pessoal e profissional",
      "Excesso de responsabilidades",
      "Irritabilidade e dificuldade para descansar",
      "Dificuldade para lidar com mudanças e cobranças",
    ],
    icon: "balance",
  },
  {
    number: "05",
    title: "Procrastinação, organização e produtividade",
    subtitle:
      "Adiamento de tarefas, dificuldade para manter o foco, planejamento e autocobrança.",
    situations: [
      "Adiamento frequente de tarefas importantes",
      "Dificuldade para iniciar ou concluir atividades",
      "Problemas de organização e planejamento",
      "Dificuldade para manter o foco",
      "Autocobrança e culpa por não conseguir realizar o que planejou",
    ],
    icon: "sun",
  },
  {
    number: "06",
    title: "Humor e sofrimento emocional",
    subtitle:
      "Tristeza, desânimo, culpa e dificuldades para lidar com as emoções.",
    situations: [
      "Tristeza persistente e desânimo",
      "Perda de interesse por atividades antes prazerosas",
      "Sentimentos de culpa e desvalorização",
      "Dificuldade para lidar com emoções intensas",
      "Alterações emocionais que interferem na rotina e nos relacionamentos",
    ],
    icon: "mind",
  },
  {
    number: "07",
    title: "Luto, perdas e transições de vida",
    subtitle: "Perdas, términos, transições e adaptação a novas fases da vida.",
    situations: [
      "Sofrimento após a perda de alguém importante",
      "Términos de relacionamento",
      "Mudanças profissionais ou familiares",
      "Dificuldade para se adaptar a novas fases da vida",
      "Busca por sentido, direção e novos projetos pessoais",
    ],
    icon: "heart",
  },
  {
    number: "08",
    title: "Sono e hábitos",
    subtitle:
      "Dificuldade para dormir, desacelerar e manter uma rotina de descanso.",
    situations: [
      "Dificuldade para adormecer ou manter o sono",
      "Pensamentos recorrentes na hora de dormir",
      "Dificuldade para desacelerar após um dia intenso",
      "Hábitos que prejudicam o descanso e o bem-estar",
    ],
    icon: "sun",
  },
  {
    number: "09",
    title: "Experiências traumáticas e situações difíceis",
    subtitle:
      "Sofrimento após experiências marcantes e dificuldade para se sentir seguro(a) novamente.",
    situations: [
      "Sofrimento relacionado a experiências marcantes",
      "Medo e insegurança após situações ameaçadoras",
      "Lembranças dolorosas que provocam sofrimento",
      "Dificuldade para se sentir seguro(a) novamente",
      "Reações emocionais que interferem na vida cotidiana",
    ],
    icon: "shield",
  },
  {
    number: "10",
    title: "Comportamentos repetitivos e dificuldades de controle",
    subtitle:
      "Pensamentos intrusivos ou hábitos que geram sofrimento e interferem na rotina.",
    situations: [
      "Pensamentos intrusivos que provocam desconforto",
      "Necessidade excessiva de verificar ou repetir ações",
      "Dificuldade para interromper comportamentos prejudiciais",
      "Hábitos compulsivos que geram sofrimento ou interferem na rotina",
    ],
    icon: "balance",
  },
] as const;

export const therapyBenefits = [
  "Desenvolver habilidades para lidar com situações difíceis",
  "Fortalecer o autoconhecimento e a autonomia",
  "Construir relacionamentos mais saudáveis",
  "Identificar padrões de pensamento e comportamento",
  "Estabelecer metas e desenvolver projetos de vida",
  "Aprender estratégias para cuidar da saúde emocional",
];

export const youthConcerns = [
  {
    title: "Ansiedade, medos e inseguranças",
    description:
      "Preocupações excessivas, medo de se separar dos pais, insegurança, dificuldade para lidar com mudanças e situações novas.",
    icon: "mind",
  },
  {
    title: "Regulação emocional e comportamento",
    description:
      "Dificuldade para lidar com frustrações, impulsividade, irritabilidade, crises emocionais, agressividade e conflitos no cotidiano.",
    icon: "balance",
  },
  {
    title: "Autoestima, autoconhecimento e adolescência",
    description:
      "Insegurança, autocrítica, dificuldades de autoimagem, necessidade de pertencimento e desafios relacionados às mudanças dessa fase.",
    icon: "sun",
  },
  {
    title: "Relacionamentos familiares e conflitos",
    description:
      "Dificuldades de comunicação entre pais e filhos, conflitos familiares, estabelecimento de limites e adaptação ao divórcio dos pais.",
    icon: "heart",
  },
  {
    title: "Uso de telas, tecnologia e rotina",
    description:
      "Dificuldade para equilibrar o tempo de tela com sono, estudos, atividades sociais e responsabilidades; conflitos familiares relacionados ao uso de dispositivos.",
    icon: "people",
  },
  {
    title: "Atenção, organização e aprendizagem",
    description:
      "Dificuldades de concentração, planejamento, organização da rotina, controle dos impulsos e adaptação às demandas escolares.",
    icon: "mind",
  },
  {
    title: "Luto, perdas e mudanças de vida",
    description:
      "Sofrimento diante da perda de pessoas importantes, separações, mudanças familiares e experiências difíceis que afetam o bem-estar emocional.",
    icon: "shield",
  },
  {
    title: "Habilidades sociais e relacionamentos",
    description:
      "Dificuldades para fazer amizades, expressar sentimentos, comunicar necessidades, lidar com conflitos e desenvolver autonomia nas relações.",
    icon: "people",
  },
] as const;

export const teenTherapyStages = [
  {
    title: "Primeiro encontro com os pais ou responsáveis",
    subtitle: "Sessão de anamnese",
    description:
      "O primeiro encontro é destinado aos pais ou responsáveis para conhecer a história de vida do adolescente, seu desenvolvimento, os contextos familiar e escolar, suas relações interpessoais e as principais demandas que motivaram a busca pelo acompanhamento.",
    points: [],
  },
  {
    title: "Construção do vínculo terapêutico",
    subtitle: "Confiança e segurança",
    description:
      "Nas sessões seguintes, o foco inicial é construir um vínculo de confiança e segurança para que o adolescente se sinta acolhido e à vontade para expressar sentimentos, pensamentos, dificuldades e experiências.",
    points: [],
  },
  {
    title: "Desenvolvimento do plano terapêutico",
    subtitle: "Objetivos individualizados",
    description:
      "A partir das informações levantadas e das necessidades identificadas, são definidos os objetivos terapêuticos e as estratégias de intervenção mais adequadas. O planejamento é individualizado e pode ser ajustado conforme a evolução do adolescente.",
    points: [],
  },
  {
    title: "Intervenções e desenvolvimento de habilidades",
    subtitle: "Recursos para o cotidiano",
    description: "Ao longo do acompanhamento, o trabalho pode envolver:",
    points: [
      "Desenvolvimento do autoconhecimento e da inteligência emocional",
      "Identificação, expressão e manejo das emoções",
      "Manejo da ansiedade, da frustração, da impulsividade e de situações desafiadoras",
      "Habilidades sociais, comunicação assertiva e resolução de conflitos",
      "Fortalecimento das interações sociais e de relacionamentos saudáveis",
      "Autonomia, autoestima e estratégias para lidar com desafios familiares, escolares e sociais",
    ],
  },
  {
    title: "Participação e orientação à família",
    subtitle: "Pais e responsáveis",
    description:
      "Quando necessário, são realizados momentos de orientação aos pais ou responsáveis para favorecer a compreensão das necessidades do adolescente e promover estratégias que contribuam para seu desenvolvimento emocional, comportamental e social. Esses momentos respeitam o sigilo profissional e os limites éticos da atuação psicológica, preservando a privacidade do adolescente.",
    points: [],
  },
  {
    title: "Continuidade do acompanhamento",
    subtitle: "Um processo gradual",
    description:
      "A continuidade das sessões ajuda a fortalecer o vínculo terapêutico, consolidar habilidades, acompanhar mudanças e trabalhar dificuldades que possam surgir. Interrupções frequentes ou o encerramento precoce podem dificultar a continuidade do trabalho e a consolidação dos recursos que estão sendo desenvolvidos.",
    points: [],
  },
] as const;

export const qualifications = [
  "Graduação em Psicologia pela UNIESP.",
  "Capacitação em Terapia Cognitivo-Comportamental (TCC).",
  "Formação na Prática em TCC com Gabriela Affonso, psicóloga e mestre pela USP.",
  "Curso em Terapias Cognitivas na ARTMED em andamento.",
  "Pós-graduada em Terapias Cognitivas e Contextuais para Casais pela PUCPR.",
  "Pós-graduanda em Avaliação Psicológica e Psicodiagnóstico pela UNIESP.",
  "Pós-graduanda em Terapia Cognitivo-Comportamental pela PUCRS.",
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
    question: "Como funciona o atendimento para crianças e adolescentes?",
    answer:
      "O acompanhamento oferece espaço para compreender emoções, mudanças e relações. Quando necessário, pais e responsáveis também são orientados. A participação da família e os combinados do atendimento são conversados considerando cada situação.",
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
