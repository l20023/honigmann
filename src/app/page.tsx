"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { ProductDialog } from "@/components/ProductDialog";
import { faqs, products, type Product } from "@/data/products";

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const closeDialog = useCallback(() => setSelected(null), []);
  const honeys = products.filter((product) => product.group === "honig");
  const specialties = products.filter((product) => product.group === "spezialitaet");
  const others = products.filter((product) => product.group === "weitere");

  return (
    <main>
      <section className="relative h-[calc(100svh-4.5rem)] min-h-[28rem] overflow-hidden bg-sand">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/20757775-uhd_3840_2160_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-ivory">
          <h1 className="font-display text-4xl font-medium leading-tight drop-shadow-[0_2px_18px_rgba(42,33,24,0.7)] sm:text-6xl md:text-7xl">
            Imkerei Kustermann
          </h1>
          <p className="mt-4 max-w-xl text-base drop-shadow-[0_2px_12px_rgba(42,33,24,0.75)] sm:text-2xl">
            Honig vom Imker Ihres Vertrauens!
          </p>
        </div>
      </section>

      <section id="about" className="px-5 py-14 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">Über mich</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed sm:mt-8 sm:space-y-5 sm:text-lg">
            <p>
              Seit über 40 Jahren bin ich von der faszinierenden Welt der Bienen
              begeistert. Was als Hobby begann, entwickelte sich zu einer
              lebenslangen Leidenschaft. Diese „Apis mellifera-Passion“, wie ich
              es gerne nenne, hat mich seit meiner Jugend begleitet und geprägt.
            </p>
            <p>
              In den frühen 1980er Jahren vertiefte ich mein Wissen über die
              Bienenhaltung während meines landwirtschaftlichen Studiums in
              Hohenheim, wo ich mich auf diesen Bereich spezialisierte. Nach dem
              Studium zog es mich in die Welt hinaus, wo ich als Experte für
              Bienenhaltung und Imkerei in Lateinamerika, Asien, Afrika und
              verschiedenen europäischen Ländern wertvolle Erfahrungen sammeln
              konnte.
            </p>
            <p>
              Seit 2008 bin ich wieder in meiner Heimat zurück und engagiere mich
              seitdem für die Bienenzucht. Zunächst war ich an der Landesanstalt
              für Bienenkunde tätig, und aktuell arbeite ich als Fachberater für
              Imkerei beim Regierungspräsidium Stuttgart.
            </p>
            <p>
              Meine Bienen sammeln fleißig Honig in den malerischen Landschaften
              rund um Kirchheim unter Teck, auf der Albhochfläche, im Schwäbischen
              Wald und – je nach Jahreszeit – auch im Schwarzwald oder sogar in
              der Pfalz. Dabei entstehen einzigartige Honigsorten, von denen ich
              dir gerne eine Auswahl anbiete.
            </p>
            <p>
              Bei mir erhältst du ausschließlich Honig aus eigener Imkerei – das
              garantiere ich mit meinem Namen. Qualität und Transparenz stehen bei
              mir an erster Stelle.
            </p>
            <p>
              Ich freue mich, dir hochwertige Honige und weitere Produkte zu
              fairen Preisen anbieten zu können. Entdecke die Vielfalt meiner
              Honigsorten und lass dich vom köstlichen Geschmack und der Qualität
              überzeugen!
            </p>
          </div>
          <p className="mt-10 font-display text-2xl">Thomas Kustermann</p>
        </div>
      </section>

      <section id="prices" className="relative px-4 py-14 text-ink sm:px-6 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxBanner
            className="h-full"
            layers={[
              {
                image: "/pexels-ionelceban-3194327.jpg",
                speed: -8,
              },
            ]}
          />
          <div className="absolute inset-0 bg-ivory/80" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-5xl">Produkte & Preise</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Aus eigener Imkerei. Die Bienen sammeln rund um Kirchheim unter Teck,
            auf der Albhochfläche, im Schwäbischen Wald und je nach Jahreszeit im
            Schwarzwald oder in der Pfalz.
          </p>

          <ProductGroup
            title="Honige"
            items={honeys}
            columns="lg:grid-cols-3"
            onSelect={setSelected}
          />
          <ProductGroup
            title="Spezialitäten"
            items={specialties}
            columns="lg:grid-cols-2"
            onSelect={setSelected}
          />
          <ProductGroup
            title="Weitere Erzeugnisse"
            items={others}
            columns="lg:grid-cols-2"
            onSelect={setSelected}
          />
        </div>
      </section>

      <section id="faq" className="px-5 py-14 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">Fragen zum Honig</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium">
                  {faq.question}
                  <span aria-hidden="true" className="when-closed text-gold">
                    +
                  </span>
                  <span aria-hidden="true" className="when-open text-gold">
                    –
                  </span>
                </summary>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProductDialog
          key={selected.id}
          product={selected}
          products={products}
          onSelect={setSelected}
          onClose={closeDialog}
        />
      )}
    </main>
  );
}

function ProductGroup({
  title,
  items,
  columns,
  onSelect,
}: {
  title: string;
  items: Product[];
  columns: string;
  onSelect: (product: Product) => void;
}) {
  return (
    <div className="mt-14">
      <h3 className="font-display text-3xl">{title}</h3>
      <div className={`mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 ${columns}`}>
        {items.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => onSelect(product)}
            className="flex h-full flex-col overflow-hidden border border-line bg-card text-left text-ink shadow-sm transition hover:border-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
          >
            <span className="relative block aspect-[3/2] w-full bg-sand sm:aspect-[4/3]">
              <Image
                src={product.images[0].src}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </span>
            <span className="flex flex-1 flex-col p-5 sm:p-6">
              <h4 className="font-display text-2xl">{product.name}</h4>
              <p className="mt-2 text-muted">{product.size}</p>
              <p className="mt-auto pt-6 text-lg font-semibold text-gold">{product.price}</p>
              <span className="mt-2 text-sm text-gold">Details ansehen</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
