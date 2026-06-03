import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">SOBRE MÍ</p>

        <h2>Combino diseño, desarrollo y visión de negocio.</h2>

        <p>
          Soy Técnico en Entornos Virtuales y Negocios Digitales, enfocado en
          crear interfaces web modernas y experiencias digitales funcionales.
          Me interesa construir soluciones donde la tecnología, el diseño visual
          y las necesidades del usuario trabajen juntas.
        </p>
      </motion.div>
    </section>
  );
}

export default About;