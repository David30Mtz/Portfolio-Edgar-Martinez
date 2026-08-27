import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <>
      <CursorGlow />

      <Navbar />

      <main>
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="hero-topline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <p className="eyebrow">EDGAR MARTÍNEZ</p>

            <span className="hero-role">
              WEB DEVELOPER · DIGITAL SOLUTIONS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
          >
            Diseño y desarrollo
            <br />
            <span>experiencias digitales.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <p className="hero-text">
              Construyo sitios y productos web donde diseño, código y estrategia
              trabajan juntos para resolver necesidades reales.
            </p>

            <div className="hero-actions">
              <div className="hero-buttons">
                <a href="#projects">
                  Explorar proyectos <span>↘</span>
                </a>

                <a href="#contact" className="secondary">
                  Hablemos
                </a>
              </div>

              <a
                href="/CV_EdgarMartinezVF.pdf"
                download
                className="cv-link"
              >
                Descargar CV <span>↗</span>
              </a>
            </div>
          </motion.div>
        </motion.section>

        <Projects />
        <Skills />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;