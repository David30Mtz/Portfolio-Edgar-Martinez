import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "Vue",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Design",
    items: [
      "UX/UI",
      "Figma",
      "Wireframes",
      "Responsive Design",
    ],
  },
  {
    title: "Development",
    items: [
      "Python",
      "Java",
      "C#",
      "Laravel",
    ],
  },
  {
    title: "Tools",
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
      <p className="section-label">MY STACK</p>

      <h2>
        Technologies I use to turn ideas into digital products.
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
              delay: index * 0.15,
            }}
          >

            <h3>{skill.title}</h3>

            {skill.items.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Skills;