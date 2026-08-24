export default function AwardsBadge({ awards }) {
  return (
    <div className="inline-flex flex-col gap-3">
      {awards.map((award) => (
        <div
          key={`${award.competition}-${award.year}`}
          className="inline-flex items-center gap-4 rounded-full border border-brand-gold/50 bg-black/30 px-5 py-3 backdrop-blur-sm"
        >
          <span className="text-2xl text-brand-gold">
            ✦
          </span>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
              {award.title} {award.year}
            </p>

            <p className="mt-0.5 font-display text-lg text-white">
              {award.competition}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}