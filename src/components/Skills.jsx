import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Interfaces modernas, responsivas y enfocadas en una experiencia clara y visualmente cuidada.",
    items: [
      "React",
      "Vue 3",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    number: "02",
    title: "Backend & Data",
    description:
      "Integración de lógica, APIs y bases de datos para construir soluciones web más completas.",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Python",
    ],
  },
  {
    number: "03",
    title: "Design & Experience",
    description:
      "Diseño de experiencias digitales buscando equilibrio entre estética, claridad y funcionalidad.",
    items: [
      "UI Design",
      "UX",
      "Responsive Design",
      "Wireframes",
      "Prototyping",
      "Figma",
    ],
  },
  {
    number: "04",
    title: "Workflow & Platforms",
    description:
      "Herramientas que utilizo para desarrollar, versionar, desplegar y mantener proyectos digitales.",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "WordPress",
      "Unity",
      "Blender",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="skills-heading-top">

          <p className="section-label">
            CAPABILITIES
          </p>

          <span className="skills-count">
            STACK / TOOLS
          </span>

        </div>

        <h2>
          Herramientas para convertir
          <span> ideas en productos digitales.</span>
        </h2>

        <p className="skills-intro">
          Trabajo combinando desarrollo, diseño y herramientas digitales
          según lo que necesita cada proyecto.
        </p>

      </motion.div>


      <div className="skills-list">

        {skillGroups.map((skill, index) => (

          <motion.article
            className="skill-row-v2"
            key={skill.title}

            initial={{
              opacity: 0,
              y: 35,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.25,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.07,
            }}
          >

            <div className="skill-number-v2">
              {skill.number}
            </div>


            <div className="skill-main-v2">

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.description}
              </p>

            </div>


            <div className="skill-tags-v2">

              {skill.items.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default Skills;