
{/* <MenuSection
    id="meats"
    variant="meats"
    eyebrow=" Da brasa à mesa"
    title="Carnes selecionadas"
    description="Cortes selecionados e preparados na brasa para valorizar cada sabor."
    image={meatsImage}
    items={experience.details.meats}
/> */}
import { useState } from "react";

export default function MenuSection({
  id,
  eyebrow,
  title,
  description,
  image,
  images,
  items,
  variant,
}) {
  const availableItems = items.filter((item) => item.available)

  const regularCategories = ["chicken", "beef", "pork"]
  const specialCategories = ["angus", "lamb", "exotic"]

  const groupedItems = regularCategories.map((category) => ({
    category,
    items: availableItems.filter((item) => item.category === category),
  }))

  const specialItems = specialCategories.map((category) => ({
    category,
    items: availableItems.filter((item) => item.category === category),
  }))

  const [showSpecialMenu, setShowSpecialMenu] = useState(false);

  const categoryLabels = {
    chicken: "Frango",
    beef: "Gado",
    pork: "Porco",
    angus: "Angus",
    lamb: "Cordeiro",
    exotic: "Experiências Exóticas",
  };    

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-20">
      {/* Section heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </p>

        <h3
          id={`${id}-title`}
          className="mt-2 font-display text-4xl font-semibold tracking-wide text-text-primary sm:text-5xl"
        >
          {title}
        </h3>
      </div>

      {/* Visual */}
      {images?.length > 0 ? (
        variant === "desserts" ? (
          <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2">
            {images.map((image, index) => {
              const item = availableItems[index];

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt || item?.name || title}
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-6 pt-16">
                    <h4 className="font-display text-2xl font-normal text-white">
                      {item?.name}
                    </h4>

                      {item?.description && (
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/90">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {images.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt || title}
                  className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px]"
                />
              </div>
            ))}
          </div>
        )
      ) : (
        image && (
          <div className="relative mt-14 overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt || title}
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px]"
            />

            {description && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
                <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  {description}
                </p>
              </div>
            )}
          </div>
        )
      )}

          {/* Menu items */}
          {variant === "meats" ? (
            <div className="mt-10 space-y-14">

              {/* Regular categories */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {groupedItems.map(({ category, items }) => {
                  if (items.length === 0) return null

                  return (
                    <div key={category}>
                      {/* Category title */}
                      <h4 className="border-b border-brand-orange/40 pb-3 font-display text-2xl font-normal tracking-wide text-text-primary">
                        {categoryLabels[category]}
                      </h4>

                      {/* Category items */}
                      <div className="mt-5 space-y-4">
                        {[...items]
                            .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
                            .map((item) => (
                          <div
                            key={item.id}
                            className="border-b border-border-subtle pb-4"
                          >
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
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Special menu */}
              <div className="border-t border-border-subtle pt-10">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    Menu especial
                  </p>

                  <h4 className="mt-2 font-display text-3xl font-normal text-text-primary">
                    Cortes especiais
                  </h4>

                  <button
                    type="button"
                    onClick={() => setShowSpecialMenu((current) => !current)}
                    aria-expanded={showSpecialMenu}
                    aria-controls={`${id}-special-menu`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-brand-orange transition-all duration-300 hover:bg-brand-orange hover:text-white"
                  >
                    {showSpecialMenu ? "Ocultar menu" : "Conheça o menu"}

                    <span
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${
                        showSpecialMenu ? "rotate-90" : ""
                      }`}
                    >
                      →
                    </span>
                  </button>
                </div>

                {/* Special categories */}
                {showSpecialMenu && (
                  <div
                    id={`${id}-special-menu`}
                    className="mt-10 grid gap-10 border-t border-border-subtle pt-10 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {specialItems
                      .filter((group) => group.items.length > 0)
                      .map((group) => (
                        <div key={group.category}>
                          {/* Category title */}
                          <h4 className="border-b border-brand-orange/40 pb-3 font-display text-2xl font-normal tracking-wide text-text-primary">
                            {categoryLabels[group.category]}
                          </h4>

                          {/* Category items */}
                          <div className="mt-5 space-y-4">
                            {[...group.items]
                                .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
                                .map((item) => (
                              <div
                                key={item.id}
                                className="border-b border-border-subtle pb-4"
                              >
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
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
          variant !== "desserts" && (
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {availableItems.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.featured
                      ? "border-l-2 border-brand-orange pl-5 sm:pl-6"
                      : "border-b border-border-subtle pb-5"
                  }
                >
                  {item.featured && (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                      Da casa
                    </p>
                  )}

                  <h4
                    className={
                      item.featured
                        ? "mt-1 font-display text-xl font-normal text-text-primary"
                        : "text-lg font-medium text-text-primary"
                    }
                  >
                    {item.name}
                  </h4>

                  {item.description && (
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )
        )}
    </section>
  );
}





       