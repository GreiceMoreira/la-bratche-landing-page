



export default function ExperienceDetails({ experience }) {
    const getMenuItem = (itemId) => {
        const { meats, sides, desserts } = experience.details;

        return [...meats, ...sides, ...desserts].find(
        (item) => item.id === itemId
        );
    };


  return ( 
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">    

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


        <section id="meats" aria-labelledby="meats-title" className="mt-20">

            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    Da brasa à mesa
                </p>
                <h3 id="meats-title" className="mt-2 text-3xl font-semibold text-text-primary">
                    Carnes selecionadas
                </h3>
                
                <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                    Cortes selecionados e preparados na brasa para valorizar cada sabor.
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {experience.details.meats
                    .filter((meat) => meat.available)
                    .map((meat)=> (
                        <div
                            key={meat.id}
                            className={`rounded-xl border p-5 transition-all duration-300 ${
                                meat.featured
                                ? "border-brand-orange bg-brand-orange/5 shadow-lg"
                                : "border-border-subtle bg-bg-surface"
                               }`} 
                        >
                            <h4 className="text-lg font-semibold text-text-primary">
                                {meat.name}
                            </h4>

                            {meat.description && (
                                <p className="mt-1 text-sm text-text-muted">
                                    {meat.description}
                                </p>
                            )}
                        </div>
                    ))
                }
            </div>

            
        </section>

        <section id="sides" aria-labelledby="sides-title" className="mt-20">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Para acompanhar
                </p>

                <h3
                id="sides-title"
                className="mt-2 text-3xl font-semibold text-text-primary"
                >
                Acompanhamentos
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                Sabores pensados para acompanhar as carnes e completar a experiência.
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {experience.details.sides
                .filter((side) => side.available)
                .map((side) => (
                    <div
                    key={side.id}
                    className={`rounded-xl border p-5 transition-all duration-300 ${
                        side.featured
                        ? "border-brand-orange bg-brand-orange/5 shadow-lg"
                        : "border-border-subtle bg-bg-surface"
                    }`}
                    >
                    <h4 className="text-lg font-semibold text-text-primary">
                        {side.name}
                    </h4>

                    {side.description && (
                        <p className="mt-1 text-sm text-text-muted">
                        {side.description}
                        </p>
                    )}
                    </div>
                ))}
            </div>
            
        </section>

        <section id="desserts" aria-labelledby="desserts-title" className="mt-20">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Para finalizar
                </p>

                <h3
                id="desserts-title"
                className="mt-2 text-3xl font-semibold text-text-primary"
                >
                Sobremesas
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                Um toque especial para encerrar a experiência.
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {experience.details.desserts
                .filter((dessert) => dessert.available)
                .map((dessert) => (
                    <div
                    key={dessert.id}
                    className={`rounded-xl border p-5 transition-all duration-300 ${
                        dessert.featured
                        ? "border-brand-orange bg-brand-orange/5 shadow-lg"
                        : "border-border-subtle bg-bg-surface"
                    }`}
                    >
                    <h4 className="text-lg font-semibold text-text-primary">
                        {dessert.name}
                    </h4>

                    {dessert.description && (
                        <p className="mt-1 text-sm text-text-muted">
                        {dessert.description}
                        </p>
                    )}
                    </div>
                ))}
            </div>
            </section>


        <section id="sample-menus" aria-labelledby="sample-menus-title" className="mt-20">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Nossas sugestões
                </p>

                <h3
                id="sample-menus-title"
                className="mt-2 text-3xl font-semibold text-text-primary"
                >
                Exemplos de cardápio
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                Algumas combinações criadas para facilitar sua escolha. Você também pode
                personalizar o seu cardápio.
                </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {experience.details.sampleMenus.map((menu) => (
                <div
                    key={menu.id}
                    className="flex flex-col rounded-2xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/60"
                >
                    <h4 className="text-2xl font-semibold text-text-primary">
                    {menu.name}
                    </h4>

                    <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-brand-orange">
                        ${menu.pricePerPerson}
                        </span>

                        <span className="text-sm text-text-muted">
                        / pessoa
                        </span>
                    </div>

                    <p className="mt-1 text-sm text-text-muted">
                    Mínimo de {menu.minGuests} pessoas
                    </p>

                    <div className="my-6 border-t border-border-subtle pt-5">
                    <ul className="space-y-3">
                        {menu.items.map((itemId) => {
                            const item = getMenuItem(itemId);

                            if(!item) return null;

                            return (
                                <li key={item.id} className="flex items-start gap-3 text-text-secondary"
                                >
                                    <span className="mt-1 text-brand-orange">✓</span>

                                    <span>{item.name}</span>
                                    
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </div>
                ))}
            </div>
            </section>

    </div>
  )
}