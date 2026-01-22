import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { name, title, summary, links } = portfolioData;

  return (
    <section className="hero">
      <div className="container">
        <div className="card">
          <h1>{name}</h1>
          <div className="badge" style={{ marginBottom: 12 }}>{title}</div>
          <p>{summary}</p>

          <div className="hero-actions">
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
              📄 Resume
            </a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
              🔗 LinkedIn
            </a>
            <a className="btn" href={links.leetcode} target="_blank" rel="noreferrer">
              🧠 LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
