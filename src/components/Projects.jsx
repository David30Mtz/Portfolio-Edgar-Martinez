import { motion } from "framer-motion";

import essenza from "../assets/projects/essenza.JPG";
import excentrycal from "../assets/projects/excentrycal.JPG";
import raikoz from "../assets/projects/essenza.JPG";


const projects = [
  {
    number: "01",
    title: "Essenza Motors",
    type: "Plataforma automotriz premium",
    image: essenza,
    description:
      "Diseño y desarrollo de una experiencia web enfocada en vehículos de alta gama. Creación de interfaz moderna, responsive design y optimización de experiencia de usuario.",
    stack: ["React", "JavaScript", "CSS", "UX/UI"],
    demo: "https://pagina-web-demo.vercel.app/",
    github: "https://github.com/David30Mtz",
  },

  {
    number: "02",
    title: "Excentrycal Shop",
    type: "Aplicación e-commerce fullstack",
    image: excentrycal,
    description:
      "Desarrollo de plataforma e-commerce con frontend, backend, manejo de datos y funcionalidades enfocadas en administración y experiencia de compra.",
    stack: [
      "React",
      "Node",
      "Backend",
      "Database",
      "API"
    ],
    demo: "https://excentrycalshop.vercel.app/",
    github: "https://github.com/David30MtzB",
  },

  {
    number: "03",
    title: "Raikoz",
    type: "E-commerce",
    image: raikoz,
    description:
      "Implementación y personalización de tienda digital en Shopify, trabajando diseño visual, estructura de contenido y experiencia enfocada en conversión.",
    stack: [
      "Shopify",
      "UX/UI",
      "E-commerce",
      "Marketing Digital"
    ],
    demo: "TU LINK",
    github: "#",
  },
];



function Projects() {


return (

<section className="projects" id="projects">


<p className="section-label">
PROYECTOS
</p>


<h2>
Experiencias digitales creadas con diseño y tecnología.
</h2>



<div className="projects-list">


{projects.map((project)=>(


<motion.article

className="project-card"

key={project.number}


initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}


transition={{
duration:.7
}}

>


<img

src={project.image}

alt={project.title}

className="project-image"

/>



<div className="project-content">


<span className="project-number">

{project.number}

</span>


<p className="project-type">

{project.type}

</p>


<h3>

{project.title}

</h3>


<p className="project-description">

{project.description}

</p>




<div className="stack">


{project.stack.map((tech)=>(


<span key={tech}>

{tech}

</span>


))}


</div>



<div className="project-links">


<a 
href={project.demo}
target="_blank"
>

Ver proyecto ↗

</a>


<a 
href={project.github}
target="_blank"
>

Código

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