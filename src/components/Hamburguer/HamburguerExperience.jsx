
export default function HamburguerExperience({ details }) {
  return (
    <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-2xl flex-row items-center justify-center gap-6 text-center sm:gap-16">

        {/* Minimum guests */}
        <div>
            <span className="block font-display text-4xl text-text-primary">
            {details.minGuests}
            </span>

            <span className="mt-2 block text-sm text-text-muted">
            Pessoas no mínimo
            </span>
        </div>

        {/* Divisor */}
        <div className="h-12 w-px bg-border-subtle" />

        {/* Price */}
        <div>
            <span className="block font-display text-4xl text-text-primary">
            R$ {details.pricePerPerson}
            </span>

            <span className="mt-2 block text-sm text-text-muted">
            Por pessoa
            </span>

            <span className="mt-1 block text-xs text-text-muted">
            {details.priceNote}
            </span>
        </div>

        </div>
    </section>
  );
}