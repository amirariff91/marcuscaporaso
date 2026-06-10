import Link from "next/link";

const navLinks = [
  { href: "/osw", label: "Audit" },
  { href: "/osw/sitemap", label: "Sitemap" },
  { href: "/osw/wireframes", label: "Wireframes" },
];

export default function OswLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071112]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-1 px-5 py-3 md:px-8">
          <span className="mr-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            OSW
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-auto">
            <Link
              href="/osw/content"
              className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-400/20"
            >
              Content pages
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
