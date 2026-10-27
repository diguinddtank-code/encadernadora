export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'academico' | 'corporativo' | 'personalizado';
  iconName: string;
  image: string;
  whatsappText: string;
  color: string;
  specs: string[];
  prazo: string;
  indicadoPara: string;
}

export const NAP = {
  name: "Encadernadora JR",
  legalName: "Encadernadora JR Ltda",
  shortName: "Encadernadora JR",
  phoneDisplay: "(31) 98770-2774",
  phoneRaw: "5531987702774",
  email: "encadernadorajr@hotmail.com",
  address: {
    street: "Av. Olegário Maciel, 742",
    complement: "Mercado Novo - Corredor O, Loja 1249",
    neighborhood: "Centro",
    city: "Belo Horizonte",
    state: "MG",
    stateFull: "Minas Gerais",
    cep: "30180-110",
    country: "Brasil",
    fullFormatted: "Mercado Novo - Corredor O, Loja 1249 | Av. Olegário Maciel, 742 - Centro, Belo Horizonte - MG, CEP 30180-110",
    mapsUrl: "https://maps.google.com/?q=Mercado+Novo+Belo+Horizonte+Av.+Olegário+Maciel,+742",
    geo: {
      lat: -19.92582998660662,
      lng: -43.94544838450166,
    }
  },
  hours: [
    { days: "Segunda a Sexta", hours: "08:00 às 18:00" },
    { days: "Sábado", hours: "08:00 às 12:00" },
    { days: "Domingo e Feriados", hours: "Fechado" }
  ],
  experienceYears: 20,
  logoUrl: "https://i.imgur.com/aD9YWAr.png",
  mercadoNovoImage: "https://i.imgur.com/lvR4geN.jpeg",
  heroBgImage: "https://i.imgur.com/BGW4JJz.jpeg",
  whatsappBaseUrl: "https://wa.me/5531987702774"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "capa-dura",
    title: "Encadernação de Capa Dura",
    shortDesc: "Proteção robusta e acabamento premium para fascículos, coleções e documentos importantes. Materiais de alta durabilidade como percalux e couro sintético.",
    fullDesc: "Nossa encadernação de capa dura combina técnicas artesanais de costura e colagem com prensagem profissional. Usamos papelão de alta densidade revestido em percalux impermeável, couro sintético ou veludo, garantindo que suas obras durem por décadas sem deformações.",
    category: "personalizado",
    iconName: "Book",
    image: "https://i.imgur.com/VYufMUk.jpeg",
    whatsappText: "Orçamento para Capa Dura",
    color: "from-blue-500 to-cyan-400",
    specs: [
      "Revestimento em percalux, courino ou veludo",
      "Costura reforçada de alta durabilidade",
      "Gravação em hot stamping (dourada ou prateada)",
      "Folhas de guarda de gramatura superior",
      "Fita marcadora de página opcional"
    ],
    prazo: "A partir de 24h a 48h úteis",
    indicadoPara: "Coleções, livros de registro, portfólios e obras raras"
  },
  {
    id: "tcc",
    title: "Encadernação de TCC e Teses",
    shortDesc: "Finalize sua graduação com excelência. Encadernação seguindo rigorosamente as normas da ABNT e das principais universidades de Minas Gerais.",
    fullDesc: "Sabemos a importância do momento da entrega do seu Trabalho de Conclusão de Curso (TCC), Dissertação de Mestrado ou Tese de Doutorado. Produzimos a encadernação com lombada personalizada, gravação dourada perfeita e total conformidade com as regras da sua faculdade.",
    category: "academico",
    iconName: "GraduationCap",
    image: "https://i.imgur.com/ax3BBS8.jpeg",
    whatsappText: "Orçamento para TCC",
    color: "from-amber-500 to-orange-400",
    specs: [
      "Conformidade 100% com normas ABNT",
      "Gravação na lombada e na capa em hot stamping",
      "Opções em preto, verde, azul escuro e vinho",
      "Opção de serviço expresso com entrega rápida",
      "Atendimento a UFMG, PUC Minas, UNA, Newton, Fumec e CEFET"
    ],
    prazo: "Opção expressa em até 24h ou prazo padrão de 48h",
    indicadoPara: "Estudantes de graduação, pós-graduação, mestrado e doutorado"
  },
  {
    id: "diplomas",
    title: "Porta Diplomas",
    shortDesc: "Eternize sua conquista acadêmica. Confeccionamos porta diplomas revestidos em veludo ou percalux, com gravação em hot stamping.",
    fullDesc: "Confeccionados individualmente com acabamento aveludado ou em percalux nobre. O porta diplomas protege seu diploma contra poeira, luz e umidade, mantendo seu certificado de formatura com imponência e dignidade para toda a vida.",
    category: "academico",
    iconName: "Award",
    image: "https://i.imgur.com/LtC4S4P.jpeg",
    whatsappText: "Orçamento para Porta Diplomas",
    color: "from-purple-500 to-pink-400",
    specs: [
      "Acabamento interno acolchoado ou com cantoneiras",
      "Gravação personalizada do brasão ou logotipo do curso",
      "Cores solenes: preto, vinho bordô, azul marinho e verde musgo",
      "Formatos padrão para diploma A4 e certificados especiais"
    ],
    prazo: "2 a 4 dias úteis",
    indicadoPara: "Recém-formados, comissões de formatura e faculdades"
  },
  {
    id: "agendas",
    title: "Agendas Personalizadas",
    shortDesc: "Organização com a sua identidade. Agendas corporativas e planners com capa dura personalizada com a sua logomarca.",
    fullDesc: "Ideal para empresas que buscam brindes de final de ano inesquecíveis ou para profissionais que valorizam um planejamento físico refinado. Gravamos a marca da sua empresa na capa dura com acabamento premium.",
    category: "corporativo",
    iconName: "Calendar",
    image: "https://i.imgur.com/UEN7zCf.jpeg",
    whatsappText: "Orçamento para Agendas",
    color: "from-emerald-500 to-teal-400",
    specs: [
      "Capa dura personalizada com hot stamping ou impressão",
      "Miolo diário ou semanal com papel de alta opacidade",
      "Elástico de fechamento e fita de cetim marcadora",
      "Descontos progressivos para pedidos corporativos"
    ],
    prazo: "3 a 7 dias úteis conforme tiragem",
    indicadoPara: "Empresas, escritórios, consultórios e brindes executivos"
  },
  {
    id: "fiscais",
    title: "Diário Razão e Livros Fiscais",
    shortDesc: "Segurança para sua contabilidade. Encadernação de livros fiscais com costura reforçada, garantindo o cumprimento das exigências legais.",
    fullDesc: "A encadernação contábil para a Junta Comercial de Minas Gerais (JUCEMG) e Receita Federal exige costura contínua inquebrável, termos de abertura e encerramento perfeitamente fixados e encadernação inviolável. Temos mais de 20 anos de experiência atendendo os maiores escritórios de contabilidade de BH.",
    category: "corporativo",
    iconName: "FileText",
    image: "https://i.imgur.com/VYufMUk.jpeg",
    whatsappText: "Orçamento para Livros Fiscais",
    color: "from-slate-600 to-slate-400",
    specs: [
      "Costura artesanal reforçada antiviolação",
      "Conforme exigências estritas da JUCEMG e Receita",
      "Lombada identificada com número de livro e exercício fiscal",
      "Agilidade na entrega para cumprimento de prazos fiscais"
    ],
    prazo: "24h a 48h úteis",
    indicadoPara: "Escritórios de contabilidade, auditorias e departamentos jurídicos"
  },
  {
    id: "livros",
    title: "Livros Personalizados",
    shortDesc: "Impressão e encadernação sob demanda para autores independentes, biografias, álbuns de família e edições comemorativas.",
    fullDesc: "Seja uma tiragem especial de poesias, um livro de memórias de família, um álbum fotográfico comemorativo ou a restauração daquela bíblia centenária querida, nossa oficina tem a paciência e a arte que sua história merece.",
    category: "personalizado",
    iconName: "Library",
    image: "https://i.imgur.com/JQVDWw2.jpeg",
    whatsappText: "Orçamento para Livros",
    color: "from-rose-500 to-red-400",
    specs: [
      "Tiragens a partir de 1 exemplar",
      "Opção de capa dura com relevo ou hot stamping",
      "Costura Smyth ou fresada reforçada",
      "Restauração e higienização de livros antigos"
    ],
    prazo: "3 a 7 dias úteis",
    indicadoPara: "Autores independentes, famílias, colecionadores e historiadores"
  },
  {
    id: "cardapios",
    title: "Cardápios para Restaurantes",
    shortDesc: "Resistência e sofisticação. Cardápios duráveis em capa dura, com plásticos internos substituíveis e resistentes à umidade.",
    fullDesc: "O Mercado Novo é o maior polo gastronômico e cultural de BH, e conhecemos de perto a rotina pesada dos bares e restaurantes. Criamos cardápios à prova de gordura, umidade e uso constante, com sofisticação que eleva a experiência do cliente.",
    category: "corporativo",
    iconName: "Utensils",
    image: "https://i.imgur.com/3grstdw.jpeg",
    whatsappText: "Orçamento para Cardápios",
    color: "from-yellow-500 to-amber-400",
    specs: [
      "Material hidro-repelente de fácil higienização",
      "Sistema de parafusos ocultos ou canaletas para troca rápida",
      "Gravação da marca em baixo relevo ou hot stamping",
      "Bordas com reforço metálico opcional"
    ],
    prazo: "3 a 5 dias úteis",
    indicadoPara: "Restaurantes, bares, cafeterias, hotéis e bistrôs"
  }
];

