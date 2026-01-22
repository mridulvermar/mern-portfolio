import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="subtitle">Some of my best work built using MERN + AI + DevOps concepts.</p>

        <div className="grid grid-3">
          {portfolioData.projects.map((p) => (
            <div className="card" key={p.name}>
              <h3 style={{ marginBottom: 6 }}>{p.name}</h3>
              <div className="small" style={{ marginBottom: 12 }}>{p.time}</div>

              <ul style={{ paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {p.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
