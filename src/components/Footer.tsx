import Link from "next/link";

const phone = "+49 7021 9825382";
const phoneHref = "tel:+4970219825382";
const email = "honigmann@ymail.com";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontakt" className="bg-sand text-ink">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:grid-cols-2 sm:gap-12 sm:px-6 sm:py-14">
        <div>
          <h2 className="font-display text-3xl">Kontakt</h2>
          <address className="mt-5 space-y-1 not-italic leading-relaxed text-muted">
            <p>Thomas Kustermann</p>
            <p>Pfaffenhalde 41</p>
            <p>73230 Kirchheim unter Teck</p>
          </address>
          <p className="mt-4">
            <a
              href={phoneHref}
              className="break-words text-ink underline decoration-gold/40 underline-offset-4 hover:text-gold"
            >
              {phone}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={`mailto:${email}`}
              className="break-words text-ink underline decoration-gold/40 underline-offset-4 hover:text-gold"
            >
              {email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl">Impressum</h2>
          <div className="mt-5 space-y-1 leading-relaxed text-muted">
            <p>Angaben gemäß § 5 DDG</p>
            <p>Thomas Kustermann</p>
            <p>Pfaffenhalde 41</p>
            <p>73230 Kirchheim unter Teck</p>
            <p>
              Telefon:{" "}
              <a href={phoneHref} className="text-ink underline decoration-gold/40 underline-offset-4 hover:text-gold">
                {phone}
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${email}`}
                className="break-words text-ink underline decoration-gold/40 underline-offset-4 hover:text-gold"
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 text-center text-sm text-muted">
        <p>
          <Link href="/datenschutz" className="text-ink underline decoration-gold/40 underline-offset-4 hover:text-gold">
            Datenschutz
          </Link>
        </p>
        <p className="mt-2">© {year} Imkerei Kustermann. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
