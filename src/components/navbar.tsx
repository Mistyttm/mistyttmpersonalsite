import { Link } from "react-router-dom";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Twirl as Hamburger } from "hamburger-react";

Aos.init();

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const result = isOpen
        ? "flex flex-col w-72 right-0 -mr-4 rounded-lg drop-shadow-xl pr-10 pl-10 pb-10 pt-10 mt-16 mr-4 absolute bg-red-300 gap-5 z-10"
        : "hidden";

    return (
        <div>
            <div role="navigation" className="xl:hidden">
                <div className="flex flex-row justify-items-center mt-10">
                    <Link to="/">
                        <img
                            src="/hero_logo.png"
                            alt="Misty Rose! logo"
                            className="max-[400px]:hidden xl:hidden left-6 absolute z-4 w-auto h-16"
                        />
                    </Link>
                    <div className="right-10 absolute">
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
                className="flex flex-row font-bagel text-4xl justify-between h-16 mt-6">
                <div data-aos="fade-right">
                    <Link to="/">
                        <img
                            src="/hero_logo.png"
                            alt="Misty Rose! logo"
                            className="hidden xl:block z-4 w-auto ml-10 h-16"
                        />
                    </Link>
                </div>
                <div className="hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:flex gap-x-20 xl:gap-x-10 2xl:gap-x-20 z-4 mr-10 underline underline-offset-8 right-0 absolute mt-2">
                    <Link to="/">
                        <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Home
                        </h2>
                    </Link>
                    <Link to="/about">
                        <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            About Me
                        </h2>
                    </Link>
                    <Link to="/blog">
                        <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Blog
                        </h2>
                    </Link>
                    <Link to="/projects">
                        <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Projects
                        </h2>
                    </Link>
                    <Link to="/contact">
                        <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                            Contact Me
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
