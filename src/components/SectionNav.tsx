const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "likes", label: "Things I Like" },
  { id: "now", label: "Now" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  return (
    <>
      <nav
        aria-label="Section navigation"
        className="sticky top-0 z-10 border-b border-black/5 bg-stone-50/85 backdrop-blur lg:hidden"
      >
        <ul className="mx-auto flex max-w-3xl gap-4 overflow-x-auto px-6 py-3 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="whitespace-nowrap transition-colors hover:text-ink focus-visible:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        aria-label="Section navigation"
        className="fixed left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <ul className="space-y-3 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="transition-colors hover:text-ink focus-visible:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
