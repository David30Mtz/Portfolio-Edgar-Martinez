import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-heading-top">

          <p className="section-label">
            ACERCA DE MI
          </p>

          <span className="about-index">
            04 / PERFIL
          </span>

        </div>

        <h2>
          Desarrollo con una visión
          <span> más allá del código.</span>
        </h2>
      </motion.div>


      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75 }}
      >

        <div className="about-main">

          <p className="about-lead">
            Soy Edgar Martínez, desarrollador web enfocado en crear
            experiencias digitales funcionales, visuales y pensadas
            para necesidades reales.
          </p>

          <p>
            Mi forma de trabajar combina desarrollo, diseño y una visión
            orientada al negocio. Me interesa entender primero qué necesita
            un proyecto y después construir una solución que tenga sentido
            tanto técnica como visualmente.
          </p>

          <p>
            He trabajado en proyectos web enfocados en experiencias
            interactivas, presencia digital y soluciones para negocios,
            utilizando tecnologías modernas de frontend, backend y bases
            de datos.
          </p>

        </div>


        <aside className="about-details">

          <div className="about-detail">
            <span>ENFOQUE</span>
            <p>Desarrollo Web</p>
            <p>Soluciones Digitales</p>
            <p>UI / UX</p>
          </div>

          <div className="about-detail">
            <span>ACTUALMENTE</span>
            <p>Desarrollo de proyectos web</p>
            <p>Soluciones digitales para negocios</p>
          </div>

          <div className="about-detail">
            <span>UBICACIÓN</span>
            <p>León, Guanajuato · México</p>
          </div>

        </aside>

      </motion.div>

    </section>
  );
}

export default About;