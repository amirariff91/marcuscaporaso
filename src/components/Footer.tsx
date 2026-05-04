export default function Footer() {
  const growthosUrl =
    process.env.NEXT_PUBLIC_GROWTHOS_URL ?? "https://growthops.cepathosting.com";

  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="text-sm text-muted-2">
          Marcus Caporaso — Fractional Growth Partner
        </div>
        <nav className="flex flex-wrap gap-6 text-xs text-muted-2">
          <a href="#methodology" className="hover:text-muted transition-colors duration-200">
            Process
          </a>
          <a href="#services" className="hover:text-muted transition-colors duration-200">
            Services
          </a>
          <a
            href={growthosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted transition-colors duration-200"
          >
            GrowthOS
          </a>
          <a href="#booking" className="hover:text-muted transition-colors duration-200">
            Book a Call
          </a>
        </nav>
      </div>
    </footer>
  );
}
