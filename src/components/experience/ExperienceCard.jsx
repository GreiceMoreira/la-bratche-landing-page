export default function ExperienceCard({ experience }) {
    const Icon = experience.icon;

    return (
        <article className="group overflow-hidden rounded-3xl border border-brand-orange/20 bg-brand-surface shadow-lg">
            <div className="aspect-4/3 overflow-hidden">
                 <img
                src={experience.image}
                alt={experience.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            
            <div className="p-6">
                <Icon className="text-3xl text-brand-orange" />

                <h3 className="mt-4 text-2xl font-semibold text-text-primary">
                    {experience.title}
                </h3>

                <p className="mt-3 leading-relaxed text-text-secondary">
                    {experience.description}
                </p>

                <a href={`#${experience.id}`} className="mt-6 inline-block font-semibold text-brand-orange transition hover:opacity-70">
                    Saiba mais →
                </a>
            </div>
        </article>

    );
}