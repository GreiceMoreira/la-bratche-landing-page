import {
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa"

import LaBratche from "../assets/images/LaBratche.png"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border-subtle bg-bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Logo */}
            <div className="text-center md:text-left">
            <img
              src={LaBratche}
              alt="La Bratche"
              className="mx-auto h-16 w-auto md:mx-0"
            />

            <p className="mt-3 text-sm text-text-muted">
              Churrasco, fogo e experiências.
            </p>
            </div>

            {/* Contato */}
            <div className="flex flex-col items-center gap-4 md:items-start">
            <a
              href="tel:+519984599878"
              aria-label="Telefone"
              className="flex items-center gap-3 text-text-secondary transition hover:text-brand-orange"
            >
                <FaPhone className="text-brand-orange" />
                (51) 9 8459 9878
            </a>

            <a
              href="mailto:labrassados@gmail.com"
              aria-label="Email"
              className="flex items-center gap-3 text-text-secondary transition hover:text-brand-orange"
            >
                <FaEnvelope className="text-brand-orange" />
                labrassados@gmail.com
            </a>
            </div>

            {/* Redes sociais */}

            <div className="flex flex-col items-center">
            <p className="mb-3 text-sm text-text-muted">
                Siga a La Bratche
            </p>

            <div className="flex items-center justify-center gap-5">
                <a
                href="https://www.instagram.com/labratche"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-text-secondary transition hover:text-brand-orange"
                >
                <FaInstagram />
                </a>

                <a
                href="https://www.youtube.com/@Italiano_no_fogo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-2xl text-text-secondary transition hover:text-brand-orange"
                >
                <FaYoutube />
                </a>
            </div>
            </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 border-t border-border-subtle pt-6 text-center text-sm text-text-muted">
          © 2026 La Bratche. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}