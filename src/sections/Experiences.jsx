import Container from "../components/Container";
import ExperienceCard from "../components/experience/ExperienceCard";
import ExperienceDetails from "../components/experience/ExperienceDetails";
import { experiences } from "../components/experience/experiences";
import ExperienceTabs from "../components/experience/ExperienceTabs";
import Section from "../components/Section";



export default function Experiences() {
    return (
        <Section>
            <Container>
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
                        Nossas experiêcias
                    </p>

                    <h2 className="mt-3 text-4xl font-semibold text-text-primary">
                        O seu evento, do seu jeito.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
                        Da brasa ao burger artesanal, escolha o serviço que melhor combina com o seu evento.
                    </p>
                </div>
               
               <div className="grid gap-8 md:grid-cols-3">
                {experiences
                    .filter((experience) => experience.active)
                    .map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        experience={experience}
                    />
                ))}
               </div>
                
            
            </Container>
            <ExperienceDetails experience={experiences[0]}/>

        </Section>
    );
}