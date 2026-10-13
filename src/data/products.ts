export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductGroup = "honig" | "spezialitaet" | "weitere";

export type Product = {
  id: string;
  name: string;
  price: string;
  size: string;
  group: ProductGroup;
  about: string;
  taste: string;
  images: ProductImage[];
};

const beesOnComb: ProductImage = {
  src: "/pexels-ionelceban-3194327.jpg",
  alt: "Bienen auf Waben",
};

const origin =
  "Aus eigener Imkerei. Die Bienen sammeln rund um Kirchheim unter Teck, auf der Albhochfläche, im Schwäbischen Wald und je nach Jahreszeit im Schwarzwald oder in der Pfalz.";

// Weitere Fotos pro Sorte hier anhängen. Die Galerie blättert, sobald mehr als ein Bild in der Liste steht.
export const products: Product[] = [
  {
    id: "fruehjahr",
    name: "Frühjahrs-Blütenhonig",
    price: "7,50 €",
    size: "500 g Glas",
    group: "honig",
    about: `Honig aus der Frühtracht, wenn Obstblüte, Löwenzahn und frühe Wiesenblumen blühen. ${origin}`,
    taste:
      "Hell, mild und blumig, mit einer eher zarten Süße. Frühjahrshonig wird mit der Zeit oft fest. Das ist normal.",
    images: [beesOnComb],
  },
  {
    id: "sommer",
    name: "Sommer-Blütenhonig",
    price: "7,50 €",
    size: "500 g Glas",
    group: "honig",
    about: `Honig aus der Sommertracht, wenn die Blüten kräftiger und vielfältiger sind. ${origin}`,
    taste:
      "Voller und würziger als der Frühjahrshonig, mit einer kräftigeren Süße.",
    images: [beesOnComb],
  },
  {
    id: "wald",
    name: "Waldhonig",
    price: "8,50 €",
    size: "500 g Glas",
    group: "honig",
    about: `Waldhonig entsteht vor allem aus Honigtau, nicht aus Blütennektar. ${origin}`,
    taste:
      "Dunkler, malzig und würzig, weniger süß als Blütenhonig. Er bleibt meist länger flüssig.",
    images: [beesOnComb],
  },
  {
    id: "tanne",
    name: "Tannenhonig",
    price: "9,50 €",
    size: "500 g Glas",
    group: "honig",
    about: `Tannenhonig ist ein Honigtauhonig von der Tanne. ${origin}`,
    taste: "Dunkel, harzig-würzig und malzig, kaum blumig. Er kann lange flüssig bleiben.",
    images: [beesOnComb],
  },
  {
    id: "backhonig",
    name: "Backhonig (hitzebehandelt)",
    price: "4,00 €",
    size: "500 g Glas",
    group: "honig",
    about: `Dieser Honig ist hitzebehandelt, damit er beim Backen und Kochen flüssig bleibt. ${origin}`,
    taste:
      "Schlichter als die Sortenhonige. Er ist zum Süßen von Gebäck und Speisen gedacht, nicht als feiner Brotaufstrich.",
    images: [beesOnComb],
  },
  {
    id: "met",
    name: "Met (Honigwein)",
    price: "Auf Anfrage",
    size: "0,5 l, süß oder trocken",
    group: "spezialitaet",
    about: "Met ist Honigwein. Es gibt ihn süß oder trocken, 0,5 l, etwa 14 %.",
    taste: "Je nach Ausbau mild-süß oder trocken, mit dem Aroma des Honigs.",
    images: [beesOnComb],
  },
  {
    id: "baerenfang",
    name: "Bärenfang",
    price: "Auf Anfrage",
    size: "0,2 l",
    group: "spezialitaet",
    about: "Bärenfang ist ein Honiglikör, 0,2 l, etwa 30 %.",
    taste: "Süß und wärmend, mit deutlichem Honig.",
    images: [beesOnComb],
  },
  {
    id: "honigessig",
    name: "Honigessig",
    price: "Auf Anfrage",
    size: "0,5 l",
    group: "spezialitaet",
    about: "Essig aus Honig, 0,5 l.",
    taste: "Mild säuerlich, mit einem Hauch Honig. Für Salat und zum Kochen.",
    images: [beesOnComb],
  },
  {
    id: "propolis",
    name: "Propolis",
    price: "Auf Anfrage",
    size: "20 ml",
    group: "spezialitaet",
    about:
      "Propolis ist das Kittharz der Bienen. Es gibt es als alkoholische Lösung, 20 ml, oder in Honig: 20 ml in 250 g Honig.",
    taste:
      "Harzig und bitter. Die Lösung ist intensiv, in Honig mildert der Honig das Harz.",
    images: [beesOnComb],
  },
  {
    id: "wabenhonig",
    name: "Wabenhonig",
    price: "Auf Anfrage",
    size: "Vorbestellung im April",
    group: "weitere",
    about: `Honig in der natürlichen Wabe. Vorbestellung im April. ${origin}`,
    taste:
      "Honig und Wachs schmeckt man zusammen. Das Aroma hängt von der Tracht ab und wirkt intensiv.",
    images: [beesOnComb],
  },
  {
    id: "weitere",
    name: "Pollen und Wachs",
    price: "Auf Anfrage",
    size: "Nach Absprache",
    group: "weitere",
    about: "Pollen, Wachs und andere Erzeugnisse auf Anfrage.",
    taste:
      "Pollen ist körnig, leicht süß und etwas herb. Wachs duftet nach Honig und ist zum Verarbeiten gedacht.",
    images: [beesOnComb],
  },
];

export const faqs = [
  {
    question: "Warum wird der Honig fest?",
    answer:
      "Blütenhonig kristallisiert mit der Zeit. Das ist normal und sagt nichts gegen die Qualität. Zum Verflüssigen das Glas geschlossen ins warme Wasserbad stellen, nicht heißer als etwa 40 Grad, und nicht in die Mikrowelle.",
  },
  {
    question: "Wie lagere ich Honig?",
    answer:
      "Kühl, dunkel und trocken lagern und das Glas fest verschließen. Ein Küchenschrank reicht, der Kühlschrank ist nicht nötig.",
  },
  {
    question: "Stammt der Honig aus eigener Imkerei?",
    answer:
      "Ja. Du bekommst ausschließlich Honig aus meiner eigenen Imkerei. Das garantiere ich mit meinem Namen.",
  },
];
