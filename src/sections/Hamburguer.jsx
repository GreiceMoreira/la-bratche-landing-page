import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { hamburguer } from "../data/hamburguer";

import HamburguerExperience from "../components/Hamburguer/HamburguerExperience";
import HamburguerMenu from "../components/Hamburguer/HamburguerMenu";
import HamburguerServiceOptions from "../components/Hamburguer/HamburguerServiceOptions";

export default function Hamburguer() {
  return (
    <Section>
      <Container>

        {/* Intro */}
        <section className="py-16 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {hamburguer.title}
          </p>

          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-normal leading-tight text-text-primary sm:text-6xl lg:text-7xl">
            O hambúrguer é o protagonista.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Uma experiência artesanal preparada na hora,
            pensada para fazer parte do seu evento.
          </p>
        </section>

        {/* Imagem principal */}
        <section>
          <img
            src={hamburguer.image}
            alt="Burger Experience"
            className="h-[420px] w-full rounded-2xl object-cover object-[90%_center] sm:h-[560px]"
          />
        </section>

        {/* Informações da experiência */}
        <HamburguerExperience details={hamburguer.details} />

        {/* Modalidades de serviço */}
        <HamburguerServiceOptions
          options={hamburguer.details.serviceOptions}
        />

        {/* Cardápio */}
        <HamburguerMenu details={hamburguer.details} />

      </Container>
    </Section>
  );
}