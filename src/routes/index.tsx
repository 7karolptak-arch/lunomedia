import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import lunoLogo from "@/assets/luno-logo-v2.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Nav />
      <Video />
      <Problem />
      <WhyFails />
      <Process />
      <ForWhom />
      <Faq />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-tight flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={lunoLogo.url} alt="Luno" className="h-7 md:h-8 w-auto" />
        </a>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#video"
            className="hidden md:inline-flex border border-border bg-surface-elevated px-4 py-2 text-xs font-medium uppercase tracking-wider hover:bg-surface transition-colors"
          >
            Obejrzyj wideo
          </a>
          <a
            href="#video"
            aria-label="Obejrzyj wideo"
            className="md:hidden size-10 border border-border bg-surface-elevated flex items-center justify-center hover:bg-surface transition-colors"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-foreground translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
          <a
            href="#cta"
            className="hidden md:inline-flex bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary-glow transition-colors"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Umów rozmowę
          </a>
          <a
            href="#cta"
            aria-label="Umów rozmowę"
            className="md:hidden size-10 bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-primary-foreground">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container-tight relative pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="size-1.5 bg-primary" />
          Dla branży projektowej
        </div>

        <h1 className="mt-5 max-w-4xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
          Pomagamy projektantom budować{" "}
          <span className="text-primary">przewidywalny napływ</span> nowych projektów — bez zgadywania, skąd przyjdzie kolejny klient.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          System pozyskiwania klientów dla architektów i projektantów wnętrz, którzy chcą rosnąć stabilnie
          — bez przepalania budżetu na reklamy, które nic nie dają.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#cta"
            className="bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Umów spotkanie →
          </a>
          <a href="#video" className="px-6 py-3.5 text-sm font-medium border border-border hover:bg-surface-elevated transition-colors">
            Obejrzyj wideo (17 min)
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Leady przychodzą falami — raz za dużo pracy, raz pustka w kalendarzu.",
    "Polecenia są nieprzewidywalne i nie da się na nich planować rozwoju.",
    "Social media generują lajki, ale nie generują projektów.",
    "Reklamy przepalają budżet, bo nikt nie kwalifikuje napływających zapytań.",
  ];
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="container-tight py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-primary">01 — Problem</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Brzmi znajomo?
            </h2>
          </div>
          <ul className="md:col-span-8 space-y-px bg-border border border-border">
            {items.map((t) => (
              <li key={t} className="bg-background p-6 flex gap-4">
                <span className="text-primary font-mono text-sm shrink-0 pt-0.5">→</span>
                <p className="text-base md:text-lg text-foreground/90">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Video() {
  return (
    <section id="video" className="relative border-t border-border">
      <div className="container-tight py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-primary">02 — Obejrzyj zanim porozmawiamy</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            17 minut, które oszczędzą Ci godzin rozmów z agencjami
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pokażę Ci jak realnie wygląda pozyskiwanie klientów w branży projektowej,
            dlaczego większość działań nie działa i jak wygląda nasz proces krok po kroku.
          </p>
        </div>

        <div
          className="relative mt-12 aspect-video w-full border border-border bg-surface-elevated overflow-hidden group cursor-pointer"
          style={{ boxShadow: "var(--shadow-elevated), var(--shadow-glow)" }}
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <button
              aria-label="Odtwórz wideo"
              className="size-20 md:size-24 bg-primary flex items-center justify-center group-hover:scale-105 transition-transform"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <svg viewBox="0 0 24 24" className="size-8 md:size-10 fill-primary-foreground translate-x-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="text-center">
              <div className="text-sm font-medium">Jak pozyskujemy klientów dla architektów i projektantów wnętrz</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">17:24 · Pełny proces</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            ["Jak działa rynek", "Mechanika pozyskiwania klientów w branży projektowej."],
            ["Nasz proces", "Krok po kroku — od reklamy do umówionego spotkania."],
            ["Dla kogo to działa", "Konkretne kryteria, kto powinien (i nie powinien) z nami pracować."],
          ].map(([h, d]) => (
            <div key={h} className="bg-background p-6">
              <div className="text-sm font-semibold">{h}</div>
              <div className="mt-2 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFails() {
  const items = [
    {
      h: "Agencje nie rozumieją procesu sprzedaży projektanta",
      d: "Sprzedaż projektu trwa tygodniami i ma zupełnie inną dynamikę niż e-commerce. Generyczne agencje tego nie ogarniają.",
    },
    {
      h: "Skupiają się na ruchu, nie na projektach",
      d: "Raportują kliknięcia i odsłony — Ciebie interesują podpisane umowy. To dwie zupełnie różne rozmowy.",
    },
    {
      h: "Generują tanie leady, ale nie klientów",
      d: "Niski koszt leada nic nie znaczy, jeśli 9 na 10 zapytań to ktoś szukający „rysunku za 500 zł”.",
    },
    {
      h: "Nie kwalifikują zapytań",
      d: "Przekazują wszystko jak leci, marnując Twój najcenniejszy zasób — czas na rozmowy z niewłaściwymi osobami.",
    },
  ];
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="container-tight py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">03 — Dlaczego większość marketingu nie działa</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Większość projektantów już próbowała marketingu. I większość się sparzyła.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border">
          {items.map((it, i) => (
            <div key={it.h} className="bg-background p-8">
              <div className="text-xs font-mono text-primary">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold">{it.h}</h3>
              <p className="mt-3 text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", h: "Reklama trafia do właściwej osoby", d: "Targetujemy konkretne profile — osoby planujące budowę, przebudowę lub aranżację wnętrz w Twoim regionie." },
    { n: "02", h: "Wypełnia formularz", d: "Zbieramy kluczowe informacje: lokalizacja, etap projektu, budżet, ramy czasowe." },
    { n: "03", h: "Lead jest kwalifikowany", d: "Każde zapytanie przechodzi przez nasz proces kwalifikacji — odrzucamy „turystów” i nierealne projekty." },
    { n: "04", h: "Rozmawiasz tylko z gotowymi", d: "W Twoim kalendarzu lądują wyłącznie osoby realnie zainteresowane współpracą." },
  ];
  return (
    <section className="relative border-t border-border">
      <div className="container-tight py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">04 — Proces</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Jak to wygląda krok po kroku
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bez ściemy, bez „kompleksowych usług marketingowych”. Jeden konkretny system, który prowadzi
            klienta od reklamy do rozmowy z Tobą.
          </p>
        </div>

        <ol className="mt-14 relative">
          <div className="absolute left-[27px] md:left-[31px] top-2 bottom-2 w-px bg-border" />
          {steps.map((s) => (
            <li key={s.n} className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-10 last:pb-0">
              <div className="size-14 md:size-16 bg-surface-elevated border border-border flex items-center justify-center font-mono text-sm text-primary relative z-10">
                {s.n}
              </div>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-semibold">{s.h}</h3>
                <p className="mt-2 text-muted-foreground max-w-xl">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ForWhom() {
  const yes = [
    "Znasz się na branży i masz za sobą sporo zrealizowanych projektów",
    "Chcesz skalować, a nie tylko „dorobić”",
    "Wiesz, że jesteście w stanie przyjąć więcej projektów — ale ciężko znaleźć właściwych klientów",
    "Macie budżet na marketing minimum 3–6 miesięcy",
  ];
  const no = [
    "Brak budżetu na konsekwentne działania",
    "Brak gotowości na proces sprzedażowy",
  ];
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="container-tight py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">05 — Kogo szukamy</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Nie pracujemy z każdym
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Świadomie wybieramy z kim wchodzimy we współpracę. To uczciwe wobec nas i wobec Ciebie.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="size-8 bg-primary flex items-center justify-center text-primary-foreground font-bold">+</span>
              <h3 className="text-xl font-semibold">Idealny klient</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {yes.map((t) => (
                <li key={t} className="flex gap-3 text-foreground/90">
                  <span className="text-primary font-mono">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="size-8 border border-border flex items-center justify-center text-muted-foreground font-bold">−</span>
              <h3 className="text-xl font-semibold">Nie pracujemy z</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {no.map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <span className="font-mono">✕</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Czy reklamy faktycznie działają dla projektantów?",
      a: "Tak, ale pod warunkiem, że są ustawione pod realny proces sprzedaży w branży projektowej — nie pod e-commerce. Generyczne podejście prawie zawsze kończy się przepalonym budżetem.",
    },
    {
      q: "Skąd będą pochodzić leady?",
      a: "Z płatnych kampanii kierowanych do osób planujących budowę, przebudowę lub aranżację wnętrz w Twoim regionie. Każdy lead przechodzi przez naszą kwalifikację, zanim trafi do Ciebie.",
    },
    {
      q: "Ile trwa zobaczenie pierwszych efektów?",
      a: "Pierwsze zakwalifikowane zapytania zwykle pojawiają się w ciągu 2–4 tygodni od startu. Stabilny, przewidywalny napływ projektów to perspektywa 2–3 miesięcy.",
    },
    {
      q: "Czy muszę nagrywać filmy i być aktywny w social media?",
      a: "Nie. Cały system działa bez Twojej osobistej obecności w sieci. Twoim zadaniem jest robić to, co najlepiej — projektować — i odbierać zaplanowane spotkania.",
    },
    {
      q: "Co jeśli mam już klientów z poleceń?",
      a: "Idealnie. Polecenia są świetne, ale niestabilne. Nasz system działa równolegle — daje Ci kontrolę nad tym, ile projektów wpada w przyszłym kwartale, niezależnie od tego, kto Cię akurat poleci.",
    },
    {
      q: "Ile czasu zajmie mi obsługa systemu po Twojej stronie?",
      a: "Realnie 2–3 godziny tygodniowo na rozmowy z zakwalifikowanymi leadami. Resztę — reklamy, kwalifikację, śledzenie wyników — bierzemy na siebie.",
    },
  ];
  return (
    <section className="relative border-t border-border">
      <div className="container-tight py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-primary">06 — FAQ</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
              Pytania, które padają najczęściej
            </h2>
            <p className="mt-4 text-muted-foreground">
              Jeśli na coś nie odpowiedzieliśmy — zapytaj na spotkaniu.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border border-border">
              {items.map((it, i) => (
                <FaqItem key={it.q} {...it} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-surface transition-colors"
      >
        <span className="text-base md:text-lg font-medium">{q}</span>
        <span
          className={`size-7 shrink-0 border border-border flex items-center justify-center text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pr-16 text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="container-tight py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-widest text-primary">07 — O nas</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Specjalizacja zamiast szerokiej oferty
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-foreground/90">
            <p>
              Skupiamy się wyłącznie na branży projektowej, ponieważ każda branża ma inny
              proces sprzedaży i inne problemy. Nie da się być dobrym we wszystkim naraz.
            </p>
            <p className="text-muted-foreground">
              Dzięki temu zamiast uczyć się Twojego rynku na Twoim budżecie, od pierwszego dnia
              wiemy, jak rozmawiają inwestorzy, jak wyglądają realne zapytania i co odróżnia
              gotowego klienta od kogoś, kto „pyta o cenę”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="cta" className="relative border-t border-border">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="container-tight relative py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">08 — Następny krok</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">
            Umówmy 30-minutową rozmowę.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Pokażemy Ci, jak ten system mógłby wyglądać konkretnie u Ciebie.
            Jeśli to nie ma sensu — powiemy wprost.
          </p>
        </div>

        <div className="mt-10 border border-border bg-surface-elevated" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/karol-lunomedia/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=5c16f2"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <img src={lunoLogo.url} alt="Luno" className="h-5 w-auto" />
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div>Marketing dla branży projektowej</div>
      </div>
    </footer>
  );
}
