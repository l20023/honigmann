import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzhinweise der Imkerei Kustermann. Die Website setzt keine eigenen Cookies und hat kein Kontaktformular.",
};

export default function DatenschutzPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <article className="mx-auto max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
          Imkerei Kustermann
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Datenschutz</h1>
        <p className="mt-6 leading-relaxed text-muted">
          Diese Hinweise beschreiben, was diese Website tatsächlich tut. Es gibt
          kein Kontaktformular, keinen Newsletter und keine eingebundenen
          Kartendienste.
        </p>

        <h2 className="mt-12 font-display text-3xl">Verantwortlicher</h2>
        <div className="mt-4 space-y-1 leading-relaxed">
          <p>Thomas Kustermann</p>
          <p>Pfaffenhalde 41</p>
          <p>73230 Kirchheim unter Teck</p>
          <p>
            Telefon:{" "}
            <a href="tel:+4970219825382" className="text-gold underline underline-offset-4">
              +49 7021 9825382
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:honigmann@ymail.com"
              className="text-gold underline underline-offset-4"
            >
              honigmann@ymail.com
            </a>
          </p>
        </div>

        <h2 className="mt-12 font-display text-3xl">Aufruf der Website</h2>
        <p className="mt-4 leading-relaxed">
          Der Server, der diese Seite ausliefert, verarbeitet technisch
          erforderliche Verbindungsdaten, etwa die IP-Adresse, damit die Seite
          im Browser ankommt. Das Video auf der Startseite liegt auf demselben
          Server und wird nicht von einem externen Videodienst geladen. Wir
          setzen dafür keine eigenen Analyse- oder Marketingwerkzeuge ein.
        </p>

        <h2 className="mt-12 font-display text-3xl">Kontakt</h2>
        <p className="mt-4 leading-relaxed">
          Wenn du anrufst oder eine E-Mail schreibst, nimmst du den Kontakt
          selbst auf. Die Angaben gelangen an den jeweiligen Telefon- oder
          E-Mail-Anbieter und an mich, damit ich dir antworten kann.
        </p>

        <h2 className="mt-12 font-display text-3xl">Cookies</h2>
        <p className="mt-4 leading-relaxed">
          Diese Website setzt selbst keine Cookies. Es findet keine Reichweitenmessung
          und keine Werbung statt.
        </p>

        <h2 className="mt-12 font-display text-3xl">Deine Rechte</h2>
        <p className="mt-4 leading-relaxed">
          Du kannst Auskunft, Berichtigung, Löschung oder Einschränkung der
          Verarbeitung verlangen, soweit dazu Daten bei mir vorliegen. Außerdem
          hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Für Baden-Württemberg ist das der Landesbeauftragte für
          den Datenschutz und die Informationsfreiheit Baden-Württemberg.
        </p>

        <p className="mt-12">
          <Link href="/" className="text-gold underline underline-offset-4">
            Zur Startseite
          </Link>
        </p>
      </article>
    </main>
  );
}
