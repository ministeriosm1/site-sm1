/*
  DADOS DO SITE SM1
  Para adicionar patrocinadores, inclua novos objetos no array sponsors.
  WhatsApp sempre no formato internacional: 55 + DDD + número.
*/
const SM1_SITE = {
  ministry: {
    whatsapp: "558191953578",
    instagram: "https://www.instagram.com/ministeriosm1/"
  },
  sponsors: [
    {
      slug: "jbs-estofados",
      name: "JBS Estofados",
      category: "Estofados",
      tagline: "Conforto pensado para transformar ambientes.",
      description: "A JBS Estofados é parceira do Ministério de Louvor SM1. Conheça alguns modelos de estofados e entre em contato diretamente com a empresa para consultar opções, medidas, tecidos, valores e disponibilidade.",
      logo: "images/jbs-estofados-logo.webp",
      cover: "images/estofado-area-externa.webp",
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
    }
  ]
};
