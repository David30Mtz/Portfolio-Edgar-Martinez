import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <motion.div
        className="footer-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >

        <div className="footer-heading">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            ¿Tienes una idea?
            <span> Hagámosla realidad.</span>
          </h2>

        </div>


        <div className="footer-grid">

          <div className="footer-message">

            <p>
              Estoy abierto a colaborar en proyectos web, experiencias
              digitales y soluciones para negocios.
            </p>

            <a
              href="https://mail.google.com/mail/u/0/"
              className="footer-email"
            >
              edgarmtzdev@gmail.com
              <span>↗</span>
            </a>

          </div>


          <div className="footer-links">

            <a
              href="TU_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/David30Mtz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="/CV_EdgarMartinezVF.pdf"
              download
            >
              <span>Currículum</span>
              <span>↓</span>
            </a>

          </div>

        </div>

      </motion.div>


      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Edgar Martínez
        </span>

        <span>
          León, Guanajuato · México
        </span>

        <a href="#">
          VOLVER ARRIBA ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;