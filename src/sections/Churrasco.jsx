
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import { churrasco } from "../data/churrasco";
import { hamburguer } from "../data/hamburguer";

import ChurrascoServiceOptions from "../components/Churrasco/ChurrascoServiceOptions";
import ChurrascoSampleMenus from "../components/Churrasco/ChurrascoSampleMenus";
import ChurrascoMenu from "../components/Churrasco/ChurrascoMenu";

export default function Churrasco() {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* INTRODUÇÃO */}
          <section className="py-16 text-center sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {churrasco.title}
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-normal leading-tight text-text-primary sm:text-6xl lg:text-7xl">
              {churrasco.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {churrasco.description}
            </p>
          </section>

          {/* IMAGEM PRINCIPAL */}
          <section>
            <img
              src={churrasco.image}
              alt="Churrasco"
              className="h-[420px] w-full rounded-2xl object-cover sm:h-[560px]"
            />
          </section>

          {/* OPÇÕES DE SERVIÇO */}
          <ChurrascoServiceOptions
            serviceOptions={churrasco.details.serviceOptions}
          />

          {/* EXEMPLOS DE CARDÁPIO */}
          <ChurrascoSampleMenus
            sampleMenus={churrasco.details.sampleMenus}
            details={churrasco.details}
          />

          {/* CARDÁPIO COMPLETO */}
          <ChurrascoMenu details={churrasco.details} />

        </div>
      </Container>
    </Section>
  );
}
