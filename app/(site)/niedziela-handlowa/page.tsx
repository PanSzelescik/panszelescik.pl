import type { Metadata } from "next";
import {
  formatDate,
  getNextNiedzielaHandlowa,
  getNiedzieleHandloweInYear,
} from "@/app/lib/niedziele";
import link from "@/app/lib/link";

const url = new URL(link("niedziela-handlowa"));

export function generateMetadata(): Metadata {
  const nextNiedzielaHandlowa = getNextNiedzielaHandlowa() || new Date();
  const year = nextNiedzielaHandlowa.getFullYear();

  const title = `Niedziele handlowe ${year}`;
  const longDescription = `Sprawdź kiedy przypadają niedziele handlowe w ${year} roku. Zaplanuj zakupy w najbliższą niedzielę oraz poznaj pełen kalendarz niedziel handlowych.`;
  const description = `Aktualny kalendarz niedziel handlowych w Polsce w ${year} roku. Sprawdź terminy i zaplanuj zakupy.`;

  return {
    title,
    description: longDescription,
    keywords: [
      "niedziele handlowe",
      `niedziela handlowa ${year}`,
      "kalendarz niedziel",
      "zakupy w niedzielę",
      "wyjątki od zakazu handlu",
      "sklepy otwarte w niedzielę handlową",
    ],
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  const nextNiedzielaHandlowaDate = getNextNiedzielaHandlowa();
  const year =
    nextNiedzielaHandlowaDate?.getFullYear() || new Date().getFullYear();
  const niedzieleHandloweInYear = getNiedzieleHandloweInYear(year);

  return (
    <article className="mx-auto min-h-dvh max-w-2xl p-4">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Niedziele handlowe w {year} roku
      </h1>
      <p className="mb-4">
        W Polsce obowiązują przepisy ograniczające handel w większość niedziel,
        jednak niedziele handlowe w {year} roku pozwalają zrobić zakupy w tym
        dniu. Sprawdź, kiedy są niedziele handlowe w {year} roku i zaplanuj
        swoje zakupy.
      </p>

      {nextNiedzielaHandlowaDate && (
        <div className="mb-8 text-center text-2xl font-semibold">
          <h2 className="mb-2">Najbliższa niedziela handlowa:</h2>
          <p>{formatDate(nextNiedzielaHandlowaDate)}</p>
        </div>
      )}

      <section className="mb-8">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Kalendarz niedziel handlowych w {year} roku
        </h2>
        <ul className="list-inside list-disc">
          {niedzieleHandloweInYear.map((d) => (
            <li key={d.getTime()}>{formatDate(d)}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Co to są niedziele handlowe?
        </h2>
        <p className="mb-2">
          Niedziele handlowe to specjalne dni, w których centra handlowe i
          większość sklepów mogą być otwarte pomimo zakazu handlu obowiązującego
          w inne niedziele. W {year} roku sklepy otwarte będą{" "}
          {niedzieleHandloweInYear.length} razy, głównie przed świętami oraz na
          koniec i początek sezonów.
        </p>
        <p>
          Warto wiedzieć, jakie są wyjątki od zakazu handlu w niedziele oraz
          jakie sklepy są otwarte w niedzielę handlową.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Jakie sklepy są otwarte w niedzielę handlową?
        </h2>
        <p className="mb-2">
          W niedziele handlowe otwarte mogą być sklepy wielkopowierzchniowe,
          galerie handlowe, ale też stacje paliw, piekarnie czy kioski, które są
          wyłączone z zakazu handlu. To ważna informacja dla wszystkich, którzy
          planują zakupy w niedzielę.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Planuj zakupy na niedziele handlowe
        </h2>
        <p className="mb-2">
          Planując większe zakupy, warto wykorzystać kalendarz niedziel
          handlowych i korzystać z promocji dostępnych w tych dniach. Przed
          świętami Bożego Narodzenia w {year} roku jest aż trzy niedziele
          handlowe, co ułatwia zaplanowanie zakupów na czas.
        </p>
      </section>
    </article>
  );
}
