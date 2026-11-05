/*
  DADOS DO SITE SM1
  Para adicionar patrocinadores, inclua novos objetos no array sponsors.
  WhatsApp sempre no formato internacional: 55 + DDD + número.
  Campos de contato e imagens são opcionais.
*/
const SM1_SITE = {
  ministry: {
    whatsapp: "558191953578",
    instagram: "https://www.instagram.com/ministeriosm1/"
  },
  sponsors: [
    {
      slug: "eletronica-3r",
      name: "Eletrônica 3R",
      category: "Eletrônica",
      logo: "images/eletronica-3r.png",
      tagline: "Parceira do Ministério de Louvor SM1.",
      description: "A Eletrônica 3R faz parte dos parceiros que apoiam o Ministério de Louvor SM1. Em breve, esta página poderá receber mais informações sobre a empresa e seus serviços."
    },
    {
      slug: "jbs-estofados",
      name: "JBS Estofados",
      category: "Estofados",
      tagline: "Conforto pensado para transformar ambientes.",
      description: "A JBS Estofados é parceira do Ministério de Louvor SM1. Conheça alguns modelos de estofados e entre em contato diretamente com a empresa para consultar opções, medidas, tecidos, valores e disponibilidade.",
      logo: "images/jbs-estofados.jpg",
      cover: "images/jbs-estofados-destaque.webp",
      coverFit: "contain",
      whatsapp: "5581999207109",
      instagram: "https://www.instagram.com/jbs.estofados.fabrica/",
      address: "Gravatá – PE",
      products: [
        {
          name: "Estofado para área externa",
          description: "Composição em formato de U, com assentos e encostos estofados para ambientes externos.",
          image: "images/estofado-area-externa.webp"
        },
        {
          name: "Sofá modular cinza",
          description: "Sofá modular em L, com assentos amplos e acabamento contemporâneo.",
          image: "images/sofa-modular-cinza.webp"
        },
        {
          name: "Poltronas arredondadas",
          description: "Par de poltronas com formas curvas e revestimento em tom neutro.",
          image: "images/poltronas-arredondadas.webp"
        },
        {
          name: "Sofá chaise grafite",
          description: "Sofá de desenho orgânico, com chaise e estofamento em tom grafite.",
          image: "images/sofa-chaise-grafite.webp"
        }
      ]
    },
    {
      slug: "lava-jato-filho-do-rei",
      name: "Lava-jato Filho do Rei",
      category: "Lava-jato",
      logo: "images/lava-jato-filho-do-rei.png",
      tagline: "Parceiro do Ministério de Louvor SM1.",
      description: "O Lava-jato Filho do Rei faz parte dos parceiros que apoiam o Ministério de Louvor SM1. Em breve, esta página poderá receber mais informações sobre os serviços e formas de contato."
    },
    {
      slug: "amadeirado",
      name: "Amadeirado",
      category: "Móveis",
      logo: "images/amadeirado.png",
      cover: "images/amadeirado-destaque.webp",
      whatsapp: "558189779237",
      tagline: "Móveis de madeira que unem qualidade, estilo e cuidado em cada detalhe.",
      description: "Somos a sua melhor oportunidade para transformar ambientes com produtos de madeira que unem qualidade e estilo, ao melhor custo-benefício do mercado.\n\nComo loja especializada em móveis de madeira, assumimos o compromisso de oferecer um atendimento próximo, transparente e de excelência a cada cliente e parceiro.\n\nAlém disso, entregamos produtos de alta durabilidade, valorizando a beleza natural da madeira e o cuidado minucioso em cada detalhe.\n\nAssim, cada peça carrega mais do que funcionalidade: traduz identidade, história, propósito e a essência de quem a escolhe.",
      products: [
        {
          name: "Banquetas de madeira",
          description: "Banquetas com acabamento amadeirado para compor bancadas, cozinhas e espaços de convivência.",
          image: "images/amadeirado-banquetas.webp"
        },
        {
          name: "Armários para cozinha",
          description: "Móveis de madeira para organização e composição de cozinhas acolhedoras.",
          image: "images/amadeirado-cozinha.webp"
        },
        {
          name: "Mesa de cabeceira",
          description: "Peça funcional para o quarto, com gaveta e espaço inferior de apoio.",
          image: "images/amadeirado-mesa-cabeceira.webp"
        },
        {
          name: "Rack para sala",
          description: "Rack em madeira com nichos abertos para organizar e valorizar a sala de estar.",
          image: "images/amadeirado-rack.webp"
        },
        {
          name: "Conjunto para sala de estar",
          description: "Composição de sofá e poltronas com estrutura de madeira e estofados claros.",
          image: "images/amadeirado-sala-estar.webp"
        },
        {
          name: "Mesa de jantar com cadeiras",
          description: "Conjunto de mesa e cadeiras em madeira para reunir família e amigos.",
          image: "images/amadeirado-mesa-jantar.webp"
        }
      ]
    },
    {
      slug: "antonio-barbosa-madeireira",
      name: "Antônio Barbosa Esquadrias",
      category: "Esquadrias",
      logo: "images/antonio-barbosa-esquadrias.png",
      tagline: "Parceira do Ministério de Louvor SM1.",
      description: "Antônio Barbosa Esquadrias faz parte dos parceiros que apoiam o Ministério de Louvor SM1. Em breve, esta página poderá receber mais informações sobre a empresa e suas esquadrias."
    },
    {
      slug: "miqueias-eletricista",
      name: "Miqueias Eletricista",
      category: "Serviços elétricos",
      logo: "images/miqueias-eletricista.jpg",
      tagline: "Parceiro do Ministério de Louvor SM1.",
      description: "Miqueias Eletricista faz parte dos parceiros que apoiam o Ministério de Louvor SM1. Em breve, esta página poderá receber mais informações sobre os serviços e formas de contato."
    }
  ]
};
