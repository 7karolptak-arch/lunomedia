import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import lunoLogoUrl from "@/assets/luno-logo-v2.png";
import ownerPhotoUrl from "@/assets/zdjecie-wlasciciel.jpeg?url";

const lunoLogo = { url: lunoLogoUrl };

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Luno Media" },
      { name: "description", content: "Poznaj zespół Luno Media. Budujemy przewidywalne systemy pozyskiwania klientów dla firm usługowych i B2B." },
      { property: "og:title", content: "O nas — Luno Media" },
      { property: "og:description", content: "Poznaj zespół Luno Media. Budujemy przewidywalne systemy pozyskiwania klientów dla firm usługowych i B2B." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "O nas — Luno Media" },
      { name: "twitter:description", content: "Poznaj zespół Luno Media. Budujemy przewidywalne systemy pozyskiwania klientów dla firm usługowych i B2B." },
    ],
  }),
  component: AboutPage,
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

function AboutPage() {
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
      <Mission />
      <Owner />
      <CTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-border">
      <div className="container-tight py-16 md:py-24 reveal">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">O nas</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">
            Jeden zespół, jeden cel: więcej klientów
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Luno Media to zespół marketerów i specjalistów od sprzedaży, którzy nie sprzedają
            „obecności w internecie”. Budujemy systemy pozyskiwania klientów: reklamy pod realny
            proces zakupowy, kwalifikację zapytań i umówione rozmowy w kalendarzu.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative border-b border-border bg-surface/50">
      <div className="container-tight py-20 md:py-24 reveal">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Dlaczego robimy to inaczej
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-foreground/90">
            <p>
              Większość agencji sprzedaje pakiety działań: posty, grafiki, „kompleksową obsługę”.
              My zaczynamy od końca — od tego, ile rozmów sprzedażowych ma trafić do Twojego kalendarza.
            </p>
            <p className="text-muted-foreground">
              Zanim uruchomimy reklamy, rozkładamy Twój proces sprzedaży na czynniki pierwsze:
              kto realnie kupuje, co decyduje o wyborze i co odróżnia gotowego klienta od osoby,
              która „tylko pyta o cenę”.
            </p>
            <p className="text-muted-foreground">
              Nasz system łączy precyzyjne kampanie reklamowe z rygorystyczną kwalifikacją leadów.
              Efekt? Do Twojego kalendarza trafiają wyłącznie osoby realnie zainteresowane
              współpracą — oszczędzasz czas i podnosisz konwersję z rozmów na podpisane umowy.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {[
            ["Konkret", "Rozliczamy się z umówionych rozmów i sprzedaży, nie z zasięgów."],
            ["Kwalifikacja", "Każdy lead przechodzi przez nasz proces — odrzucamy turystów."],
            ["Przewidywalność", "System daje stabilny napływ klientów, nie jednorazowy wysyp."],
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

function Owner() {
  return (
    <section className="relative border-b border-border">
      <div className="container-tight py-20 md:py-24 reveal">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div
              className="aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 rounded-2xl border border-border bg-surface-elevated overflow-hidden"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            >
              <img
                src={ownerPhotoUrl}
                alt="Karol — właściciel Luno Media"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-widest text-primary">O właścicielu</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Karol</h2>
            <p className="mt-2 text-muted-foreground">Założyciel & Strateg ds. pozyskiwania klientów</p>
            <div className="mt-6 space-y-4 text-foreground/90">
              <p>
                Założyłem Luno Media z prostego założenia: firmy potrzebują przewidywalnego systemu
                pozyskiwania klientów, a nie kolejnej agencji, która obiecuje „wirale” i „zasięgi”.
              </p>
              <p>
                Przez lata pracy z firmami usługowymi zrozumiałem, że kluczem nie są tanie leady,
                tylko dobrze zakwalifikowane rozmowy z osobami, które realnie planują zakup.
              </p>
              <p className="text-muted-foreground">
                Dlatego zbudowaliśmy proces end-to-end: od precyzyjnej reklamy, przez wypełnienie
                formularza, aż po umówione spotkanie w Twoim kalendarzu. Resztą zajmujesz się Ty —
                robienie tego, w czym jesteś najlepszy.
              </p>
            </div>
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
      <div className="container-tight relative py-24 md:py-32 reveal">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary">Następny krok</div>
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
          <Link to="/polityka-prywatnosci" className="hover:text-foreground transition-colors normal-case tracking-normal">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
