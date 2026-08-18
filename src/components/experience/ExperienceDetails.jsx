



export default function ExperienceDetails({ experience }) {
  return (
    <section id="service-options" aria-labelledby="service-options-title">
        <div className="mt-16">
            <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Escolha a experiência
                </p>

                <h3 id="service-options-title" className="mt-2 text-3xl font-semibold text-text-primary">
                Duas formas de viver o seu churrasco
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {Object.values(experience.details.serviceOptions).map((service) => (
                <div
                    key={service.id}
                    className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                    service.featured
                        ? "border-brand-orange bg-brand-orange/5 shadow-lg"
                        : "border-border-subtle bg-bg-surface shadow-sm"
                    }`}
                >
                    {service.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-brand-orange px-4 py-1 text-xs font-semibold uppercase tracking-wide text-bg-primary">
                        Mais escolhido
                    </span>
                    )}

                    <h4 className="text-2xl font-semibold text-text-primary">
                    {service.title}
                    </h4>

                    <p className="mt-4 leading-relaxed text-text-muted">
                    {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                        <li
                        key={feature}
                        className="flex items-start gap-3 text-text-primary"
                        >
                        <span className="mt-1 text-brand-orange ">✓</span>
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}