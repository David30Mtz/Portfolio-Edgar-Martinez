import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">CONTACTO</p>

        <h2>Construyamos algo juntos.</h2>

        <div className="footer-links">
          <a href="mailto:edgarmtzdev@gmail.com">Email</a>
          <a href="https://github.com/David30Mtz" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/edgar-david-mart%C3%ADnez-gonzalez-025a65248/" target="_blank">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;