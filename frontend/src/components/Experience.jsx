import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2>Experience</h2>

        <div className="grid">
          {portfolioData.experience.map((e) => (
            <div className="card" key={e.role}>
              <h3>{e.role}</h3>
              <div className="small">
                {e.company} • {e.location} • {e.time}
              </div>

              <ul style={{ paddingLeft: 18, marginTop: 12, color: "var(--muted)", lineHeight: 1.7 }}>
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
