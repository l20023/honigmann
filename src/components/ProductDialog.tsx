"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";

const eyebrow: Record<Product["group"], string> = {
  honig: "Aus eigener Imkerei",
  spezialitaet: "Spezialität",
  weitere: "Auf Anfrage",
};

export function ProductDialog({
  product,
  products,
  onSelect,
  onClose,
}: {
  product: Product;
  products: Product[];
  onSelect: (product: Product) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const count = product.images.length;
  const image = product.images[index];

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (count < 2 ? current : (current + 1) % count));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) =>
          count < 2 ? current : (current - 1 + count) % count,
        );
      }
      if (event.key !== "Tab") return;

      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [count, onClose]);

  const showPrevious = () => {
    setIndex((current) => (current - 1 + count) % count);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % count);
  };

  const suggestions = products
    .filter((item) => item.group === product.group && item.id !== product.id)
    .slice(0, 2);
  const suggestionTitle = product.group === "honig" ? "Andere Honige" : "Weitere Produkte";

  return (
    <div
      className="fixed inset-0 z-[70] flex bg-ink/40 md:items-center md:justify-center md:p-8"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-dialog-title"
        className="relative flex h-full w-full flex-col overflow-y-auto bg-card text-ink md:grid md:h-[min(92dvh,880px)] md:max-w-5xl md:grid-cols-2 md:overflow-hidden md:shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-bark text-ivory hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
        >
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
        </button>
        <div className="relative shrink-0 bg-ivory md:flex md:h-full md:items-center md:justify-center md:p-6">
          <div className="w-full md:max-w-md">
          <div className="relative h-56 w-full overflow-hidden bg-bark sm:h-64 md:aspect-[4/3] md:h-auto">
            <Image
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover object-center"
            />
            <button
              type="button"
              onClick={showPrevious}
              disabled={count < 2}
              aria-label="Vorheriges Bild"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bark text-ivory shadow-md enabled:hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={showNext}
              disabled={count < 2}
              aria-label="Nächstes Bild"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bark text-ivory shadow-md enabled:hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Chevron direction="right" />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {product.images.map((item, imageIndex) => (
              <button
                key={`${item.src}-${imageIndex}`}
                type="button"
                aria-label={`Bild ${imageIndex + 1} anzeigen`}
                aria-current={imageIndex === index}
                onClick={() => setIndex(imageIndex)}
                className={`h-2.5 w-2.5 rounded-full ${
                  imageIndex === index ? "bg-gold" : "bg-line"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted" aria-live="polite">
            Bild {index + 1} von {count}
          </p>
          </div>
        </div>

        <article className="px-5 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-10 md:min-h-0 md:overflow-y-auto md:pr-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
            {eyebrow[product.group]}
          </p>
          <h2 id="product-dialog-title" className="mt-3 font-display text-4xl leading-tight">
            {product.name}
          </h2>
          <p className="mt-5 font-display text-3xl text-gold">{product.price}</p>
          <p className="mt-2 text-muted">{product.size}</p>
          <h3 className="mt-8 font-display text-2xl">Was es ist</h3>
          <p className="mt-3 leading-relaxed">{product.about}</p>
          <h3 className="mt-8 font-display text-2xl">Geschmack</h3>
          <p className="mt-3 leading-relaxed">{product.taste}</p>
          {suggestions.length > 0 && (
            <div className="mt-12 border-t border-line pt-8">
              <h3 className="font-display text-2xl">{suggestionTitle}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    type="button"
                    onClick={() => onSelect(suggestion)}
                    className="border border-line bg-ivory text-left text-ink transition hover:border-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
                  >
                    <span className="relative block aspect-[4/3] bg-sand">
                      <Image
                        src={suggestion.images[0].src}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover object-center"
                      />
                    </span>
                    <span className="block p-3">
                      <span className="block font-display text-lg leading-tight">{suggestion.name}</span>
                      <span className="mt-1 block text-sm text-gold">{suggestion.price}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d={direction === "left" ? "M12 4 L6 10 L12 16" : "M8 4 L14 10 L8 16"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
