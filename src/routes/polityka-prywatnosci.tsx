import { createFileRoute, Link } from "@tanstack/react-router";
import lunoLogoUrl from "@/assets/luno-logo-v2.png";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — Luno Media" },
      { name: "description", content: "Polityka prywatności Luno Media — zasady przetwarzania danych osobowych zgodnie z RODO." },
      { property: "og:title", content: "Polityka prywatności — Luno Media" },
      { property: "og:description", content: "Zasady przetwarzania danych osobowych w Luno Media." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/25 border-b border-border/40">
        <div className="container-tight flex items-center justify-between py-4 md:py-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={lunoLogoUrl} alt="Luno Media" className="h-7 md:h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-xs md:text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
          >
            ← Powrót
          </Link>
        </div>
      </header>

      <main className="container-tight py-16 md:py-24">
        <article className="prose-luno max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Dokument prawny
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Polityka prywatności
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <Section title="1. Informacje ogólne">
            <p>
              Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony danych osobowych
              osób korzystających ze strony internetowej <strong>lunomedia.pl</strong> (dalej: „Strona")
              oraz kontaktujących się z Luno Media w sprawie usług marketingowych dedykowanych branży
              projektowej (architekci, projektanci wnętrz, pracownie projektowe).
            </p>
            <p>
              Dokument został przygotowany zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
              z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO)
              oraz ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.
            </p>
          </Section>

          <Section title="2. Administrator danych osobowych">
            <p>
              Administratorem Twoich danych osobowych jest <strong>Luno Media</strong> — agencja
              marketingowa specjalizująca się w obsłudze branży projektowej (dalej: „Administrator"
              lub „Luno Media").
            </p>
            <p>
              W sprawach związanych z przetwarzaniem danych osobowych oraz realizacją praw przysługujących
              Ci na mocy RODO możesz skontaktować się z nami poprzez formularz kontaktowy dostępny
              na Stronie lub adres e-mail wskazany w sekcji kontaktowej.
            </p>
          </Section>

          <Section title="3. Zakres i cel przetwarzania danych">
            <p>Przetwarzamy dane osobowe w następujących celach:</p>
            <ul>
              <li>
                <strong>Kontakt i obsługa zapytań</strong> — imię, adres e-mail, numer telefonu,
                nazwa firmy oraz treść wiadomości przesłanej przez formularz lub Calendly
                (podstawa: art. 6 ust. 1 lit. b oraz f RODO — działania zmierzające do zawarcia umowy
                oraz prawnie uzasadniony interes Administratora).
              </li>
              <li>
                <strong>Realizacja usług marketingowych</strong> — dane kontaktowe, dane firmy,
                dane rozliczeniowe niezbędne do świadczenia usług oraz wystawienia dokumentów księgowych
                (podstawa: art. 6 ust. 1 lit. b i c RODO).
              </li>
              <li>
                <strong>Analityka i ulepszanie Strony</strong> — dane statystyczne dotyczące ruchu na
                Stronie, zachowań użytkowników, urządzeń i przeglądarek, gromadzone w sposób
                zanonimizowany (podstawa: art. 6 ust. 1 lit. f RODO).
              </li>
              <li>
                <strong>Marketing własnych usług</strong> — wysyłka informacji o ofercie Luno Media,
                wyłącznie po wyrażeniu zgody (podstawa: art. 6 ust. 1 lit. a RODO).
              </li>
            </ul>
          </Section>

          <Section title="4. Okres przechowywania danych">
            <p>
              Dane przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane:
            </p>
            <ul>
              <li>dane z zapytań kontaktowych — do 24 miesięcy od ostatniej korespondencji,</li>
              <li>dane klientów — przez okres trwania umowy oraz do 5 lat po jej zakończeniu (obowiązki podatkowe),</li>
              <li>dane przetwarzane na podstawie zgody — do momentu jej wycofania,</li>
              <li>dane analityczne — zgodnie z politykami narzędzi analitycznych (zwykle do 26 miesięcy).</li>
            </ul>
          </Section>

          <Section title="5. Odbiorcy danych">
            <p>Twoje dane mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul>
              <li>dostawcom usług IT, hostingu i poczty elektronicznej,</li>
              <li>dostawcom narzędzi marketingowych i analitycznych (m.in. Google, Meta, Calendly),</li>
              <li>biuru rachunkowemu oraz kancelariom prawnym — w zakresie niezbędnym do obsługi,</li>
              <li>uprawnionym organom państwowym — wyłącznie na podstawie obowiązujących przepisów.</li>
            </ul>
            <p>
              Część odbiorców może mieć siedzibę poza Europejskim Obszarem Gospodarczym. W takich
              przypadkach przekazanie danych odbywa się na podstawie standardowych klauzul umownych
              zatwierdzonych przez Komisję Europejską lub innych zgodnych z RODO mechanizmów transferu.
            </p>
          </Section>

          <Section title="6. Pliki cookies">
            <p>
              Strona wykorzystuje pliki cookies (ciasteczka) — niewielkie pliki tekstowe zapisywane
              w Twoim urządzeniu. Wykorzystujemy:
            </p>
            <ul>
              <li><strong>cookies niezbędne</strong> — zapewniają poprawne działanie Strony,</li>
              <li><strong>cookies analityczne</strong> — pozwalają zrozumieć, jak użytkownicy korzystają ze Strony,</li>
              <li><strong>cookies marketingowe</strong> — wykorzystywane do prowadzenia kampanii reklamowych (m.in. Meta Pixel, Google Ads).</li>
            </ul>
            <p>
              Możesz w dowolnym momencie zmienić ustawienia cookies w swojej przeglądarce.
              Wyłączenie cookies może wpłynąć na funkcjonalność Strony.
            </p>
          </Section>

          <Section title="7. Twoje prawa">
            <p>W związku z przetwarzaniem danych przysługuje Ci prawo do:</p>
            <ul>
              <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
              <li>sprostowania (poprawiania) danych,</li>
              <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem),</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
            </ul>
          </Section>

          <Section title="8. Bezpieczeństwo danych">
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające ochronę
              przetwarzanych danych osobowych — m.in. szyfrowanie połączeń (SSL/TLS), kontrolę
              dostępu, regularne kopie zapasowe oraz weryfikację dostawców pod kątem zgodności z RODO.
            </p>
          </Section>

          <Section title="9. Dobrowolność podania danych">
            <p>
              Podanie danych osobowych jest dobrowolne, jednak niezbędne do skorzystania z formularza
              kontaktowego, umówienia konsultacji lub zawarcia umowy o świadczenie usług marketingowych.
              Niepodanie danych uniemożliwi realizację tych celów.
            </p>
          </Section>

          <Section title="10. Zmiany Polityki prywatności">
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce prywatności.
              Aktualna wersja zawsze będzie dostępna pod tym adresem, wraz z datą ostatniej aktualizacji.
              W przypadku istotnych zmian poinformujemy o tym użytkowników, których dotyczą.
            </p>
          </Section>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-foreground [&_a]:underline">
        {children}
      </div>
    </section>
  );
}
