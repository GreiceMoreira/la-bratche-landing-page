import { useState } from "react";
import { meatCategories } from "../../data/churrasco";

import meatsImage from "../../assets/images/meats/grilled-steak.png";
import sidesImage from "../../assets/images/sides/sides.jpg";
import pineappleImage from "../../assets/images/desserts/abacaxi.jpg";
import bananaImage from "../../assets/images/desserts/banana.jpg";

export default function ChurrascoMenu({ details }) {
  const [showSpecialMenu, setShowSpecialMenu] = useState(false);

  const categoryLabels = Object.fromEntries(
    meatCategories.map((category) => [category.id, category.name])
  );

  const regularCategories = meatCategories.filter(
    (category) => !category.special
  );

  const specialCategories = meatCategories.filter(
    (category) => category.special
  );

  const availableMeats = details.meats.filter((item) => item.available);

  const groupedItems = regularCategories.map((category) => ({
    category: category.id,
    items: availableMeats.filter(
      (item) => item.category === category.id
    ),
  }));

  const specialItems = specialCategories.map((category) => ({
    category: category.id,
    items: availableMeats.filter(
      (item) => item.category === category.id
    ),
  }));

  const renderMenuItem = (item) => (
    <div key={item.id} className="border-b border-border-subtle pb-4">
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

  return (
    <>
      {/* CARNES */}
      <section id="meats" aria-labelledby="meats-title" className="mt-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Da brasa à mesa
          </p>

          <h3
            id="meats-title"
            className="mt-2 font-display text-4xl font-semibold tracking-wide text-text-primary sm:text-5xl"
          >
            Carnes selecionadas
          </h3>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <img
            src={meatsImage}
            alt="Carnes sendo preparadas na brasa"
            className="h-[320px] w-full object-cover object-[70%_center] transition-transform duration-700 hover:scale-105 sm:h-[450px]"
          />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-9">
        <p className="max-w-2xl text-sm leading-relaxed text-white drop-shadow-lg sm:text-base">
            Cortes selecionados e preparados na brasa para valorizar cada
            sabor.
        </p>
        </div>
        </div>

        <div className="mt-10 space-y-14">
          {/* CATEGORIAS REGULARES */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {groupedItems.map(({ category, items }) => {
              if (items.length === 0) return null;

              return (
                <div key={category}>
                  <h4 className="border-b border-brand-orange/40 pb-3 font-display text-2xl font-normal tracking-wide text-text-primary">
                    {categoryLabels[category]}
                  </h4>

                  <div className="mt-5 space-y-4">
                    {[...items]
                      .sort((a, b) =>
                        a.name.localeCompare(b.name, "pt-BR")
                      )
                      .map(renderMenuItem)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* MENU ESPECIAL */}
          {specialItems.some((group) => group.items.length > 0) && (
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
                  onClick={() =>
                    setShowSpecialMenu((current) => !current)
                  }
                  aria-expanded={showSpecialMenu}
                  aria-controls="meats-special-menu"
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

              {showSpecialMenu && (
                <div
                  id="meats-special-menu"
                  className="mt-10 grid gap-10 border-t border-border-subtle pt-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {specialItems
                    .filter((group) => group.items.length > 0)
                    .map((group) => (
                      <div key={group.category}>
                        <h4 className="border-b border-brand-orange/40 pb-3 font-display text-2xl font-normal tracking-wide text-text-primary">
                          {categoryLabels[group.category]}
                        </h4>

                        <div className="mt-5 space-y-4">
                          {[...group.items]
                            .sort((a, b) =>
                              a.name.localeCompare(b.name, "pt-BR")
                            )
                            .map(renderMenuItem)}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ACOMPANHAMENTOS */}
      <section id="sides" aria-labelledby="sides-title" className="mt-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Além das carnes
          </p>

        <h3
        id="sides-title"
        className="mt-2 px-2 font-display text-3xl font-semibold tracking-normal text-text-primary sm:text-5xl"
        >
        Acompanhamentos
        </h3>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <img
            src={sidesImage}
            alt="Cebola, pimentão e pão LaBratche"
            className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px]"
          />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-9">
        <p className="max-w-2xl text-sm leading-relaxed text-white drop-shadow-lg sm:text-base">
            Pães, vegetais e outros sabores preparados para deixar a experiência ainda mais completa.
        </p>
        </div>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {details.sides
            .filter((item) => item.available)
            .map((item) => (
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
      </section>

      {/* SOBREMESAS */}
      <section
        id="desserts"
        aria-labelledby="desserts-title"
        className="mt-20"
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Para finalizar
          </p>

          <h3
            id="desserts-title"
            className="mt-2 font-display text-4xl font-semibold tracking-wide text-text-primary sm:text-5xl"
          >
            Sobremesas
          </h3>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2">
          {[pineappleImage, bananaImage].map((image, index) => {
            const item = details.desserts.filter(
              (dessert) => dessert.available
            )[index];

            if (!item) return null;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden"
              >
                <img
                  src={image}
                  alt={item.name}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-6 pt-16">
                  <h4 className="font-display text-2xl font-normal text-white">
                    {item.name}
                  </h4>

                  {item.description && (
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}