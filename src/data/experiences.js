import {GiBarbecue, GiHamburger} from "react-icons/gi";
import { MdOutlineKebabDining } from "react-icons/md";
import laBratcheImage from "../assets/images/LaBratche.png";


export const experiences = [
  {
    id: "churrasco",
    active: true,

    title: "Churrasco Premium",
    icon: GiBarbecue,
    image: laBratcheImage,
    description: "O churrasco tradicional levado a outro nível. Carnes selecionadas, ponto perfeito e acompanhamentos especiais",

    details: {
      serviceOptions: {
        complete: {
          id: "complete",
          title: "Serviço Completo",
          featured: true,
          available: true,
          description:
            "A experiência completa da La Bratche, com carnes e ingredientes selecionados, preparo na brasa e uma equipe dedicada ao seu evento.",
          features: [
            "Definição e personalização do cardápio",
            "Seleção e compra dos ingredientes",
            "Carnes, saladas e acompanhamentos",
            "Estrutura completa para o preparo",
            "Equipe de assador e atendimento",
            "Organização da área ao final do evento",
          ],
        },
      assadorOnly: {
        id: "assador-only",
        title: "Somente assador",
        featured: false,
        available: true,
        description:
          "Para quem prefere fornecer as próprias carnes e ingredientes, mas quer contar com a experiência de um assador profissional.",
        features: [
          "Orientação prévia para cálculo das quantidades",
          "Preparo profissional das carnes na brasa",
          "Utensílios essenciais para preparo e serviço",
          "Facas, tábuas, bandejas e estrutura básica de apoio",
          "Organização da área utilizada ao final do evento",
        ],
      },
      },

      meats: [
      // FRANGO
      {
        id: "file-coxa-sobrecoxa",
        name: "Filé de coxa e sobrecoxa",
        category: "chicken",
        featured: false,
        available: true,
      },

      // GADO
      {
        id: "entrecot",
        name: "Entrecot",
        description: "Um dos cortes protagonistas do churrasco",
        category: "beef",
        featured: true,
        available: true,
      },
      {
        id: "treccia-di-manzo",
        name: "Treccia di manzo",
        description: "Entranha trançada com bacon",
        category: "beef",
        featured: false,
        available: true,
      },
      {
        id: "vazio",
        name: "Vazio",
        category: "beef",
        featured: false,
        available: true,
      },
      {
        id: "paleta-atlantida",
        name: "Paleta Atlântida",
        description: "Prêmio 2026",
        category: "beef",
        featured: true,
        available: true,
      },

      // PORCO
      {
        id: "matambrito-suino",
        name: "Matambrito suíno",
        category: "pork",
        featured: false,
        available: true,
      },
      {
        id: "costelinha-de-porco",
        name: "Costelinha de porco",
        category: "pork",
        featured: false,
        available: true,
      },

      // ANGUS — MENU ESPECIAL
      {
        id: "picanha-angus",
        name: "Picanha",
        category: "angus",
        featured: false,
        available: true,
      },
      {
        id: "assado-de-tira-angus",
        name: "Assado de tiras",
        category: "angus",
        featured: false,
        available: true,
      },
      {
        id: "t-bone",
        name: "T-Bone",
        category: "angus",
        featured: false,
        available: true,
      },
      {
        id: "tomahawk",
        name: "Tomahawk",
        category: "angus",
        featured: false,
        available: true,
      },
      {
        id: "denver-steak",
        name: "Denver Steak",
        category: "angus",
        featured: false,
        available: true,
      },
      {
        id: "prime-rib",
        name: "Prime Rib",
        category: "angus",
        featured: false,
        available: true,
      },
      {
        id: "maminha-angus",
        name: "Maminha",
        category: "angus",
        featured: false,
        available: true,
      },

      // CORDEIRO — MENU ESPECIAL
      {
        id: "paleta-cordeiro",
        name: "Paleta",
        category: "lamb",
        featured: false,
        available: true,
      },
      {
        id: "carre-frances",
        name: "Carré Francês",
        category: "lamb",
        featured: false,
        available: true,
      },
      {
        id: "costela-cordeiro",
        name: "Costela",
        category: "lamb",
        featured: false,
        available: true,
      },

      // EXÓTICAS — MENU ESPECIAL
      {
        id: "ra",
        name: "Rã",
        category: "exotic",
        featured: false,
        available: true,
      },
      {
        id: "coelho",
        name: "Coelho",
        category: "exotic",
        featured: false,
        available: true,
      },
      {
        id: "pato",
        name: "Pato",
        category: "exotic",
        featured: false,
        available: true,
      },
      {
        id: "avestruz",
        name: "Avestruz",
        category: "exotic",
        featured: false,
        available: true,
      },
      {
        id: "jacare",
        name: "Jacaré",
        category: "exotic",
        featured: false,
        available: true,
      },
    ],

      sides: [
          // acompanhamentos
          {       
            id: "salada-batata-mix-salada",
            name: "Salada de batata + Mix de salada",
            description: "Maionese caseira, alface americana, rúcula e tomate",
            featured: false,
            available: true,
          },
          {   
            id: "pao-la-bratche",      
            name: "Pão La Bratche",
            description: "Baguete, mozzarella e linguiça",
            featured: true,
            available: true,
          },
          {        
            id: "linguica-artesanal", 
            name: "Linguiça Artesanal",
            description: "Suína e Mista",
            featured: false,
            available: true,
          },
          {         
            id: "queijos",
            name: "Queijos",
            description: "Provolone e/ou Coalho",
            featured: false,
            available: true,
          },
          {   
            id: "cipolla-con-formaggio",      
            name: "Cipolla con formaggio",
            description: "Cebolas com molho de gorgonzola",
            featured: false,
            available: true,
          },
          {         
            id: "pimentao-recheado",
            name: "Pimentão Recheado",
            description: "Pimentão vermelho ou amarelo recheado com gorgonzola",
            featured: false,
            available: true,
          },
          {         
            id: "batata-molho-queijo",
            name: "Batata com molho de queijo",
            description: "Batatas assadas com molho de gorgonzola",
            featured: false,
            available: true,
          },
        ],

      desserts: [
        //sobremesas
        {      
          id: "abacaxi-la-bratche",   
          name: "Abacaxi La Bratche",
          description: "Abacaxi assado, queijo, doce de leite e raspas de coco",
          featured: false,
          available: true,
        },
        {         
          id: "banana-assada",
          name: "Banana Assada",
          description: "Banana assada, doce de leite e sorvete de creme",
          featured: false,
          available: true,
        },
      ],

      sampleMenus: [
        {
          id: "tradicional",
          name: "Tradicional",
          pricePerPerson: 65,
          minGuests: 20,
          items: [
            "pao-la-bratche",
            "linguica-artesanal",
            "vazio",
            "costelinha-de-porco",
            "file-coxa-sobrecoxa",
            "salada-batata-mix-salada",
          ],
        },
        {
          id: "sabores-do-campo",
          name: "Sabores do Campo",
          pricePerPerson: 75,
          minGuests: 20,
          items: [
            "pao-la-bratche",
            "linguica-artesanal",
            "entrecot",
            "assado-de-tira",
            "matambrito-suino",
            "salada-batata-mix-salada",
          ],
        },
        {
          id: "assados-especiais",
          name: "Assados Especiais",
          pricePerPerson: 90,
          minGuests: 20,
          items: [
            "pao-la-bratche",
            "linguica-artesanal",
            "queijos",
            "entrecot",
            "picanha",
            "treccia-di-manzo",
            "salada-batata-mix-salada",
          ],
        },
      ],

      images: [
          // fotos
      ],
    },

    
  },
  {
    id: "hamburguer",
    active: false,

    title: "Burger Experience",
    icon: GiHamburger,
    image: laBratcheImage,
    description: "Hambúrgeres artesanais feitos na hora em uma estação completacom ingredientes frescos e de qualidade",
    
  },
  {
    id: "espetinhos",
    active: false,

    title: "Estação de Espetinhos",
    icon: MdOutlineKebabDining,
    image: laBratcheImage,
    description: "Diversos sabores no espetinho, preparados na hora para deixar seu evento ainda mais completo",
    
  },
]
export const meatCategories = [
  {
    id: "chicken",
    name: "Frango",
    special: false,
  },
  {
    id: "beef",
    name: "Gado",
    special: false,
  },
  {
    id: "pork",
    name: "Porco",
    special: false,
  },
  {
    id: "angus",
    name: "Angus",
    special: true,
  },
  {
    id: "lamb",
    name: "Cordeiro",
    special: true,
  },
  {
    id: "exotic",
    name: "Experiências Exóticas",
    special: true,
  },
];