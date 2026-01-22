import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2>Achievements & Certifications</h2>

        <div className="grid grid-2">
          {portfolioData.certifications.map((c) => (
            <div className="card" key={c}>
              ✅ {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
