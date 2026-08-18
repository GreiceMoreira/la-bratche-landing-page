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
          title: "Churrasco completo com assador",
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
          // carnes
          {         
            id:"entrecot",
            name: "Entrecot",
            featured: true,
            available: true,
          },
          {
            id:"assado-de-tira",
            name: "Assado de tira",
            description: "Angus",
            featured: false,
            available: true,
          },
          {         
            id:"matambrito-suino",
            name: "Matambrito suíno",
            featured: false,
            available: true,
          },
          {
            id:"file-coxa-sobrecoxa",
            name: "Filé de coxa e sobrecoxa",
            featured: false,
            available: true,
          },
          {        
            id:"treccia-di-manzo", 
            name: "Treccia di manzo",
            description: "Entranha trançada com bacon",
            featured: false,
            available: true,
          },
          {
            id:"costelinha-de-porco",
            name: "Costelinha de porco",
            featured: false,
            available: true,
          },
          {         
            id:"vazio",
            name: "Vazio",
            featured: false,
            available: true,
          },
          {         
            id:"paleta-atlatida",
            name: "Paleta Atlântida",
            featured: true,
            available: true,
          },
          {         
            id:"picanha",
            name: "Picanha",
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