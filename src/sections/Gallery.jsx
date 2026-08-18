import { useEffect, useState } from "react";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(0)
    const [isFading, setIsFading] = useState(false)

    const imagesPerPage = 8;

    const totalPages = Math.ceil(
        galleryImages.length / imagesPerPage
    );

    const visibleImages = Array.from(
    { length: imagesPerPage },
    (_, index) => {
        const imageIndex =
        (currentPage * imagesPerPage + index) % galleryImages.length;

        return galleryImages[imageIndex];
    }
    );

    const changePage = (newPage) => {
        setIsFading(true);

        setTimeout(() => {
            setCurrentPage(newPage);
            setIsFading(false);
        }, 300);
    };

    const nextPage = () => {
        const next =
            currentPage === totalPages - 1 ? 0 : currentPage + 1;

        changePage(next);
    };

    const previousPage = () => {
        const previous =
            currentPage === 0 ? totalPages - 1 : currentPage - 1;

        changePage(previous);
    };

    useEffect(() => {
        if (totalPages <= 1) return;
        
        const interval = setInterval(() => {
            nextPage();
        }, 5000);
        
        return () => clearInterval(interval);
    
    }, [totalPages, currentPage]);





    return (
        <section
        id="gallery"
        aria-labelledby="gallery-title"
        className="mt-20"
        >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                La Bratche
            </p>

            <h2
                id="gallery-title"
                className="mt-2 text-3xl font-semibold text-text-primary"
            >
                Momentos à mesa
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                Fogo, sabor e experiências para compartilhar.
            </p>
            </div>

            <div className="relative mt-10">

            {/* Desktop */}
            <div
                className={`hidden grid-cols-4 gap-4 transition-opacity duration-300 md:grid ${
                    isFading ? "opacity-0" : "opacity-100"
                }`}
            >
            {visibleImages.map((image) => (
                <div
                key={image.id}
                className="aspect-square overflow-hidden rounded-xl"
                >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                />
                </div>
            ))}
            </div>

            {/* Mobile */}
            <div className="gallery-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:hidden">
            {galleryImages.map((image) => (
                <div
                key={image.id}
                className="w-[85%] shrink-0 snap-center overflow-hidden rounded-xl"
                >
                <div className="aspect-square">
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    />
                </div>
                </div>
            ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-6 flex justify-center gap-3">
                <button
                    onClick={previousPage}
                    aria-label="Fotos anteriores"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-primary transition hover:border-brand-orange hover:text-brand-orange"
                >
                    ←
                </button>

                <button
                    onClick={nextPage}
                    aria-label="Próximas fotos"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-primary transition hover:border-brand-orange hover:text-brand-orange"
                >
                    →
                </button>
                </div>
            )}
            </div>

        </div>
        </section>
    );
}