export const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    role: "Formanda em Direito (PUC Minas)",
    text: "Salvaram meu TCC! Precisei de uma entrega super rápida com gravação dourada na capa e ficou impecável. Aprovada com nota 10 e o atendimento pelo WhatsApp foi espetacular.",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    role: "Dono de Bar & Restaurante no Mercado Novo",
    text: "Nossos cardápios recebem centenas de clientes todo final de semana. O material feito pela JR não estraga, resiste a líquidos e dá uma apresentação nobre aos nossos pratos.",
    rating: 5
  },
  {
    name: "Ana Paula Rezende",
    role: "Contadora Sênior",
    text: "Encaderno os livros fiscais e diários razão do meu escritório há anos na Encadernadora JR. A costura é perfeita, nunca tive uma rejeição na Junta Comercial e cumprem rigorosamente os prazos.",
    rating: 5
  },
  {
    name: "Prof. Henrique Viana",
    role: "Pesquisador UFMG",
    text: "Encadernei minha tese de doutorado em capa dura com detalhes em percalux vinho e letras douradas. O trabalho manual é digno de mestres artesãos. Recomendo de olhos fechados.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Quanto tempo demora para fazer a encadernação de um TCC?",
    answer: "Trabalhamos com prazos padrão de 24h a 48h úteis. Em casos de urgência com prazos apertados na faculdade, temos opção de serviço expresso com entrega no mesmo dia mediante alinhamento prévio via WhatsApp."
  },
  {
    question: "Onde vocês estão localizados no Mercado Novo?",
    answer: "Estamos no 2º piso do Mercado Novo, no Corredor O, Loja 1249. O endereço é Av. Olegário Maciel, 742 - Centro de Belo Horizonte (MG). O acesso é muito fácil pelas escadas ou rampas principais."
  },
  {
    question: "Como funciona o orçamento pelo WhatsApp?",
    answer: "É muito simples: você nos envia pelo WhatsApp (31) 98770-2774 o tipo de serviço desejado (ex: TCC, livro fiscal, cardápio), número de páginas e prazo. Respondemos em poucos minutos com o valor exato e opções de acabamento."
  },
  {
    question: "Vocês fazem encadernação de livros fiscais para a Junta Comercial (JUCEMG)?",
    answer: "Sim! Seguimos todas as normas legais de costura inviolável e termos de abertura e encerramento exigidos pela JUCEMG e Receita Federal para Diário Geral, Razão e Livros de Entradas/Saídas."
  },
  {
    question: "Quais são as cores e acabamentos disponíveis para Capa Dura?",
    answer: "Temos uma ampla cartela de cores em percalux (preto, azul marinho, verde escuro, vermelho/vinho, cinza, bege, marrom), além de veludo e couro sintético. As gravações em relevo (hot stamping) podem ser feitas em dourado brilhante, dourado fosco, prata ou baixo-relevo sem cor."
  },
  {
    question: "Vocês atendem apenas Belo Horizonte ou enviam para outras cidades?",
    answer: "Atendemos toda a Grande BH (Contagem, Betim, Nova Lima, etc.) com retirada no balcão do Mercado Novo ou entrega via motoboy. Também enviamos encomendas para todo o estado de Minas Gerais e Brasil via Correios ou transportadora."
  }
];

export const TRUST_BADGES = [
  {
    title: "Mais de 20 Anos",
    desc: "Tradição contínua e know-how artesanal no Mercado Novo de BH."
  },
  {
    title: "Padrão ABNT & Fiscal",
    desc: "Rigor absoluto em normas acadêmicas e contábeis legais."
  },
  {
    title: "Agilidade & Pontualidade",
    desc: "Prazos expressos cumpridos à risca para você não se atrasar."
  },
  {
    title: "Avaliação 5 Estrelas",
    desc: "Satisfação máxima com centenas de clientes atendidos com carinho."
  }
];
