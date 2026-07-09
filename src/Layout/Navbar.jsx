import { useEffect, useState } from "react";
import NavbarList from "../Shared/NavbarList";
import ButtonOne from "../Shared/ButtonOne";
import { MoveUpRight, CodeXml } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
           className={`fixed flex justify-center items-center gap-70 py-3 top-0 left-0 w-full z-10 transition-all duration-300 ${
  scrolled ? "bg-white shadow-md" : "bg-transparent"
}`}
        >
            <div>
                <a   href=""
                    className="text-3xl font-bold flex items-center gap-1"
                    style={{ fontFamily: "poppins" }}
                >
                    <CodeXml strokeWidth={3}/> Zeeshan
                </a>
            </div>

            <div>
                <ul className="flex gap-8 items-center">
                    <NavbarList link="#" name="Home" />
                    <NavbarList link="#about" name="About Me" />
                    <NavbarList link="#tech-stack" name="Tech Stack" />
                    <NavbarList link="#project" name="Projects" />
                    <NavbarList link="#services" name="Services" />
                    <NavbarList link="#contact" name="Contact" />
                </ul>
            </div>

            <div>
                <ButtonOne
                    name="Hire Me"
                    icon={<MoveUpRight size={20} />}
                    color="white"
                />
            </div>
        </nav>
    );
};

export default Navbar;