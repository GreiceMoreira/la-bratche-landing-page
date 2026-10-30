
function MenuItem({ item }) {
  return (
    <div className="border-b border-border-subtle pb-4">
      {item.featured && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Da casa
        </p>
      )}

      <h5 className="mt-1 text-lg font-medium text-text-primary">
        {item.name}
      </h5>

      {item.description && (
        <p className="mt-1 text-sm leading-relaxed text-text-muted">
          {item.description}
        </p>
      )}
    </div>
  );
}

function MenuGroup({ title, items }) {
  if (!items.length) return null;

  return (
    <div>
      <h4 className="border-b border-brand-orange/40 pb-3 font-display text-2xl font-normal tracking-wide text-text-primary">
        {title}
      </h4>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function HamburguerMenu({ details }) {
  const breads = details.breads.filter((item) => item.available);
  const meats = details.meats.filter((item) => item.available);
  const ingredients = details.ingredients.filter(
    (item) => item.available
  );
  const optionalItems = details.optionalItems.filter(
    (item) => item.available
  );

  return (
    <section
      id="hamburguer-menu"
      aria-labelledby="hamburguer-menu-title"
      className="mt-20"
    >
      {/* Section heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Nosso cardápio
        </p>

        <h3
          id="hamburguer-menu-title"
          className="mt-2 font-display text-4xl font-semibold tracking-wide text-text-primary sm:text-5xl"
        >
          Monte seu hambúrguer
        </h3>
      </div>

      <div className="mt-14 space-y-14">

        {/* Breads */}
        {breads.length > 0 && (
          <MenuGroup title="Pães" items={breads} />
        )}

        {/* Meats */}
        {meats.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Da brasa à montagem
              </p>

              <h4 className="mt-2 font-display text-3xl font-normal text-text-primary">
                Carnes selecionadas
              </h4>
            </div>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {meats.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Ingredients */}
        {ingredients.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Para complementar
              </p>

              <h4 className="mt-2 font-display text-3xl font-normal text-text-primary">
                Ingredientes e acompanhamentos
              </h4>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {ingredients.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Optional items */}
        {optionalItems.length > 0 && (
          <div className="border-t border-border-subtle pt-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Para deixar ainda melhor
              </p>

              <h4 className="mt-2 font-display text-3xl font-normal text-text-primary">
                Acompanhamentos opcionais
              </h4>
            </div>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {optionalItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}