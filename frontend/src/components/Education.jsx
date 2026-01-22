import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2>Education</h2>

        <div className="grid grid-2">
          {portfolioData.education.map((ed) => (
            <div className="card" key={ed.degree}>
              <h3>{ed.degree}</h3>
              <div className="small">{ed.institute}</div>
              <div className="small">{ed.time}</div>
              <div className="badge" style={{ marginTop: 10 }}>{ed.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
