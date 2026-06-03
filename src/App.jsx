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
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            EDGAR MARTÍNEZ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            Frontend Developer <br />
            UX/UI Designer
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Creo experiencias digitales donde el diseño, la tecnología y la
            estrategia se unen para construir productos funcionales.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <a href="#projects">Ver proyectos</a>

            <a href="#contact" className="secondary">
              Contacto
            </a>

            <a href="/CV_EdgarMartinezVF.pdf" download className="secondary">
              Descargar CV
            </a>
          </motion.div>

          <motion.div
            className="hero-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span>React</span>
            <span>Vue</span>
            <span>JavaScript</span>
            <span>UX/UI</span>
            <span>Frontend</span>
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