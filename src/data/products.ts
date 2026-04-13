export interface ProductSpec {
  material: string;
  aplicacao: string;
  diferencial: string;
  observacao: string;
}

export interface Product {
  name: string;
  slug: string;
  image: string;
  cardImage?: string;
  cardWidth?: number;
  cardHeight?: number;
  width: number;
  height: number;
  description: string;
  specs: ProductSpec;
  gallery?: string[];
}

export const products: Product[] = [
  {
    name: "Cruzeta",
    slug: "cruzeta",
    image: "/images/produtos/cruzeta.jpeg",
    cardImage: "/images/produtos/cards/cruzeta-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 900,
    height: 1600,
    description:
      "Componente responsável por transmitir torque entre eixos com ângulo de trabalho. Produzida com aço de alta resistência para maior vida útil e menor vibração.",
    specs: {
      material: "Aço ligado com tratamento térmico",
      aplicacao: "Caminhões, ônibus, utilitários e equipamentos industriais",
      diferencial: "Alta resistência à fadiga e menor folga operacional",
      observacao: "Disponível em múltiplas medidas conforme fabricante",
    },
  },
  {
    name: "Rolamento de Apoio",
    slug: "rolamento",
    image: "/images/produtos/rolamento.jpeg",
    cardImage: "/images/produtos/cards/rolamento-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 900,
    height: 1600,
    description:
      "Rolamento central para estabilização do eixo cardan em aplicações de carga pesada. Reduz ruído, folga axial e desgaste prematuro do conjunto.",
    specs: {
      material: "Aço e borracha técnica de alta durabilidade",
      aplicacao: "Sistemas com eixo cardan bipartido",
      diferencial: "Maior estabilidade e redução de vibração em rotações elevadas",
      observacao: "Recomendado em conjunto com inspeção de alinhamento",
    },
  },
  {
    name: "Flange Central",
    slug: "flange-central",
    image: "/images/produtos/flange-central.jpeg",
    cardImage: "/images/produtos/cards/flange-central-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 900,
    height: 1600,
    description:
      "Flange de acoplamento usinada com precisão para alinhamento entre transmissão e diferencial. Ideal para montagem segura em serviços de manutenção e reposição.",
    specs: {
      material: "Aço usinado de precisão",
      aplicacao: "Acoplamento entre transmissão, caixa e diferencial",
      diferencial: "Faceamento preciso para reduzir desalinhamento",
      observacao: "Compatível com diferentes padrões de furação",
    },
  },
  {
    name: "Espigão",
    slug: "espigao",
    image: "/images/produtos/espigao.jpeg",
    cardImage: "/images/produtos/cards/espigao-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 900,
    height: 1600,
    description:
      "Espigão estriado para acoplamento de alta precisão entre componentes do cardan. Garante transmissão eficiente de torque com menor risco de folga.",
    specs: {
      material: "Aço temperado com acabamento estriado",
      aplicacao: "Conexões estriadas de eixos cardan",
      diferencial: "Encaixe firme com excelente transferência de torque",
      observacao: "Fabricado conforme especificação técnica do conjunto",
    },
  },
  {
    name: "Ponta com Rosca",
    slug: "ponta-com-rosca",
    image: "/images/produtos/ponta-com-rosca.jpeg",
    cardImage: "/images/produtos/cards/ponta-com-rosca-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 720,
    height: 1280,
    description:
      "Terminal com rosca para fixação robusta e ajuste fino em conjuntos de transmissão. Recomendado para aplicações que exigem manutenção frequente.",
    specs: {
      material: "Aço de alta resistência com rosca usinada",
      aplicacao: "Fixação e ajuste em componentes de transmissão",
      diferencial: "Facilita montagem técnica e reaperto controlado",
      observacao: "Pode ser fornecida em diferentes diâmetros e passos",
    },
  },
  {
    name: "Pantufa",
    slug: "pantufa",
    image: "/images/produtos/pantufa.jpeg",
    cardImage: "/images/produtos/cards/pantufa-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 720,
    height: 1280,
    description:
      "Componente de apoio e acoplamento utilizado na montagem de cardans especiais. Auxilia no alinhamento e na absorção de esforços mecânicos.",
    specs: {
      material: "Aço estrutural para aplicações pesadas",
      aplicacao: "Montagens especiais e adaptações de cardan",
      diferencial: "Suporte robusto para operações de alto esforço",
      observacao: "Indicada para projetos sob medida",
    },
  },
  {
    name: "Conjunto de Componentes para Cardan",
    slug: "componentes-cardan",
    image: "/images/produtos/componentes-cardan-01.jpeg",
    cardImage: "/images/produtos/cards/componentes-cardan-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 1600,
    height: 900,
    description:
      "Kit visual com os principais itens de reposição para manutenção de cardans: cruzetas, flange, espigão e rolamento. Solução completa para revisão técnica.",
    specs: {
      material: "Conjunto multicomponente em aço e elastômeros técnicos",
      aplicacao: "Manutenção preventiva e corretiva completa",
      diferencial: "Padroniza reposição e reduz tempo de parada",
      observacao: "Itens podem ser adquiridos separadamente",
    },
    gallery: [
      "/images/produtos/componentes-cardan-01.jpeg",
      "/images/produtos/componentes-cardan-02.jpeg",
      "/images/produtos/componentes-cardan-03.jpeg",
      "/images/produtos/componentes-cardan-04.jpeg",
    ],
  },
  {
    name: "Eixo Cardan Completo",
    slug: "eixo-cardan-completo",
    image: "/images/produtos/eixo-cardan-completo-01.jpeg",
    cardImage: "/images/produtos/cards/eixo-cardan-completo-card.jpeg",
    cardWidth: 1200,
    cardHeight: 900,
    width: 1280,
    height: 506,
    description:
      "Conjunto completo de eixo cardan para veículos pesados e aplicações industriais. Fabricado e balanceado para desempenho estável e operação segura.",
    specs: {
      material: "Tubo e terminais em aço com balanceamento dinâmico",
      aplicacao: "Linhas de transmissão veicular e industrial",
      diferencial: "Pronto para instalação com alta confiabilidade operacional",
      observacao: "Projeto e dimensões conforme necessidade do cliente",
    },
    gallery: [
      "/images/produtos/eixo-cardan-completo-01.jpeg",
      "/images/produtos/eixo-cardan-completo-02.jpeg",
      "/images/produtos/eixo-cardan-completo-03.jpeg",
    ],
  },
];
