import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2>About</h2>
        <p className="subtitle">{portfolioData.summary}</p>
      </div>
    </section>
  );
}
