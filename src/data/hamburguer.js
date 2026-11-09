import {GiHamburger} from "react-icons/gi";
import laBratcheImage from "../assets/images/LaBratche.png";
import burguer from "../assets/images/hamburguer/burger-buffet.png"

export const hamburguer = {
  id: "hamburguer",
  active: false,

  title: "Burger Experience",
  icon: GiHamburger,
  image: burguer,

  description:
    "Hambúrgueres artesanais feitos na hora em uma estação completa com ingredientes frescos e de qualidade",

  details: {
    serviceOptions: {
      assisted: {
        id: "assisted",
        title: "Serviço com Montagem Assistida",
        featured: true,
        available: true,

        description:
          "Nossa equipe prepara e monta os hambúrgueres conforme combinações previamente definidas.",

        features: [
          "Ingredientes selecionados antecipadamente",
          "Execução padronizada",
          "Ajustes individuais em caso de restrições alimentares",
        ],
      },

      buffet: {
        id: "buffet",
        title: "Estação Buffet de Hambúrguer",
        featured: false,
        available: true,

        description:
          "Montamos uma estação estruturada com ingredientes previamente escolhidos pelo cliente.",

        features: [
          "As carnes são preparadas na churrasqueira, com queijo derretido na finalização",
          "Os convidados montam seus próprios hambúrgueres",
          "Serviço contínuo e organizado",
        ],
      },
    },

    breads: [
      {
        id: "pao-brioche",
        name: "Pão brioche",
        featured: false,
        available: true,
      },
      {
        id: "pao-australiano",
        name: "Pão australiano",
        featured: false,
        available: true,
      },
    ],

    meats: [
      {
        id: "paleta-bovina",
        name: "Paleta bovina",
        category: "beef",
        featured: false,
        available: true,
      },
      {
        id: "costela-bovina",
        name: "Costela bovina",
        category: "beef",
        featured: false,
        available: true,
      },
      {
        id: "copa-lombo",
        name: "Copa Lombo",
        category: "pork",
        featured: false,
        available: true,
      },
      {
        id: "cordeiro",
        name: "Cordeiro",
        category: "lamb",
        featured: false,
        available: true,
      },
    ],

    ingredients: [
      {
        id: "alface",
        name: "Alface",
        category: "salad",
        featured: false,
        available: true,
      },
      {
        id: "tomate",
        name: "Tomate",
        category: "salad",
        featured: false,
        available: true,
      },
      {
        id: "queijo-mussarela",
        name: "Queijo mussarela",
        category: "cheese",
        featured: false,
        available: true,
      },
      {
        id: "queijo-cheddar",
        name: "Queijo cheddar",
        category: "cheese",
        featured: false,
        available: true,
      },
      {
        id: "cebola-caramelizada",
        name: "Cebola caramelizada",
        category: "salad",
        featured: false,
        available: true,
      },
      {
        id: "bacon",
        name: "Bacon",
        featured: false,
        available: true,
      },
      {
        id: "picles",
        name: "Picles",
        category: "salad",
        featured: false,
        available: true,
      },
    ],

    optionalItems: [
      {
        id: "batatas-fritas",
        name: "Batatas fritas",
        description:
          "Preparadas na hora em fritadeira profissional de balcão",
        featured: false,
        available: true,
      },
    ],

    minGuests: 20,
    pricePerPerson: 85,
    priceNote: "a partir de 20 pessoas",

    images: [],
  },
};