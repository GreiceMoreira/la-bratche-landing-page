export default function Contact() {
  const whatsappNumber = "5551984599878";

  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da La Bratche."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section
      id="contact"
      className="mt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-bg-surface px-6 py-16 text-center md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Vamos conversar
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-text-primary md:text-4xl">
            Fale com a La Bratche
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Conte pra gente sobre o seu evento e vamos preparar
            uma experiência de churrasco do seu jeito.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-brand-orange px-6 py-3 font-semibold text-bg-primary transition hover:opacity-90"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}