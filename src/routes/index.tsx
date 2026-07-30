import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import lunoLogoUrl from "@/assets/luno-logo-v2.png";
const lunoLogo = { url: lunoLogoUrl };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luno Media — przewidywalny napływ klientów z reklam" },
      {
        name: "description",
        content:
          "Budujemy systemy pozyskiwania klientów: reklamy, kwalifikacja zapytań i umówione rozmowy w Twoim kalendarzu. Bez zgadywania, skąd przyjdzie kolejny klient.",
      },
      { property: "og:title", content: "Luno Media — przewidywalny napływ klientów z reklam" },
      {
        property: "og:description",
        content:
          "Reklamy, kwalifikacja zapytań i umówione rozmowy w Twoim kalendarzu — jeden system zamiast przypadkowych działań marketingowych.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Luno Media — przewidywalny napływ klientów z reklam" },
      {
        name: "twitter:description",
        content:
          "Reklamy, kwalifikacja zapytań i umówione rozmowy w Twoim kalendarzu — jeden system zamiast przypadkowych działań marketingowych.",
      },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, as: As = "div", className = "" }: { children: ReactNode; delay?: number; as?: any; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <As ref={ref as any} className={`reveal ${className}`}>{children}</As>;
}

function Index() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <main className="relative min-h-screen overflow-hidden pt-[73px] md:pt-[97px]">
      <Hero />
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

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, color-mix(in oklab, var(--primary) 38%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container-tight relative py-16 md:py-28">
        <div className="reveal max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-elevated/80 px-3 py-1.5 text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Agencja marketingowa nastawiona na wynik
          </div>

          <h1 className="mt-6 text-[2.1rem] leading-[1.08] font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            Przewidywalny napływ klientów.{" "}
            <span className="text-primary">Bez zgadywania</span>, skąd przyjdzie kolejne zlecenie.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Budujemy jeden konkretny system: reklamy trafiające do właściwych osób, kwalifikacja
            każdego zapytania i umówione rozmowy prosto w Twoim kalendarzu. Ty rozmawiasz tylko z
            tymi, którzy realnie chcą kupić.
          </p>

          <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-glow"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Umów 30-min rozmowę
            </a>
            <a
              href="#proces"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-surface"
            >
              Zobacz, jak działamy
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
            Bez zobowiązań · Konkretna diagnoza zamiast prezentacji sprzedażowej
          </p>
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            ["Reklamy pod sprzedaż", "Kampanie budowane pod realny proces zakupowy, nie pod zasięgi."],
            ["Kwalifikacja zapytań", "Odsiewamy ciekawskich, zanim zajmą Ci godzinę w kalendarzu."],
            ["Rozmowy, nie kliknięcia", "Rozliczamy się z umówionych spotkań i podpisanych umów."],
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

function Problem() {
  const items = [
    "Leady przychodzą falami — raz za dużo pracy, raz pustka w kalendarzu.",
    "Polecenia są nieprzewidywalne i nie da się na nich planować rozwoju.",
    "Social media generują lajki, ale nie generują zleceń.",
    "Reklamy przepalają budżet, bo nikt nie kwalifikuje napływających zapytań.",
  ];
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="container-tight py-20 md:py-24 reveal">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-primary">01 — Problem</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Brzmi znajomo?
            </h2>
          </div>
          <ul className="md:col-span-8 space-y-px bg-border border border-border rounded-xl overflow-hidden">
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

function WhyFails() {
  const items = [
    {
      h: "Agencje nie rozumieją Twojego procesu sprzedaży",
      d: "Sprzedaż usługi o wyższej wartości trwa tygodniami i ma inną dynamikę niż e-commerce. Generyczne agencje tego nie ogarniają.",
    },
    {
      h: "Skupiają się na ruchu, nie na sprzedaży",
      d: "Raportują kliknięcia i odsłony — Ciebie interesują podpisane umowy. To dwie zupełnie różne rozmowy.",
    },
    {
      h: "Generują tanie leady, ale nie klientów",
      d: "Niski koszt leada nic nie znaczy, jeśli 9 na 10 zapytań to ktoś, kto szuka najtańszej opcji i nie ma budżetu.",
    },
    {
      h: "Nie kwalifikują zapytań",
      d: "Przekazują wszystko jak leci, marnując Twój najcenniejszy zasób — czas na rozmowy z niewłaściwymi osobami.",
    },
  ];
  return (
    <section className="relative border-t border-border">
      <div className="container-tight py-20 md:py-24 reveal">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">02 — Dlaczego większość marketingu nie działa</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Większość firm już próbowała marketingu. I większość się sparzyła.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
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
    { n: "01", h: "Reklama trafia do właściwej osoby", d: "Targetujemy konkretne profile klientów, którzy realnie potrzebują Twojej usługi — w Twoim regionie lub na Twoim rynku." },
    { n: "02", h: "Wypełnia formularz", d: "Zbieramy kluczowe informacje: potrzeba, etap decyzji, budżet, ramy czasowe." },
    { n: "03", h: "Lead jest kwalifikowany", d: "Każde zapytanie przechodzi przez nasz proces kwalifikacji — odrzucamy „turystów” i nierealne zlecenia." },
    { n: "04", h: "Rozmawiasz tylko z gotowymi", d: "W Twoim kalendarzu lądują wyłącznie osoby realnie zainteresowane współpracą." },
  ];
  return (
    <section id="proces" className="relative border-t border-border bg-surface/50 scroll-mt-24">
      <div className="container-tight py-20 md:py-28 reveal">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">03 — Proces</div>
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
              <div className="size-14 md:size-16 rounded-xl bg-surface-elevated border border-border flex items-center justify-center font-mono text-sm text-primary relative z-10">
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
    "Znasz się na swojej branży i masz za sobą sporo zrealizowanych zleceń",
    "Chcesz skalować, a nie tylko „dorobić”",
    "Wiesz, że jesteście w stanie obsłużyć więcej klientów — ale ciężko znaleźć tych właściwych",
    "Macie budżet na marketing minimum 3–6 miesięcy",
  ];
  const no = [
    "Brak budżetu na konsekwentne działania",
    "Brak gotowości na proces sprzedażowy",
  ];
  return (
    <section className="relative border-t border-border">
      <div className="container-tight py-20 md:py-24 reveal">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">04 — Kogo szukamy</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Nie pracujemy z każdym
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Świadomie wybieramy z kim wchodzimy we współpracę. To uczciwe wobec nas i wobec Ciebie.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          <div className="bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">+</span>
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
              <span className="size-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground font-bold">−</span>
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
      q: "Czy reklamy faktycznie działają w mojej branży?",
      a: "Tak, ale pod warunkiem, że są ustawione pod Twój realny proces sprzedaży — nie skopiowane z e-commerce. Generyczne podejście prawie zawsze kończy się przepalonym budżetem.",
    },
    {
      q: "Skąd będą pochodzić leady?",
      a: "Z płatnych kampanii kierowanych do osób, które realnie potrzebują Twojej usługi. Każdy lead przechodzi przez naszą kwalifikację, zanim trafi do Ciebie.",
    },
    {
      q: "Ile trwa zobaczenie pierwszych efektów?",
      a: "Pierwsze zakwalifikowane zapytania zwykle pojawiają się w ciągu 2–4 tygodni od startu. Stabilny, przewidywalny napływ klientów to perspektywa 2–3 miesięcy.",
    },
    {
      q: "Czy muszę nagrywać filmy i być aktywny w social media?",
      a: "Nie. Cały system działa bez Twojej osobistej obecności w sieci. Twoim zadaniem jest robić to, co najlepiej — i odbierać zaplanowane spotkania.",
    },
    {
      q: "Co jeśli mam już klientów z poleceń?",
      a: "Idealnie. Polecenia są świetne, ale niestabilne. Nasz system działa równolegle — daje Ci kontrolę nad tym, ile zleceń wpada w przyszłym kwartale, niezależnie od tego, kto Cię akurat poleci.",
    },
    {
      q: "Ile czasu zajmie mi obsługa systemu po Twojej stronie?",
      a: "Realnie 2–3 godziny tygodniowo na rozmowy z zakwalifikowanymi leadami. Resztę — reklamy, kwalifikację, śledzenie wyników — bierzemy na siebie.",
    },
  ];
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="container-tight py-20 md:py-28 reveal">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-primary">05 — FAQ</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
              Pytania, które padają najczęściej
            </h2>
            <p className="mt-4 text-muted-foreground">
              Jeśli na coś nie odpowiedzieliśmy — zapytaj na spotkaniu.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border border-border rounded-xl overflow-hidden bg-background">
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
          className={`size-7 shrink-0 rounded-md border border-border flex items-center justify-center text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pr-16 text-muted-foreground animate-fade-in">
          {a}
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <section className="relative border-t border-border">
      <div className="container-tight py-20 md:py-24 reveal">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-widest text-primary">06 — O nas</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Konkret zamiast obietnic
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-foreground/90">
            <p>
              Nie sprzedajemy „obecności w internecie”. Budujemy system, który ma jedno zadanie:
              dostarczać Ci rozmowy z ludźmi gotowymi kupić.
            </p>
            <p className="text-muted-foreground">
              Zaczynamy od zrozumienia Twojego procesu sprzedaży, dopiero potem włączamy reklamy.
              Dzięki temu nie płacisz za naukę Twojego rynku — płacisz za wyniki, które da się policzyć.
            </p>
            <p>
              <Link to="/o-nas" className="text-primary hover:underline">
                Poznaj nas bliżej →
              </Link>
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
    <section id="cta" className="relative border-t border-border scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="container-tight relative py-24 md:py-32 reveal">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">07 — Następny krok</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">
            Umówmy 30-minutową rozmowę.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Pokażemy Ci, jak ten system mógłby wyglądać konkretnie u Ciebie.
            Jeśli to nie ma sensu — powiemy wprost.
          </p>
        </div>

        <div className="mt-10 border border-border bg-surface-elevated rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/karol-lunomedia/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0f&text_color=ededf0&primary_color=7c3aed"
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
        <div className="flex items-center gap-6">
          <span>Marketing nastawiony na wynik</span>
          <a href="/polityka-prywatnosci" className="hover:text-foreground transition-colors normal-case tracking-normal">
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  );
}
