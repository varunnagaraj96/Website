import Link from "next/link";

const COLUMNS = [
  {
    title: "Solutions",
    links: [
      "Information Security",
      "Cloud & Infrastructure",
      "Managed Services",
      "Data Management",
    ],
  },
  {
    title: "Company",
    links: ["About", "Approach", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Insights", "Case studies", "Partners", "Trust center"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link
              href="#top"
              className="flex w-fit items-center gap-2 font-display text-sm font-semibold tracking-tight"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-signal to-signal-2 text-[11px] font-bold text-void">
                T
              </span>
              Teksalah
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Independent technology advisors delivering security, cloud and
              managed services across the Middle East since 2007.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-2 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Teksalah LLC. Dubai, UAE.</p>
          <p>Placeholder concept build — not affiliated with production teksalah.com content.</p>
        </div>
      </div>
    </footer>
  );
}
