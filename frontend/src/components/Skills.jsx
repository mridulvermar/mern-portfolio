import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>

        <div className="grid grid-2">
          {Object.keys(skills).map((group) => (
            <div className="card" key={group}>
              <h3 style={{ marginBottom: 10 }}>{group}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {skills[group].map((s) => (
                  <span className="badge" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
