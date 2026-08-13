import {GiBarbecue, GiHamburger} from "react-icons/gi";
import { MdOutlineKebabDining } from "react-icons/md";
import laBratcheImage from "../../assets/images/LaBratche.png";


export const experiences = [
  {
    id: "churrasco",
    title: "Churrasco Premium",
    icon: GiBarbecue,
    image: laBratcheImage,
    description: "O churrasco tradicional levado a outro nível. Carnes selecionadas, ponto perfeito e acompanhamentos especiais",
  },
  {
    id: "hamburguer",
    title: "Burger Experience",
    icon: GiHamburger,
    image: laBratcheImage,
    description: "Hambúrgeres artesanais feitos na hora em uma estação completacom ingredientes frescos e de qualidade",
  },
  {
    id: "espetinhos",
    title: "Estação de Espetinhos",
    icon: MdOutlineKebabDining,
    image: laBratcheImage,
    description: "Diversos sabores no espetinho, preparados na hora para deixar seu evento ainda mais completo",
  },
]