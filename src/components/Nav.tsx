import { Link, useRouterState } from "@tanstack/react-router";
import lunoLogoUrl from "@/assets/luno-logo-v2.png";
const lunoLogo = { url: lunoLogoUrl };

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/25 backdrop-blur-xl">
      <div className="container-tight flex items-center justify-between py-4 md:py-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={lunoLogo.url} alt="Luno" className="h-10 md:h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/o-nas"
            className="hidden md:inline-flex rounded-lg border border-border bg-surface-elevated px-4 py-2 text-xs font-medium uppercase tracking-wider hover:bg-surface transition-colors"
          >
            O nas
          </Link>
          <Link
            to={isHome ? "/#proces" : "/#proces"}
            className="hidden md:inline-flex rounded-lg border border-border bg-surface-elevated px-4 py-2 text-xs font-medium uppercase tracking-wider hover:bg-surface transition-colors"
          >
            Proces
          </Link>
          <Link
            to={isHome ? "/#cta" : "/#cta"}
            className="hidden md:inline-flex rounded-lg bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary-glow transition-colors"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Umów rozmowę
          </Link>

          {/* Mobile icons */}
          <Link
            to="/o-nas"
            aria-label="O nas"
            className="md:hidden size-10 rounded-lg border border-border bg-surface-elevated flex items-center justify-center hover:bg-surface transition-colors"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-foreground">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </Link>
          <Link
            to={isHome ? "/#proces" : "/#proces"}
            aria-label="Proces"
            className="md:hidden size-10 rounded-lg border border-border bg-surface-elevated flex items-center justify-center hover:bg-surface transition-colors"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-foreground">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
            </svg>
          </Link>
          <Link
            to={isHome ? "/#cta" : "/#cta"}
            aria-label="Umów rozmowę"
            className="md:hidden size-10 rounded-lg bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-primary-foreground">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
