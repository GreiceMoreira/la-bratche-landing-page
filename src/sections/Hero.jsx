import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";
import heroImage from "../assets/images/chico-churrasco.png"




export default function Hero() {
    return (
        <Section className="relative min-h-screen overflow-hidden flex items-center">
            <img
                src={heroImage}
                alt="Churrasco preparado na brasa"
                className="absolute inset-0 hfull w-full object-cover"
            />

            <div className="absolute inset-0 bg-bg-primary/70"/>

            <Container>
                <div className="relative max-w-3xl">

                    <h1 className="text-5xl font-bold">
                        Experiências únicas 
                        <span>{" "}na brasa</span>
                    </h1>

                    <p className="mt-6 text-lg text-text-secondary">
                        Eventos memoráveis com cortes selecionados, 
                        técnica artesanal e o verdadeiro sabor do fogo. 
                    </p>

                    <div className="mt-8">
                        <Button href="https://wa.me/5551984599878?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.">
                            Solicitar orçamento
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
    
}