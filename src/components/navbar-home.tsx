import { Link } from "react-router-dom";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Twirl as Hamburger } from "hamburger-react";

Aos.init();

function NavbarHome() {
    const [isOpen, setOpen] = useState(false);

    const result = isOpen
        ? "flex flex-col right-4 rounded-lg drop-shadow-xl pr-10 pl-10 pb-10 pt-10 mt-16 absolute bg-red-300 gap-5 z-10"
        : "hidden";

    return (
        <div>
            <div
                role="navigation"
                className="flex flex-col md:hidden mt-10 mb-40">
                <div className="ml-auto mr-10">
                    <Hamburger
                        direction="left"
                        size={48}
                        rounded
                        onToggle={(toggled) => {
                            if (toggled) {
                                setOpen(true);
                            } else {
                                setOpen(false);
                            }
                        }}
                    />
                </div>
                <div className={result}>
                    <Link to="/">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Home
                        </h2>
                    </Link>
                    <Link to="/about">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            About Me
                        </h2>
                    </Link>
                    <Link to="/blog">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Blog
                        </h2>
                    </Link>
                    <Link to="/projects">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Projects
                        </h2>
                    </Link>
                    <Link to="/contact">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Contact Me
                        </h2>
                    </Link>
                </div>
            </div>
            <div
                role="navigation"
                className="hidden md:flex flex-row justify-center md:gap-x-4 lg:gap-x-16 mt-10 mb-40">
                <div data-aos="flip-right">
                    <Link to="/">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Home
                        </h2>
                    </Link>
                </div>
                <div data-aos="flip-right" data-aos-delay="50">
                    <Link to="/about">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            About Me
                        </h2>
                    </Link>
                </div>
                <div data-aos="flip-right" data-aos-delay="150">
                    <Link to="/blog">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Blog
                        </h2>
                    </Link>
                </div>
                <div data-aos="flip-right" data-aos-delay="200">
                    <Link to="/projects">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Projects
                        </h2>
                    </Link>
                </div>
                <div data-aos="flip-right" data-aos-delay="250">
                    <Link to="/contact">
                        <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Contact Me
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavbarHome;
