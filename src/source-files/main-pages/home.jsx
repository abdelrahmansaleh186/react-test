import Nav from "../useable-componants/nav";
import "../styles/header.css";
import Footer from "../useable-componants/footer";
export default function Home({ username }) {
   return (
    <>
      <Nav/>
      <section className="hero">
        <h1>Modern Web Templates</h1>
        <p>Fast, responsive websites built with Vite & React.</p>
        <button>Get {username} Started</button>
      </section>

      <section className="features">
        <div>⚡ Fast</div>
        <div>🎨 Modern</div>
        <div>📱 Responsive</div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer creating clean and modern UI experiences.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <p>Coming soon…</p>
      </section>
      <Footer/>
    </>
  );
}
