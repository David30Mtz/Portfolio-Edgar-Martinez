import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Essenza Motors",
    type: "Consesionaria premium",
    description:
      "Diseño y desarrollo de una experiencia web premium enfocada en vehículos de alta gama, navegación intuitiva y presentación visual moderna.",
    stack: ["React", "JavaScript", "CSS", "UX/UI"],
  },
  {
    number: "02",
    title: "Restaurant web",
    type: "Catalago interactivo",
    description:
      "Sitio web para restaurante con catálogo interactivo, búsqueda y filtrado dinámico para mejorar la experiencia del usuario.",
    stack: ["HTML", "CSS", "JavaScript", "UI Design"],
  },
  {
    number: "03",
    title: "E-commerce Web",
    type: "Tienda en linea",
    description:
      "Tienda digital personalizada con integración de métodos de pago y optimización del flujo de compra.",
    stack: ["WordPress", "WooCommerce", "UX", "Responsive"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-label">Mejores proyectos</p>
      <h2>Proyectos construidos con diseño y código.</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="project-number">{project.number}</span>

            <div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;