import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`navbar-wrapper ${scrolled ? "is-scrolled" : ""}`}
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <nav className="navbar">

        <a
          href="#"
          className="logo"
          aria-label="Volver al inicio"
        >
          <span className="logo-mark">EM</span>

          <span className="logo-text">
            Edgar Martínez
          </span>
        </a>


        <div className="nav-links">

          <a href="#projects">
            Proyectos
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#about">
            Sobre mí
          </a>

        </div>


        <a
          href="#contact"
          className="nav-contact"
        >
          Contacto
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>


        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>


        <AnimatePresence>

          {open && (

            <motion.div
              className="mobile-menu"

              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}

              transition={{
                duration: 0.22,
              }}
            >

              <a
                href="#projects"
                onClick={() => setOpen(false)}
              >
                <span>01</span>
                Proyectos
              </a>


              <a
                href="#skills"
                onClick={() => setOpen(false)}
              >
                <span>02</span>
                Skills
              </a>


              <a
                href="#about"
                onClick={() => setOpen(false)}
              >
                <span>03</span>
                Sobre mí
              </a>


              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mobile-contact"
              >
                <span>04</span>

                Contacto

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </a>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>
    </motion.header>
  );
}

export default Navbar;