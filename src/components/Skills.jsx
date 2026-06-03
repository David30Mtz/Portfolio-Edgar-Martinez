import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Vue", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Diseño UX/UI",
    items: [
      "Figma",
      "Wireframes",
      "Prototipos",
      "Responsive Design",
    ],
  },
  {
    title: "Desarrollo",
    items: [
      "Python",
      "Java",
      "C#",
      "Laravel",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Git/GitHub",
      "Blender",
      "Unity",
      "WordPress",
    ],
  },
];

function Skills() {
  return (
    <section className="skills">

      <p className="section-label">
        TECNOLOGÍAS
      </p>

      <h2>
        Herramientas que utilizo para crear experiencias digitales.
      </h2>


      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={skill.title}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
          >

            <h3>
              {skill.title}
            </h3>

            <div className="skill-tags">

              {skill.items.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>


          </motion.div>

        ))}

      </div>


    </section>
  );
}

export default Skills;