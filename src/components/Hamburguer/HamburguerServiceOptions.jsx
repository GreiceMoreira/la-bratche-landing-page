export default function HamburguerServiceOptions({ options }) {
  return (
    <section
      id="service-options"
      aria-labelledby="service-options-title"
    >
      <div className="mt-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-orange">
            Escolha a experiência
          </p>

          <h3
            id="service-options-title"
            className="mt-2 font-display text-4xl font-normal tracking-wide text-text-primary sm:text-5xl"
          >
            Duas formas de viver o Burger Experience
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.values(options)
            .filter((service) => service.available)
            .map((service) => (
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

                <h4 className="font-display text-2xl font-normal text-text-primary">
                  {service.title}
                </h4>

                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-text-primary sm:text-base"
                    >
                      <span className="mt-1 text-brand-orange">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}