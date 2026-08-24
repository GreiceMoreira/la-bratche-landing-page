import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";
import heroImage from "../assets/images/chico-churrasco.png"
import heroImage2 from "../assets/images/chico-churrasqueira.jpg"
import AwardsBadge from "../components/AwardsBadge";
import { awards } from "../data/awards"




export default function Hero() {
    return (
        <Section className="relative min-h-screen overflow-hidden flex items-center">
            <img
                src={heroImage2}
                alt="Churrasco preparado na brasa"
                className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-center"
            />

            <div className="absolute inset-0 bg-bg-primary/70"/>

            <Container>
                <div className="relative max-w-3xl translate-y-10 sm:translate-y-0">

                    <AwardsBadge awards={awards} />

                    <h1 className="mt-8 font-display text-5xl font-normal leading-tight text-white sm:text-6xl lg:text-7xl">
                    Experiências únicas
                    <span className="block text-brand-orange">
                        na brasa
                    </span>
                    </h1>

                    <p className="mt-6 text-lg text-text-secondary">
                    Eventos memoráveis com cortes selecionados,
                    técnica artesanal e o verdadeiro sabor do fogo.
                    </p>

                    <div className="mt-8">
                    <Button href="...">
                        Solicitar orçamento
                    </Button>
                    </div>

                </div>
            </Container>
        </Section>
    )
    
}