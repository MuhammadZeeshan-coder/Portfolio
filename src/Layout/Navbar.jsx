import { useEffect, useState } from "react";
import NavbarList from "../Shared/NavbarList";
import ButtonOne from "../Shared/ButtonOne";
import { MoveUpRight, CodeXml, Menu, X } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl lg:text-3xl font-bold flex items-center gap-2"
          style={{ fontFamily: "Poppins" }}
        >
          <CodeXml strokeWidth={3} />
          Zeeshan
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <NavbarList link="#hero" name="Home" />
          <NavbarList link="#about" name="About Me" />
          <NavbarList link="#tech-stack" name="Tech Stack" />
          <NavbarList link="#project" name="Projects" />
          <NavbarList link="#services" name="Services" />
          <NavbarList link="#contact" name="Contact" />
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <ButtonOne
            name="Hire Me"
            icon={<MoveUpRight size={20} />}
            color="white"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0"
        } ${
          scrolled ? "bg-white" : "bg-white"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li onClick={closeMenu}>
            <NavbarList link="#hero" name="Home" />
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

          <ButtonOne
            name="Hire Me"
            icon={<MoveUpRight size={20} />}
            color="white"
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;