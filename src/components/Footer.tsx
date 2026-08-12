import { DIAGNOSTIC_URL, NAV_LINKS } from "@/lib/site";
import CurrentYear from "@/components/CurrentYear";

/** `baseHref`: see Nav — absolutises the GrowthOS links on client subdomains. */
export default function Footer({ baseHref = "" }: { baseHref?: string }) {
  return (
    <footer className="border-t border-border-subtle py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2" style={{ fontFamily: "var(--font-barlow)" }}>
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-cta" aria-hidden />
          <span className="text-sm font-bold tracking-tight text-fg">GrowthOS</span>
          <span className="text-sm text-muted-2 ml-1">
            — fix what happens after the enquiry
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 text-xs text-muted-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`${baseHref}${link.href}`}
              className="hover:text-muted transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DIAGNOSTIC_URL}
            className="hover:text-fg text-muted transition-colors duration-200 font-medium"
          >
            Run the Diagnostic
          </a>
        </nav>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-8 pt-6 border-t border-border-subtle">
        <p className="text-xs text-muted-2">
          © <CurrentYear fallback={2026} /> GrowthOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
