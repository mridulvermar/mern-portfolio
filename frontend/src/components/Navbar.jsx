export default function Navbar() {
  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Education", "education"],
    ["Certifications", "certifications"],
    ["Contact", "contact"]
  ];

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div style={{ fontWeight: 700 }}>Mridul.dev</div>

        <nav className="nav-links">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
