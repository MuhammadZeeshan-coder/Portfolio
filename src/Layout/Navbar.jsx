import { useEffect, useState } from "react";
import NavbarList from "../Shared/NavbarList";
import ButtonOne from "../Shared/ButtonOne";
import { MoveUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8">
      {/* Navbar */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-full
        flex items-center justify-between gap-0 navbar container px-6
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 mt-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold whitespace-nowrap"
          style={{ fontFamily: "Poppins" }}
        >
          Zeeshan.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavbarList link="#" name="Home" />
          <NavbarList link="#about" name="About Me" />
          <NavbarList link="#tech-stack" name="Tech Stack" />
          <NavbarList link="#project" name="Projects" />
          <NavbarList link="#services" name="Services" />
          <NavbarList link="#contact" name="Contact" />
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <ButtonOne
            link="#contact"
            name="Hire Me"
            icon={<MoveUpRight size={20} />}
            color="white"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg transition"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "max-h-125 opacity-100 mt-3"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="rounded-3xl bg-white shadow-xl px-6 py-6">
          <ul className="flex flex-col items-center gap-6">
            <li onClick={closeMenu}>
              <NavbarList link="#" name="Home" />
            </li>

            <li onClick={closeMenu}>
              <NavbarList link="#about" name="About Me" />
            </li>

            <li onClick={closeMenu}>
              <NavbarList link="#tech-stack" name="Tech Stack" />
            </li>

            <li onClick={closeMenu}>
              <NavbarList link="#project" name="Projects" />
            </li>

            <li onClick={closeMenu}>
              <NavbarList link="#services" name="Services" />
            </li>

            <li onClick={closeMenu}>
              <NavbarList link="#contact" name="Contact" />
            </li>

            <div className="pt-2 w-full flex justify-center">
              <ButtonOne
                name="Hire Me"
                icon={<MoveUpRight size={20} />}
                color="white"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;