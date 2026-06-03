import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <p className="eyebrow">EDGAR MARTÍNEZ</p>

          <h1>
            Frontend Developer <br />
            UX/UI Designer
          </h1>

          <p className="hero-text">
            Creo experiencias digitales donde el diseño, la tecnología y la
            estrategia se unen para construir productos funcionales.
          </p>

          <div className="hero-buttons">
            <a href="#projects">Ver proyectos</a>
            <a href="#contact" className="secondary">
              Contacto
            </a>
          </div>
        </section>

        <Projects />
        <Skills />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;