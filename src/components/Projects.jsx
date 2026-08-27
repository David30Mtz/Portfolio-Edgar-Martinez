import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Invitaciones Digitales",
    type: "Experiencias web para eventos",
    description:
      "Diseño y desarrollo de experiencias digitales personalizadas para bodas y eventos, integrando animaciones, música, ubicación, cuenta regresiva, RSVP y diseño responsive.",
    stack: [
      "React",
      "JavaScript",
      "Framer Motion",
      "Responsive Design",
    ],
    demo: "https://fiesta-de-leo.vercel.app/",
    category: "CLIENT WORK",
  },

  {
    number: "02",
    title: "Panadería Digital",
    type: "Digitalización de negocio",
    description:
      "Propuesta digital desarrollada para modernizar la presencia de una panadería y explorar nuevas formas de conectar su operación física con herramientas web.",
    stack: [
      "React",
      "JavaScript",
      "UI Design",
      "Business Digitalization",
    ],
    demo: "https://demo-panaderia-funcional.vercel.app/",
    category: "BUSINESS",
  },

  {
    number: "03",
    title: "Essenza Motors",
    type: "Experiencia automotriz premium",
    description:
      "Concepto web centrado en vehículos de alta gama, desarrollado para explorar interfaces editoriales, navegación visual y una experiencia frontend con estética premium.",
    stack: [
      "React",
      "JavaScript",
      "CSS",
      "UX/UI",
    ],
    demo: "https://pagina-web-demo.vercel.app/",
    category: "WEB EXPERIENCE",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="projects-heading-top">
          <p className="section-label">
            SELECTED WORK
          </p>

          <span className="projects-count">
            03 / PROYECTOS
          </span>
        </div>

        <h2>
          Proyectos que mezclan
          <span> diseño, código y propósito.</span>
        </h2>

        <p className="projects-intro">
          Una selección de experiencias digitales desarrolladas para
          clientes, negocios y conceptos web.
        </p>
      </motion.div>


      <div className="projects-list">

        {projects.map((project, index) => (

          <motion.article
            className="project-card-v2"
            key={project.number}

            initial={{
              opacity: 0,
              y: 70,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.75,
              delay: index * 0.08,
            }}
          >

            <div className="project-preview">

              <div className="project-browser">

                <div className="browser-bar">

                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-address">
                    {project.title}
                  </div>

                  <span className="browser-index">
                    {project.number}
                  </span>

                </div>


                <div className="project-frame-wrapper">

                  <iframe
                    src={project.demo}
                    title={`Preview de ${project.title}`}
                    loading="lazy"
                    className="project-frame"
                    tabIndex="-1"
                  />

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-overlay"
                    aria-label={`Abrir ${project.title}`}
                  >
                    <span>
                      Abrir proyecto ↗
                    </span>
                  </a>

                </div>

              </div>

            </div>


            <div className="project-info">

              <div className="project-meta">

                <span className="project-number-v2">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>


              <div className="project-copy">

                <p className="project-type-v2">
                  {project.type}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description-v2">
                  {project.description}
                </p>

              </div>


              <div className="project-bottom">

                <div className="project-stack-v2">

                  {project.stack.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>


                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow"
                  aria-label={`Ver ${project.title}`}
                >
                  ↗
                </a>

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default Projects;