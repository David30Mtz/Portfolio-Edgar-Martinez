import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <motion.header
      className="navbar-wrapper"

      initial={{
        y: -40,
        opacity: 0
      }}

      animate={{
        y: 0,
        opacity: 1
      }}

      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >


      <nav className="navbar">


        <a 
          href="#" 
          className="logo"
        >
          EM
        </a>


        <div className="nav-links">

          <a href="#projects">
            Proyectos
          </a>

          <a href="#about">
            Sobre mí
          </a>

          <a href="#contact">
            Contacto
          </a>

        </div>



        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >

          {open ? <X /> : <Menu />}

        </button>



        <AnimatePresence>

          {open && (

            <motion.div
              className="mobile-menu"

              initial={{
                opacity: 0,
                y: -15
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: -15
              }}
            >

              <a 
                href="#projects"
                onClick={() => setOpen(false)}
              >
                Proyectos
              </a>


              <a 
                href="#about"
                onClick={() => setOpen(false)}
              >
                Sobre mí
              </a>


              <a 
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>


            </motion.div>

          )}

        </AnimatePresence>


      </nav>


    </motion.header>
  );
}


export default Navbar;