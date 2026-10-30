export default function ChurrascoSampleMenus({ sampleMenus, details }) {
  const getMenuItem = (itemId) => {
    const { meats, sides, desserts } = details;

    return [...meats, ...sides, ...desserts].find(
      (item) => item.id === itemId
    );
  };

  return (
    <section
      id="sample-menus"
      aria-labelledby="sample-menus-title"
      className="mt-20"
    >
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-orange">
          Nossas sugestões
        </p>

        <h3
          id="sample-menus-title"
          className="mt-2 font-display text-4xl font-normal tracking-wide text-text-primary sm:text-5xl"
        >
          Exemplos de cardápio
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-text-muted">
          Algumas combinações criadas para facilitar sua escolha. Você também
          pode personalizar o seu cardápio.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sampleMenus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col rounded-2xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/60"
          >
            <h4 className="font-display text-2xl font-normal text-text-primary">
              {menu.name}
            </h4>

            {menu.pricePerPerson && (
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-3xl font-normal text-brand-orange">
                  ${menu.pricePerPerson}
                </span>

                <span className="text-sm text-text-muted">/ pessoa</span>
              </div>
            )}

            <p className="mt-1 text-sm text-text-muted">
              Mínimo de {menu.minGuests} pessoas
            </p>

            <div className="my-6 border-t border-border-subtle pt-5">
              <ul className="space-y-3">
                {menu.items.map((itemId) => {
                  const item = getMenuItem(itemId);

                  if (!item || !item.available) return null;

                  return (
                    <li
                      key={item.id}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="mt-1 text-brand-orange">✓</span>
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}